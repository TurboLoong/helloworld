/**
 * author: TurboLoong
 * date: 2016/12/5
 * descriptioin:
 */
/**
 *@author: TurboLoong
 *@date: 2016/12/5
 *@param:
 *@des: 继承A/ListModel,重写load方法
 */
define(
    function (require) {

        var AListModel = require('A/ListModel');

        function ListModel() {
            AListModel.apply(this, arguments);
        }

        // 继承 A/ListModel
        ListModel.prototype = new AListModel();
        
        // 数据源设置为了 B 的数据
        ListModel.prototype.load = function () {
            this.set('items', [5, 4, 3, 2, 1]);
        };

        return ListModel;
    }
);