import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    $(document).on('ready', function () {
      // initialization of carousel
      $.HSCore.components.HSCarousel.init('.js-carousel');

      $('#carousel1').slick('setOption', 'responsive', [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }, {
        breakpoint: 446,
        settings: {
          slidesToShow: 1
        }
      }], true);

      // Header
      $.HSCore.components.HSHeader.init($('#js-header'));
      $.HSCore.helpers.HSHamburgers.init('.hamburger');



      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');

      $.HSCore.helpers.HSHeightCalc.init();
    });


    $(window).on('load', function () {
      console.log("loading window");
      // initialization of HSScrollNav
      $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
        duration: 700,
        easing: 'easeOutExpo',
        over: $('.u-secondary-navigation')
      });

      // initialization of masonry.js
      $('.masonry-grid').imagesLoaded().then(function () {
        $('.masonry-grid').masonry({
          // options
          columnWidth: '.masonry-grid-sizer',
          itemSelector: '.masonry-grid-item',
          percentPosition: true
        });
      });

      // initialization of sticky blocks
      $.HSCore.components.HSStickyBlock.init('.js-sticky-block');
    });
  },
});
