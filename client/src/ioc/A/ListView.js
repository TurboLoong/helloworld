/**
 * author: TurboLoong
 * date: 2016/12/5
 * descriptioin:
 */
define(
    function (require) {
        function ListView() {}

        ListView.prototype.render = function () {
            document.body.innerHTML = this.model.get('items');
        };

        return ListView;
    }
);