$(document).ready(function () {
  $('#grade').addClass('navSelected-li');
  $('#grade a').addClass('navSelected-a');
  $('nav li').click(function () {
    $('nav li').removeClass("navSelected-li");
    $(this).addClass('navSelected-li');
  })
  $('nav a').click(function () {
    $('nav a').removeClass("navSelected-a");
    $(this).addClass('navSelected-a');
  })
  $('#search-border').click(function () {
    $(this).removeClass('search-border').addClass('search-border-focus');
    event.stopImmediatePropagation();
    $('.search-button').fadeIn(400);
  })
  $('.search-button').click(function () {
    event.stopImmediatePropagation();
    $('.search-button').show();
  })
  $(document).bind("click",function(){
    $('.search-button').fadeOut(200);
  })
  $('#grade').click(function () {
    $('article').hide();
    $('.article-grade').show();
  })
  $('#course').click(function () {
    $('article').hide();
    $('.article-schedule').show();
  })
  /*标签栏选中及切换效果*/
//学籍管理
  $('#fs-student').click(function () {
    var $display=$('#ss-student').css('display');
    if($display=="none"){
      $('#ss-student').slideDown(300);
      $('#img-student').hide(100);
      $('#img-student-ac').show(100);
      $('#fs-student').css('color','#773acf');
    }else{
      $('#ss-student').slideUp(300);
      $('#img-student').show(100);
      $('#img-student-ac').hide(100);
      $('#fs-student').css('color','rgb(110, 110, 110)');
    }
  })
  //选课管理
  $('#fs-choose').click(function () {
    var $display=$('#ss-choose').css('display');
    if($display=="none"){
      $('#ss-choose').slideDown(300);
      $('#img-choose').hide(100);
      $('#img-choose-ac').show(100);
      $('#fs-choose').css('color','#773acf');
    }else{
      $('#ss-choose').slideUp(300);
      $('#img-choose').show(100);
      $('#img-choose-ac').hide(100);
      $('#fs-choose').css('color','rgb(110, 110, 110)');
    }
  })
  //教务管理
  $('#fs-teach').click(function () {
    var $display=$('#ss-teach').css('display');
    if($display=="none"){
      $('#ss-teach').slideDown(300);
      $('#img-teach').hide(100);
      $('#img-teach-ac').show(100);
      $('#fs-teach').css('color','#773acf');
    }else{
      $('#ss-teach').slideUp(300);
      $('#img-teach').show(100);
      $('#img-teach-ac').hide(100);
      $('#fs-teach').css('color','rgb(110, 110, 110)');
    }
  })
  //考务管理
  $('#fs-exam').click(function () {
    var $display=$('#ss-exam').css('display');
    if($display=="none"){
      $('#ss-exam').slideDown(300);
      $('#img-exam').hide(100);
      $('#img-exam-ac').show(100);
      $('#fs-exam').css('color','#773acf');
    }else{
      $('#ss-exam').slideUp(300);
      $('#img-exam').show(100);
      $('#img-exam-ac').hide(100);
      $('#fs-exam').css('color','rgb(110, 110, 110)');
    }
  })

  /*子标签选中效果*/

  $('#ss-student li').click(function () {
    $('.second-step>li').removeClass('ss-selected');
    $(this).addClass('ss-selected');
  })
  $('#ss-choose li').click(function () {
    $('.second-step>li').removeClass('ss-selected');
    $(this).addClass('ss-selected');
  })
  $('#ss-teach li').click(function () {
    $('.second-step>li').removeClass('ss-selected');
    $(this).addClass('ss-selected');
  })
  $('#ss-exam li').click(function () {
    $('.second-step>li').removeClass('ss-selected');
    $(this).addClass('ss-selected');
  })

  /*成绩类别选择*/

  $('#se-all').addClass('selector-ed');
  $('.selector-group button').click(function () {
    $('.selector-group button').removeClass('selector-ed');
    $(this).addClass('selector-ed');
  })

  /*学期选择*/

  $('.choose-term button').click(function () {
    $('.choose-term button').removeClass('selector-ed');
    $(this).addClass('selector-ed');
  })

  /*表格间隔条纹*/

  $('#grade-body .item-grade:odd').addClass('tbody-alt');

})
