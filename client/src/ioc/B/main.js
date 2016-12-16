/**
 * author: TurboLoong
 * date: 2016/12/5
 * descriptioin:
 */
/**
 *@author: TurboLoong
 *@date: 2016/12/5
 *@param: 
 *@des: 通过控制反转将业务模块中各个容易变化的部件抽象解耦，不同的项目去实现自己的定制需求，而通用代码不要重复开发， 大概的架构演变如下图（Action 对应代码中的 Controller）
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