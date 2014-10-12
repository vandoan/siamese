$(function() {
	$('ul').before('<p class= "notice">just updated</p>'); 
	$('li.hot').prepend('+ '); 
	var $newListItem = $('<li><em>gluten-free</em> soysauce</li'); 
	$('li:last').after($newListItem); 
}); 
