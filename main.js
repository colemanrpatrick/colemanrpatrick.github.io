// $(".topLeft").on('click', function(){
//
// })
$(document).ready(function(){

  $("#about").on('click', function(){
  $('.aboutMe').removeClass('hide');
  $('.midViewHome').addClass('hide');
  $('.resumePage').addClass('hide');
  $('.projectsPage').addClass('hide');
  $('.back').removeClass('hide');

  $('#about').addClass('active');
  $('#resume').addClass('active');
  $('#projects').addClass('active');
  });

  $("#resume").on('click', function(){
  $('.aboutMe').addClass('hide');
  $('.midViewHome').addClass('hide');
  $('.resumePage').removeClass('hide');
  $('.projectsPage').addClass('hide');
  $('.back').removeClass('hide');

  $('#about').addClass('active');
  $('#resume').addClass('active');
  $('#projects').addClass('active');
  });

  $("#projects").on('click', function(){
  $('.aboutMe').addClass('hide');
  $('.midViewHome').addClass('hide');
  $('.resumePage').addClass('hide');
  $('.projectsPage').removeClass('hide');
  $('.back').removeClass('hide');

  $('#about').addClass('active');
  $('#resume').addClass('active');
  $('#projects').addClass('active');
  });

  $(".back").on('click', function(){
  $('.aboutMe').addClass('hide');
  $('.projectsPage').addClass('hide');
  $('.resumePage').addClass('hide');
  $('.midViewHome').removeClass('hide');
  $('.back').addClass('hide');

  $('#about').removeClass('active');
  $('#resume').removeClass('active');
  $('#projects').removeClass('active');
  });


});
