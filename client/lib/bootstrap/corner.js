(function($){
	$.fn.formCorner = function() {
		return this.each(function() {
			var input = $(this);
			var input_background = input.css("background-color");
			var input_border = input.css("border-color");
			input.css("border", "none");
			var wrap_width = parseInt(input.css("width")) + 4;
			var wrapper = input.wrap("<div><div>").parent();
			var border = wrapper.wrap("<div></div>").parent();
			wrapper.css("background-color", input_background).css("padding", "1px");
			border.css("background-color", input_border).css("padding", "1px").css("width", wrap_width + "px");
			wrapper.corner("round 5px");
			border.corner("round 5px");
		});
	}
})(jQuery);