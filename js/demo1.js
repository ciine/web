$(function(){
	//$('div:contains("div")').css('background-color:red,border:2px solid green');  不对
	//$('div:has("p")').addClass('style');  div含有p元素
	//$('div:contains("div")').css('background-color','red').css('border','2px solid  skyblue'); 内容包含div
	//$('div:contains("div")').addClass('style'); 内容包含div
	
	//$('div:empty').addClass('style'); 必须设置宽高  div为空
	//$('div:parent').addClass('style'); 必须设置宽高 div 有内容
	//$('div:hidden').css('display','block').css('background-color','pink');  选中隐藏元素
	//$('div:visible').addClass('style'); 选中显示元素
  //$('div[id]').addClass('style'); 选取带有id号的元素
  //$('div[id=box1]').addClass('style');  选取id=box1
	//$('div[id^=bo]').addClass('style'); 以bo开始的id号
 	//$('div[id!=box1]').addClass('style'); 选取id！=box1
 	//$('div[id$=1]').addClass('style'); 以1结束的id号
 	//$('div[title|=little]').addClass('style');以title中little开头包含-的title
 	//$('div[id*=bo]').addClass('style')  id里面有bo
 	//$('div[title~=test]').addClass('style'); 选取title有空格连接的含有test 元素
 	//$('div[title][class]').addClass('style');含有titie class属性
 	
})