import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
// declare var $ :any;
import * as $ from "jquery";
import { ScrollStrategyOptions } from '@angular/cdk/overlay';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    

   }

  ngOnInit() {
    $.noConflict();
    $(document).ready(function() {
      $('.marquee-vert').marquee();
    })

    // $.noConflict();
    // $(document).ready(  
    //   $('.marquee-vert').marquee()

    // )

    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
      .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 20,
        delay: (el, i) => 100 * (i+1)
      }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 500,
        easing: "easeOutExpo",
        delay: 500
      });


      $('.afterpageload').hide();
      $('.pageload').show();

      var H = $(window).height();
      $('.pageload').height(H);


       $(".search-btn").click(function(){
            $(".search-input").toggle();
          });
      
          $("#cat-bt").owlCarousel({
              navigation: true,
              pagination: false,
              lazyLoad: true,
              items:2,
              itemsDesktop : [1199, 4],
              itemsDesktopSmall : [979, 3],
              itemsTablet : [768, 3],
              itemsTabletSmall : [650, 2],
              itemsMobile : [480, 2],
              itemsMobileSmall : [440, 1],
              paginationNumbers: false,
              autoHeight : false,
              addClassActive : true,
              navigationText: [
                  "<i class='fa fa-chevron-left'></i>",
                  "<i class='fa fa-chevron-right'></i>"
                  ]
          });

         

  }

 
  click()
  {
      $('.skip');
      $('body').addClass('homebody');
      $('.pageload').slideUp(800);
      $('.afterpageload').show();
  }



  scrollTop()
  {
    var h = window.innerHeight;

    $('.top .item img').css({'height':h});
  
    $('.scrollto');
    $("html, body").animate({ scrollTop: h }, 500);
    
  }
   
    ngAfterViewInit() {

  
     }

  
   
  openNav() {
    var w = window.innerWidth;
    document.getElementById("mySidenav").style.width = w+"px";
    $('.closebtn').css({'display':'block'});
    $('.openbtn').hide();
  }

   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.closebtn').hide();
    $('.openbtn').show();
  }

}
