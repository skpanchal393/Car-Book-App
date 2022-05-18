import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: '../view/header.component.html',
})
export class HeaderComponent implements OnInit {

  homeRoute: any = environment.home;
  aboutRoute: any = environment.about;
  serviceRoute: any = environment.service;
  conatctRoute: any = environment.contactUS;
  privacyRoute: any = environment.privacy;
  pathname: any;
  hash: any;
  hostname: string = '';

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function () {
    //   $(".owl-carousel").owlCarousel();
    // });

    // $('.banner-slider.owl-carousel').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   autoplay: true,
    //   dost: false,
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     600: {
    //       items: 1
    //     },
    //     1000: {
    //       items: 1
    //     }
    //   }
    // })

    if ($('#nav-menu-container').length) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({
          id: 'mobile-nav'
      });
      $mobile_nav.find('> ul').attr({
          'class': '',
          'id': ''
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
      $('body').append('<div id="mobile-body-overly"></div>');
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

      $(document).on('click', '.menu-has-children i', (e:any)=>{
          $(this).next().toggleClass('menu-item-active');
          $(this).nextAll('ul').eq(0).slideToggle();
          $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
      });

      $(document).on('click', '#mobile-nav-toggle', (e:any)=> {
          $('body').toggleClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
          $('#mobile-body-overly').toggle();
      });

          $(document).on('click',(e:any)=>{
          var container = $("#mobile-nav, #mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
              if ($('body').hasClass('mobile-nav-active')) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                  $('#mobile-body-overly').fadeOut();
              }
          }
      });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  //------- Smooth Scroll  js --------//  

  $('.nav-menu a, #mobile-nav a, .scrollto').on('click',():any=>{
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length) {
              var top_space = 0;

              if ($('#header').length) {
                  top_space = $('#header').outerHeight();

                  if (!$('#header').hasClass('header-fixed')) {
                      top_space = top_space;
                  }
              }

              $('html, body').animate({
                  scrollTop: target.offset().top - top_space
              }, 1500, 'easeInOutExpo');

              if ($(this).parents('.nav-menu').length) {
                  $('.nav-menu .menu-active').removeClass('menu-active');
                  $(this).closest('li').addClass('menu-active');
              }

              if ($('body').hasClass('mobile-nav-active')) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                  $('#mobile-body-overly').fadeOut();
              }
              return false;
          }
      }
  });

  }
}
