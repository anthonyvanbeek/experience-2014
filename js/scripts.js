

$(function() {
	var windowWidth = $(window).width();
	var newWidth = ((windowWidth - $(".container").width()) / 2) + $(".container").width();
	$(".bottomblocks").width(newWidth);
});



$(window).resize(function() {
	var windowWidth = $(window).width();
	var newWidth = ((windowWidth - $(".container").width()) / 2) + $(".container").width();
	$(".bottomblocks").width(newWidth);
});