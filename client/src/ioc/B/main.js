/**
 * author: TurboLoong
 * date: 2016/12/5
 * descriptioin:
 */
define(
    function (require) {
        // 重用 A项目的Controller 和 View
        var List = require('A/ListController');
        var View = require('A/ListView');

        // 引入自己的定制 Model
        var Model = require('ListModel');

        var model = new Model();
        var view = new View();
        // 由构造函数将 model 和 view 两个依赖注入给控制器
        var list = new List(model, view);

        list.enter();
    }
);