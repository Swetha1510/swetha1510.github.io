$(function(){

	$(".smMenuCaller").click(function(){
		$(".smallMenu").addClass("showMenu");
		$(".menuOverlay").fadeIn(200);
		$("body").addClass("noScroll");
	});

	$(".menuOverlay , .smMenuInner a").click(function(){
		$(".smallMenu").removeClass("showMenu");
		$(".menuOverlay").fadeOut(200);
		$("body").removeClass("noScroll");
	});

	$(".mdInput input,.mdInput textarea").focus(function(){
		$(this).parent().addClass("mdFocussed");
	});

	$( "body" ).delegate( ".mdInput input,.mdInput textarea", "focus", function() {
		$(this).parent().addClass("mdFocussed");
	});

	$( "body" ).delegate( ".mdInput input,.mdInput textarea", "blur", function() {
		if ($(this).val() == "") {
			$(this).parent().removeClass("mdFocussed");
		}
	});

	$( "body" ).delegate( ".mdInput select", "change", function() {
		if ($(this).val() == "") {
			$(this).parent().removeClass("mdFocussed");
		} else {
			$(this).parent().addClass("mdFocussed");
		}
	});

});