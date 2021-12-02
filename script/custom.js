// 네비게이션
$('.menu li').mouseenter(function(){
  $('.sub-menu, .sub-menu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
  $('.sub-menu, .sub-menu').stop().slideUp()
})

// 팝업창
$('.open-modal').click(function(){
  $('.modal').fadeIn();
})
$('.close-modal').click(function(){
  $('.modal').fadeOut();
})