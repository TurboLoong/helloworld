/**
 * author: TurboLoong
 * date: 2016/11/28
 * descriptioin:
 */
"use strict"
angular
    .module('app', [])
    .controller('AppController', function($scope) {
        $scope.inputValue = '';
        $scope.oldInputValue = '';
        $scope.$watch('inputValue', function (newValue,oldValue) {
            $scope.oldInputValue = oldValue;
        })
    });
var obj = {};
function setupModuleLoader(obj) {
    function ensure(obj, name, factory) {
        return obj[name] || (obj[name] = factory());
    }
    var angular = ensure(obj, 'angular', Object);
    return ensure(angular, 'module', function () {
        var modules = {};
        return function module(name, requires, configFn) {
            return ensure(modules, name, function () {

            })
        }
    })
}