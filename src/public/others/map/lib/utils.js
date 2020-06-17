const geocoder = new AMap.Geocoder({
  // city: '010',
  radius: 1000,
});
export function hasLngLat(local) {
  return local.gisLon !== 0 && local.gisLat !== 0;
}

export function parseAddress(local) {
  if (local.address) {
    return new Promise(((resolve) => {
      if (!local.gisLon || !local.gisLat) {
        geocoder.getLocation(local.address, (status, result) => {
          if (status === 'complete' && result.info === 'OK') {
            const geocode = result.geocodes;
            resolve({ local, result: geocode[0] });
          } else {
            resolve({ local });
          }
        });
      } else {
        resolve({
          local,
          result: {
            location: {
              lng: local.gisLon,
              lat: local.gisLat,
            },
          },
        });
      }
    }));
  }
}

export function getPixel(local, map) {
  const lngLat = new AMap.LngLat(...local);
  return map.lngLatToContainer(lngLat);
}

export function getNoLocationPixel(center) {
  const agree = Math.random() * 2 * Math.PI;
  const l = center.r * Math.random();
  const x = center.x + l * Math.cos(agree);
  const y = center.y + l * Math.sign(agree);
  return { x, y };
}

export function isInContainer(point, container) {
  return point.x > 0 && point.x < container.width && point.y > 0 && point.y < container.height;
}
