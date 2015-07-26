(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').click(function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);