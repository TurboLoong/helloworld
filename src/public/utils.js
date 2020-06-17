Function.prototype.before = function(beforeFunc){
  var that = this;
  return function(){
      beforeFunc.apply(this, arguments);
      return that.apply(this, arguments);
  }
}
Function.prototype.after = function(afterFunc){
  var that = this;
  return function(){
      var ret = that.apply(this, arguments);
      afterFunc.apply(this, arguments);
      return ret;
  }
}