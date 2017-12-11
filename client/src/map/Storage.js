import { hasLngLat, isInCity, parseAddress } from './utils';
export default class Storage {
    constructor() {
        this.localsMap = new Map();
        this.linesMap = new Map();
        this.groupMap = new Map();
    }

    getLocalsMap() {
        return this.localsMap;
    }

    getLinesMap() {
        return this.linesMap;
    }

    getGroupMap() {
        return this.groupMap;
    }

    setData(data) {
        if (Array.isArray(data.nodes) && Array.isArray(data.links)) {
            this.setNodes(data.nodes);
            this.setLinks(data.links);
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

    setNodes(nodes) {
        this.localsMap.clear();
        Array.isArray(nodes) && nodes.forEach(v => {
            if (hasLngLat(v)) {
                if (!this.localsMap.has(v.bbdQyxxId)) {
                    let type = !v.riskCount ? 'risk' : 'normal';
                    let point = {
                        lngLat: [v.gisLon, v.gisLat],
                        type
                    };
                    Object.assign(v, point);
                    this.localsMap.set(v.bbdQyxxId, v);
                }
            } else {
                if (isInCity(v)) {
                    parseAddress(v, (result) => {
                        let lng = result.location.getLng();
                        let lat = result.location.getLat();
                        Object.assign(v, {
                            gisLon: lng,
                            gisLat: lat,
                            lngLat: [lng, lat],
                            type: !v.riskCount ? 'risk' : 'normal'
                        });
                        this.localsMap.set(v.bbdQyxxId, v);
                    });
                }
            }
        });
    }

    setLinks(links) {
        this.linesMap.clear();
        Array.isArray(links) && links.forEach(v => {
            let startPoint = this.localsMap.get(v.startId);
            let endPoint = this.localsMap.get(v.endId);
            if (startPoint && endPoint) {
                this.linesMap.set(v.startId, {
                    start: {
                        lngLat: startPoint.lngLat
                    },
                    end: {
                        lngLat: endPoint.lngLat
                    }
                });
            }
        });
    }
}