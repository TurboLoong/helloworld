var Scope = function() {
	this.$$watchers = [];

}
Scope.prototype.$watch = function(watchExp, listener) {
		this.$$watchers.push({
			watchExp: watchExp,
			listener: listener || function() {}
		});
	}
	Scope.prototype.$digest = function() {
		var dirty;
		do{
			dirty = false;
			for(var i = 0; i<this.$$watchers.length; i++) {
				var newValue = this.$$watchers[i].watchExp(),
						oldValue = this.$$watchers[i].last;
				if(oldValue != newValue) {
					this.$$watchers[i].listener(newValue, oldValue);
					dirty = true;
					this.$$watchers[i].last = newValue;
				}
			}
		}while(dirty);
	}
	var $scope = new Scopw();
	$scope.name = "Tom";
	$scope.$watch(function() {
		return $scope.name;
	}, function(newValue, oldValue) {
		console.log(newValue,oldValue);
	});
	$scope.$digest();