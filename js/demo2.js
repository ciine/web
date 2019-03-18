$(function(){

	$('tr:even').addClass('even');
	

	$('tr:even').hover(function(){
		$(this).removeClass('even');
		$(this).addClass('hight');

	},function(){

		$(this).removeClass('hight');
		$(this).addClass('even');

	})

	$('tr:odd').addClass('odd');
	$('tr:odd').hover(function(){
		$(this).removeClass('odd');
		$(this).addClass('hight');

	},function(){

		$(this).removeClass('hight');
		$(this).addClass('odd');

	})
})