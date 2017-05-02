var hour_s = '00';
var minutes_s = 14;
var seconds_s = 59;

jQuery(function($){
  act_timer();
  $('.phone_input').keypress(function(e) {
    if (!(e.which == 8 || (e.which > 47)&&(e.which <= 57))) {
      return false;
    }
  });

  $("#top-menu li").click(function(){
    var array_sections = ["body,html","#result","#spec-tell","#comments","#form"];
    var index = $(this).index();
    if(index == ($("#top-menu li").length - 1)) index = index - 1;
    $('html,body').animate({scrollTop: $(array_sections[index]).offset().top - $("header").height()}, 400);
    return false;
  });

  $(".btn-order").click(function(){
    $("#top-menu li").eq(($("#top-menu li").length - 1)).click();
    return false;
  });

  $(".form-block input[type=submit]").click(function(){
    var error = 0;
    var parent = $(this).parents('form');
    parent.find(".input_form").each(function(){
      if($(this).val().length < 3) {
        $(this).addClass("error");
        error++;
      } else $(this).removeClass("error");
    });
    if (error == 0) return true;
    else return false;
  });

  $(window).scroll(function(){
    var top = $(this).scrollTop();
    if(top >= $("#effetcs").offset().top) $("header").addClass("active");
    else $("header").removeAttr("class");
  });

  $(".select").click(function(){
    if($(this).hasClass("active")) $(this).removeClass("active").find(".select-drop").hide();
    else $(this).addClass("active").find(".select-drop").show();
    return false;
  });

  $(".select .select-drop div").click(function(){
    var value = $(this).text();
    var p = $(this).parents(".select");
    p.find(".select-value").text(value);
    p.find("input").val(value);
  });

  $("body").click(function(){
    $(".select.active").removeClass("active").find(".select-drop").hide();
  });

  if($.browser.msie){
    $(".minute_1, .seconde_1").css("line-height","70px").css("letter-spacing","13px");
  }
  $('.btn-order').click(function(){
    var el = $(this).attr('data-href');
    console.log(el);
    $('html, body').animate({
      scrollTop: $(el).offset().top
    }, 1500);
    return false;
  });
});

function act_timer(){
  if(!(minutes_s=='00' && seconds_s=='00')){
    seconds_s--;
    if(seconds_s==-01){seconds_s=59; minutes_s=minutes_s-1;}
    else minutes_s=minutes_s;
    if(seconds_s<=9) seconds_s="0" + seconds_s;
    minutes_sh = minutes_s;
    if(minutes_s < 10) minutes_sh = '0'+ minutes_s;
    $(".timer .minute_1").html("<span>" + minutes_sh + "</span>");
    $(".timer .seconde_1").html("<span>" + seconds_s + "</span>");
    setTimeout("act_timer()", 1000);
  } else {
    if($('.timer span').css('display')=='block'){
      $('.timer span').css('display','none');
      setTimeout("act_timer()", 200);
    } else {
      $('.timer span').css('display','block');
      setTimeout("act_timer()", 1000);
    }
  }
}



function sel_show(){

   if($('.sel_ul').css('display')=='none'){

       $('.sel_ul').fadeIn(200);

   } else {

       $('.sel_ul').fadeOut(200);

   }

}


