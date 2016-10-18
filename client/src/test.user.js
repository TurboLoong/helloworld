/**
 * Created by TurboLoong on 2016/10/17.
 */
window.addEventListener('load', function (event) {
    setTimeout(function () {
        var removeObj = document.getElementById("cry-face-dia");
        document.body.remove(removeObj);
        console.log("移除成功")
    }, 1000);
});