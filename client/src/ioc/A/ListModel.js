/**
 * author: TurboLoong
 * date: 2016/12/5
 * descriptioin:
 */
define(
    function (require) {
        function ListModel() {
            this.store = {};
        }

        ListModel.prototype.load = function () {
            this.set('items', [1, 2, 3, 4, 5]);
        };

        ListModel.prototype.set = function (key, value) {
            this.store[key] = value;
        };

        ListModel.prototype.get = function (key) {
            return this.store[key];
        };

        return ListModel;
    }
);