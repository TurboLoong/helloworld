/**
 * Created by TurboLoong on 2016/9/20.
 */
function fail(thing) {
    throw new Error(thing);
}
function warn(thing) {
    console.log(["WARNING:", thing].join(' '));
}
function note(thing) {
    console.log(["NOTE", thing].join(' '));
}

function isIndexed(data) {
    return _.isArray(data) || _.isString(data);
}
function nth(a, index){
    if (!_.isNumber(index)) fail("Expected a number as the index");
    if (!isIndexed(a)) fail("Not supported on non-indexed type");
    if ((index < 0) || (index > a.length - 1))
        fail("Index value is out of bounds");
    return a[index];
}

var letters = [1, 2, 3];
nth(letters, 1);

nth("abc", 0);

nth({}, 2);

nth(letters, 4000);

function second(a) {
    return nth(a, 1);
}

function compareLessThanOrEqual(x, y) {
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
}

[2, 3, 4, 6, 8].sort(compareLessThanOrEqual);