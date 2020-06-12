$(function() {
  "use strict";

  $('.filtro-img span').each(function(){

    if ($(this).attr('data-filter')==="all") {

      $(this).addClass('filtro-activo');

    }
  });



  $('.filtro-img span').click(function(){
    $('.filtro-img .filtro-activo').removeClass('filtro-activo');
    $(this).addClass('filtro-activo');
    if ($(this).attr('data-filter')==="all") {

      $('.productos').show();
      $('.productos').addClass('animate__animated')
      $('.productos').addClass('animate__fadeIn')
      setTimeout(function(){
        $('.productos').removeClass('animate__fadeIn');
      },500)

    }else{
      $('.productos').hide();
      $('.'+$(this).attr('data-filter')).show('slow');
      $('.'+$(this).attr('data-filter')).addClass('animate__animated')
      $('.'+$(this).attr('data-filter')).addClass('animate__fadeIn')

      setTimeout(function(){
        $('.'+$(this).attr('data-filter')).removeClass('animate__fadeIn');
      },500)

    }
  });

  if(localStorage.getItem('color')){
    if(localStorage.getItem('color')=="dark"){

      $('body').addClass('dark-theme-scroll');
      $('.cdk-overlay-pane').addClass('dark-theme');

    }else{
      $('body').addClass('light-theme-scroll');

    }
  }else{
    $('body').addClass('dark-theme-scroll');
  }

  $('.color').click( function() {
    if($(this).hasClass('dark-color')){
      $('body').removeClass('light-theme-scroll');
      $('body').addClass('dark-theme-scroll');
    }else if($(this).hasClass('light-color')){
      $('body').removeClass('dark-theme-scroll');
      $('body').addClass('light-theme-scroll');

    }
  });

  $(document).on('click', '.nav-menu a, .scrollto', function(e) {



    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('#footer').toggleClass('footer-activo');
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    var color = $('.color');
    var bot = $('df-messenger');
    if (!container.is(e.target) && container.has(e.target).length === 0 && !color.is(e.target) && !bot.is(e.target)) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('#footer').removeClass('footer-activo');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop()+290;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });




  $('.titulo').hide();
  $('.titulo:first-child').show();
  $('.trabajo').hide();
  $('.linea-tiempo-estudios .tiempo:first-child').addClass('tiempo-activo');

  $('.linea-tiempo-trabajo').hide();

  $('.titulo .flechas div').click( function(){
    $($(this).parent().parent().next()).show();
    $($(this).parent().parent().next()).addClass('animate__animated');
    $($(this).parent().parent().next()).addClass('animate__fadeInUp');
    let elemento= $(this);

    $('.tiempo-activo').removeClass('tiempo-activo');
    $('.linea-tiempo span').each(function(){
      if($(this).attr('opcion')==$(elemento).parent().parent()[0].classList[2]){

        $(this).next().addClass('tiempo-activo');
      }
    })





    setTimeout(function(){
      $($(this).parent().parent().next()).removeClass('animate__fadeInUp');
      $($(this).parent().parent().next()).removeClass('animate__animated');
    },900)
  })
  $('.linea-tiempo-estudios .tiempo').click(function(){


  });

  if($(window).width() <= 500){

    $('df-messenger').addClass('oculto');

  }


  $('.linea-tiempo span').click(function(){
    $('.linea-tiempo span').removeClass('tiempo-activo');
    $(this).addClass('tiempo-activo');
    $('.'+$(this).attr('opcion')).show();
    $('.'+$(this).attr('opcion')).addClass('animate__animated');
    $('.'+$(this).attr('opcion')).addClass('animate__fadeInUp');
    setTimeout(function(){
      $('.'+$(this).attr('opcion')).removeClass('animate__fadeInUp');
      $('.'+$(this).attr('opcion')).removeClass('animate__animated');
    },900)

  });

  $('.titulo:last-child .flechas div').click( function(){
    $('.trabajo:first-child').addClass('animate__animated');
    $('.trabajo:first-child').addClass('animate__fadeInUp');
    $('.linea-tiempo-trabajo').addClass('animate__animated');
    $('.linea-tiempo-trabajo').addClass('animate__fadeInUp');

    $('.trabajo:first-child').show();
    $('.linea-tiempo-trabajo').show();
    $('.linea-tiempo-trabajo .tiempo:first-child').addClass('tiempo-activo');
    setTimeout(function(){
      $('.trabajo:first-child').removeClass('animate__fadeInUp');
      $('.trabajo:first-child').removeClass('animate__animated');
      $('.linea-tiempo-trabajo').removeClass('animate__animated');
    $('.linea-tiempo-trabajo').removeClass('animate__fadeInUp');
    },900)
  })
  $('.trabajo .flechas div').click( function(){
    $($(this).parent().parent().next()).show();
    $($(this).parent().parent().next()).addClass('animate__animated');
    $($(this).parent().parent().next()).addClass('animate__fadeInUp');

    let elemento= $(this);

    $('.tiempo-activo').removeClass('tiempo-activo');
    $('.linea-tiempo span').each(function(){
      if($(this).attr('opcion')==$(elemento).parent().parent()[0].classList[2]){

        $(this).next().addClass('tiempo-activo');
      }
    })

    setTimeout(function(){
      $($(this).parent().parent().next()).removeClass('animate__fadeInUp');
      $($(this).parent().parent().next()).removeClass('animate__animated');
    },900)

  })


  $('.abrirInfo').click(function(){

      setTimeout(function(){


        $('#enlaceProyectos').removeClass('active');
      })

  })

});
