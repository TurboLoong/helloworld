/**
 * author: TurboLoong
 * date: 2016/11/28
 * descriptioin:
 */
var fs = require('fs');
var path = require('path');

var provinces = [], cities = [], disctrict = [];
fs.readFile(process.cwd()  + path.sep + 'json-array-of-province.json', function (err, data) {
    if(err){
        console.log("读取json文件出错");
    }
    provinces = JSON.parse(data);
    fs.readFile(process.cwd()  + path.sep + 'json-array-of-city.json', function (err, data) {
        if(err){
            console.log("读取json文件出错");
        }
        cities = JSON.parse(data);
        fs.readFile(process.cwd()  + path.sep + 'json-array-of-district.json', function (err, data) {
            if(err){
                console.log("读取json文件出错");
            }
            disctrict = JSON.parse(data);
            var obj = {};
            var cityObj = {};
            provinces.forEach(function (provinceValue, index) {
                obj[provinceValue.code] = []
                cities.forEach(function (cityValue, index) {
                    if(cityValue.code.substring(0, 2) == provinceValue.code.substring(0, 2)){
                        obj[provinceValue.code].push(cityValue);
                    }
                    
                    cityObj[cityValue.code] = [];
                    disctrict.forEach(function (disctricValue, index) {
                        if(disctricValue.code.substring(0, 4) == cityValue.code.substring(0, 4)){
                            cityObj[cityValue.code].push(disctricValue);
                        }
                    })
                })
            });
            saveData('./provinces.json', obj);
            saveData('./cities.json', cityObj)
        });
    });
});

function saveData(path, data) {
    fs.writeFile(path, JSON.stringify(data, null, ' '), function (err) {
        if(err){
            return console.log(err);
        }
        console.log('data saved');
    })
}