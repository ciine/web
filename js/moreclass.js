/*$(function(){
	var  $cate=$('ul li:gt(9)');
	$cate.hide();
	var $btn=$('span.showmore');
	$btn.click(function(){

		if($cate.is(':visible')){
			$cate.hide();
			$(this).text('showmore');

		}else{
			$cate.show();
			$(this).text('section');

		}

	})

})  第一种方法*/


/*$(function(){
	var  $cate=$('ul li:gt(9)');
	$cate.hide();
	var $btn=$('span.showmore');
	$btn.click(function(){
		$cate.toggle();
	})

}) */

$(function(){
	var  $cate=$('ul li:gt(9)');
	$cate.hide();
	var $btn=$('span.showmore');
	$btn.click(function(){
			
			$cate.toggle();
			if($cate.is(':visible')){
						$(this).text('showmore');

		}else{
			
			$(this).text('section');

		}

	})
			



})
	



