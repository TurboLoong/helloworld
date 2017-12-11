import cities from '../../json/city_object.json';
let geocoder = new AMap.Geocoder({
    city: '010',
    radius: 1000
});
export function hasLngLat(local) {
    return local.gisLon !== 0 && local.gisLat !== 0;
}

export function isInCity(local) {
    cities.some(v => {
        let city = cities[v];
        return local.address.indexOf(city);
    });
}

export function parseAddress(local, callBack) {
    geocoder.getLocation(local.address, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            var geocode = result.geocodes;
            callBack(geocode);
        }
    });
}