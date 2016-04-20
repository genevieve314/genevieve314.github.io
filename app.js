
$(document).ready(function(){
	$('#GS').load('assets/views/gameswap.html');

	$('#Game').click(function(){
		console.log('in on click')
		var el = document.getElementById('GameSwap')
		el.scrollIntoView(false);
	});

	$('#Liven').click(function(){
		var el = document.getElementById('LivenUp')
		el.scrollIntoView(false);
	});

});
