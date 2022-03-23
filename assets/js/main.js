
  $('.carousel').carousel({
      interval: 5000
     });

  $(".gear-check").click(function()
  {
    $(".color-option").fadeToggle();
  });

  var colorLi = $(".color-option ul li");

  colorLi
  .eq(0).css("backgroundColor","rgb(133, 6, 65)").end()
  .eq(1).css("backgroundColor","rgb(10, 148, 56)").end()
  .eq(2).css("backgroundColor","rgb(167, 76, 1)").end()
  .eq(3).css("backgroundColor","rgb(19, 62, 204)").end()
  .eq(4).css("backgroundColor","rgb(147, 148, 66)");

  colorLi.click(function(){

    //console.log($(this).attr("data-value"));

    $("link[href*='theme']").attr("href",$(this).attr("data-value"));

  });

 var scrollButton = $("#scroll-top");
 $(window).scroll(function(){
   if( $(this).scrollTop() >=700 ){

      scrollButton.show();

   }else{

      scrollButton.hide();

   }

  

 });

 scrollButton.click(function(){
  $("html,body").animate({ scrollTop:0 },1000);
});