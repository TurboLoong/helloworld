import _ from 'underscore';
import { hasLngLat, parseAddress, getNoLocationPixel, getPixel } from './utils';
export default class Storage {
    constructor() {
        this.localsMapDisplay = new Map(); // 展现的数据
        this.locals = new Map();
        this.linesMap = new Map();
        this.groupMap = new Map();
        this.notLocalsMap = new Map();
    }

    getLocalsMapDisplay() {
        return this.localsMapDisplay;
    }

    getLinesMap() {
        return this.linesMap;
    }

    getNotLocalsMap() {
        return this.notLocalsMap;
    }

    getGroupMap() {
        return this.groupMap;
    }

    setData(data) {
        if (Array.isArray(data.nodes)) {
            this.setNodes(data.nodes);
            this.setLinks(data.links);
            this._painter.paint();
            this._painter.setFitView();
        }
    }

    addGoup(companyId, data) {
        this.groupMap.set(companyId, data);
        this.setGroup();
    }

    deleteGroup(companyId) {
        this.groupMap.delete(companyId);
        this.setGroup();
    }

    setGroup() {
        this.groupMap.forEach(value => {
            this.setData(value);
        });
    }

    setPainter(painter) {
        this._painter = painter;
    }

    setNodes(nodes) {
        this.localsMapDisplay.clear();
        Array.isArray(nodes) && nodes.forEach(v => {
            this.locals.set(v.bbdQyxxId, v);
            // 如果有经纬度
            if (hasLngLat(v)) {
                // 如果添加进localsMap的企业
                if (!this.localsMapDisplay.has(v.bbdQyxxId)) {
                    let type = !v.riskCount ? 'risk' : 'normal';
                    let point = {
                        lngLat: [v.gisLon, v.gisLat],
                        type
                    };
                    Object.assign(v, point);
                    this.localsMapDisplay.set(v.bbdQyxxId, v);
                } else {
                    let oldLocation = this.localsMapDisplay.get(v.bbdQyxxId);
                    let newLocation = Object.assign(oldLocation, v);
                    this.localsMapDisplay.set(v.bbdQyxxId, newLocation);
                }
            } else if( v.address !== '-' && !_.isEmpty(v.address)){
                //没有经纬度，进行解析
                parseAddress(v).then(data => {
                    let result = data.result;
                    let local = data.local;
                    if (!_.isEmpty(result)) {
                        let lng = result.location.lng;
                        let lat = result.location.lat;
                        Object.assign(local, {
                            gisLon: lng,
                            gisLat: lat,
                            lngLat: [lng, lat],
                            type: !local.riskCount ? 'risk' : 'normal'
                        });
                        this.localsMapDisplay.set(local.bbdQyxxId, local);
                        this._painter.drawImage(local, getPixel(local.lngLat, this._painter._map));
                    } else {
                        local.type = !v.riskCount ? 'risk' : 'normal';
                        local.pixel = getNoLocationPixel(this._painter.groupCenter);
                        this.notLocalsMap.set(local.bbdQyxxId, local);
                    }
                });
            } else {
                v.type = !v.riskCount ? 'risk' : 'normal';
                v.pixel = getNoLocationPixel(this._painter.groupCenter);
                this.notLocalsMap.set(v.bbdQyxxId, v);
            }
        });
    }

    setLinks(links) {
        this.linesMap.clear();
        Array.isArray(links) && links.forEach(v => {
            let startPoint = this.localsMapDisplay.get(v.startId);
            let endPoint = this.localsMapDisplay.get(v.endId);
            // 如果展现数据里面有
            if (startPoint && endPoint) {
                if (startPoint.lngLat && endPoint.lngLat) {
                    this.linesMap.set({
                        startId: v.startId,
                        endId: v.endId
                    }, {
                        start: {
                            id: v.startId,
                            lngLat: startPoint.lngLat
                        },
                        end: {
                            id: v.endId,
                            lngLat: endPoint.lngLat
                        }
                    });
                } else {
                    console.log('noLngLat', v);
                }
            } else { // 如果展现数据里面没有，就从原始数据里面拿之后解析
                startPoint = this.locals.get(v.startId);
                endPoint = this.locals.get(v.endId);
                Promise.all([parseAddress(startPoint), parseAddress(endPoint)]).then(values => {
                    let start = values[0], end = values[1];
                    let startResult = start.result, endResult = end.result;
                    let startLocal = start.local, endLocal = end.local;
                    if (!_.isEmpty(startResult) && !_.isEmpty(endResult)) {
                        this._painter.drawLine({
                            start: { lngLat: [startResult.location.lng, startResult.location.lat] },
                            end: { lngLat: [endResult.location.lng, endResult.location.lat] }
                        });
                        this.linesMap.set({
                            startId: startLocal.bbdQyxxId,
                            endId: endLocal.bbdQyxxId
                        }, {
                            start: {
                                id: startLocal.bbdQyxxId,
                                lngLat: [startResult.location.lng, startResult.location.lat]
                            },
                                end: {
                                id: v.endId,
                                lngLat: [endResult.location.lng, endResult.location.lat]
                            }
                        });
                    } else {
                        console.log('notLocalMap');
                        console.log(startPoint);
                        console.log(endPoint);
                    }
                });
            }
        });
    }
}