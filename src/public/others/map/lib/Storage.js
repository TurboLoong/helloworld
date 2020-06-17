import _ from '@/public/lib/underscore-min';
import {
  hasLngLat, parseAddress, getNoLocationPixel, getPixel,
} from './utils';

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
      this._painter.setFitView();
      this._painter.paint();
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
    this.groupMap.forEach((value) => {
      this.setData(value);
    });
  }

  setPainter(painter) {
    this._painter = painter;
  }

  setNodes(nodes) {
    this.localsMapDisplay.clear();
    if (Array.isArray(nodes)) {
      nodes.forEach((v) => {
        this.locals.set(v.bbdQyxxId, v);
        // 如果有经纬度
        if (hasLngLat(v)) {
          // 如果添加进localsMap的企业
          if (!this.localsMapDisplay.has(v.bbdQyxxId)) {
            const type = !v.riskCount ? 'risk' : 'normal';
            const point = {
              lngLat: [v.gisLon, v.gisLat],
              type,
            };
            Object.assign(v, point);
            this.localsMapDisplay.set(v.bbdQyxxId, v);
          } else {
            const oldLocation = this.localsMapDisplay.get(v.bbdQyxxId);
            const newLocation = Object.assign(oldLocation, v);
            this.localsMapDisplay.set(v.bbdQyxxId, newLocation);
          }
        } else if (v.address !== '-' && !_.isEmpty(v.address)) {
          parseAddress(v).then((data) => {
            const { result } = data;
            const { local } = data;
            if (!_.isEmpty(result)) {
              const { lng } = result.location;
              const { lat } = result.location;
              Object.assign(local, {
                gisLon: lng,
                gisLat: lat,
                lngLat: [lng, lat],
                type: !local.riskCount ? 'risk' : 'normal',
              });
              this.localsMapDisplay.set(local.bbdQyxxId, local);
              this._painter.drawImage(local, getPixel(local.lngLat, this._painter._map));
            } else {
              local.type = !v.riskCount ? 'risk' : 'normal';
              local.pixel = getNoLocationPixel(this._painter.groupCenter);
              this.notLocalsMap.set(local.bbdQyxxId, local);
              // 存入无法解析的地址
            }
          });
        } else {
          v.type = !v.riskCount ? 'risk' : 'normal';
          v.pixel = getNoLocationPixel(this._painter.groupCenter);
          this.notLocalsMap.set(v.bbdQyxxId, v);
          // 存入无法解析的地址
        }
      });
    }
  }

  setLinks(links) {
    this.linesMap.clear();
    let notLocalNum = 0;
    if (Array.isArray(links)) {
      links.forEach((v) => {
        let startPoint = this.localsMapDisplay.get(v.startId);
        let endPoint = this.localsMapDisplay.get(v.endId);
        // 如果展现数据里面有
        if (startPoint && endPoint) {
          this.linesMap.set({
            startId: v.startId,
            endId: v.endId,
          }, {
            start: {
              id: v.startId,
              lngLat: startPoint.lngLat,
            },
            end: {
              id: v.endId,
              lngLat: endPoint.lngLat,
            },
          });
        } else { // 如果展现数据里面没有，就从原始数据里面拿之后解析
          startPoint = this.locals.get(v.startId);
          endPoint = this.locals.get(v.endId);
          Promise.all([parseAddress(startPoint), parseAddress(endPoint)]).then((values) => {
            const start = values[0]; const
              end = values[1];
            const startResult = start.result; const
              endResult = end.result;
            const startLocal = start.local; const
              endLocal = end.local;
            if (!_.isEmpty(startResult) && !_.isEmpty(endResult)) {
              this._painter.drawLine({
                start: { lngLat: [startResult.location.lng, startResult.location.lat] },
                end: { lngLat: [endResult.location.lng, endResult.location.lat] },
              });
              this.linesMap.set({
                startId: startLocal.bbdQyxxId,
                endId: endLocal.bbdQyxxId,
              }, {
                start: {
                  id: startLocal.bbdQyxxId,
                  lngLat: [startResult.location.lng, startResult.location.lat],
                },
                end: {
                  id: v.endId,
                  lngLat: [endResult.location.lng, endResult.location.lat],
                },
              });
            } else {
              notLocalNum += 1;
              // console.log('notLocalMap');
              // console.log(startPoint);
              // console.log(endPoint);
              console.log(notLocalNum);
            }
          });
        }
      });
    }
  }
}
