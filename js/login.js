$(document).ready(function () {
  $('#btn-student').addClass('selected');
  $('.switcher button').click(function () {
    $('.switcher button').removeClass('selected');
    $(this).addClass('selected');
  })
})
