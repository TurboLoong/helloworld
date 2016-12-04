/**
 * author: TurboLoong
 * date: 2016/12/5
 * descriptioin:
 */
define(
    function (require) {
        var List = require('ListController');
        var Model = require('ListModel');
        var View = require('ListView');

        var model = new Model();
        var view = new View();
        var list = new List(model, view);

        list.enter();
    }
);