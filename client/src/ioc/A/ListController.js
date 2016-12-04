/**
 * author: TurboLoong
 * date: 2016/12/2
 * descriptioin:
 */
/**
 *@author: TurboLoong
 *@date: 2016/12/5
 *@param:
 *@des: IOC，将依赖的管理交由外部控制
 */
define(
    function (require) {

        /*var Model = require('./ListModel');
        var View = require('./ListView');
        function ListController() {
            this.model = new Model();
            this.view = new View();
            this.view.model = this.model;
        }*/
        
        //IOC
        function ListController(model, view) {
            this.model = model;
            this.view = view;
            this.view.model = this.model;
        }

        ListController.prototype.enter = function () {
            this.model.load();
            this.view.render();
        };

        return ListController;
    }
);
