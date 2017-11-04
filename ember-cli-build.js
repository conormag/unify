/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'vendor/unify/html/assets/include/scss'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  // app.import('vendor/unify/html/assets/img', { destDir: "/assets/img" });
  // app.import('vendor/unify/html/');


  // CSS Global Icons -->
  app.import('vendor/unify/html/assets/vendor/icon-awesome/css/font-awesome.min.css');
  app.import('vendor/unify/html/assets/vendor/icon-line/css/simple-line-icons.css');
  app.import('vendor/unify/html/assets/vendor/icon-etlinefont/style.css');
  app.import('vendor/unify/html/assets/vendor/icon-line-pro/style.css');
  app.import('vendor/unify/html/assets/vendor/icon-hs/style.css');
  app.import('vendor/unify/html/assets/vendor/dzsparallaxer/dzsparallaxer.css');
  app.import('vendor/unify/html/assets/vendor/dzsparallaxer/dzsscroller/scroller.css');
  app.import('vendor/unify/html/assets/vendor/dzsparallaxer/advancedscroller/plugin.css');
  app.import('vendor/unify/html/assets/vendor/slick-carousel/slick/slick.css');
  app.import('vendor/unify/html/assets/vendor/animate.css');
  app.import('vendor/unify/html/assets/vendor/hs-megamenu/src/hs.megamenu.css');
  app.import('vendor/unify/html/assets/vendor/hamburgers/hamburgers.min.css');

  // CSS Unify -->
  app.import('vendor/unify/html/assets/css/unify-core.css');
  app.import('vendor/unify/html/assets/css/unify-components.css');
  app.import('vendor/unify/html/assets/css/unify-globals.css');

  //  CSS Customization -->
  app.import('vendor/unify/html/assets/css/custom.css');




  // JS Global Compulsory
  // <script src="assets/vendor/jquery/jquery.min.js"></script>
  app.import('vendor/unify/html/assets/vendor/jquery-migrate/jquery-migrate.min.js');
  app.import('vendor/unify/html/assets/vendor/jquery.easing/js/jquery.easing.js');
  app.import('vendor/unify/html/assets/vendor/popper.min.js');

  // JS Implementing Plugins
  app.import('vendor/unify/html/assets/vendor/hs-megamenu/src/hs.megamenu.js');
  app.import('vendor/unify/html/assets/vendor/dzsparallaxer/dzsparallaxer.js');
  app.import('vendor/unify/html/assets/vendor/dzsparallaxer/dzsscroller/scroller.js');
  app.import('vendor/unify/html/assets/vendor/dzsparallaxer/advancedscroller/plugin.js');
  app.import('vendor/unify/html/assets/vendor/chosen/chosen.jquery.js');
  app.import('vendor/unify/html/assets/vendor/image-select/src/ImageSelect.jquery.js');
  app.import('vendor/unify/html/assets/vendor/masonry/dist/masonry.pkgd.min.js');
  app.import('vendor/unify/html/assets/vendor/slick-carousel/slick/slick.js');

  // JS Unify
  app.import('vendor/unify/html/assets/js/hs.core.js');
  app.import('vendor/unify/html/assets/js/components/hs.header.js');
  app.import('vendor/unify/html/assets/js/helpers/hs.hamburgers.js');
  app.import('vendor/unify/html/assets/js/components/hs.scroll-nav.js');
  app.import('vendor/unify/html/assets/js/components/hs.go-to.js');
  app.import('vendor/unify/html/assets/js/components/hs.sticky-block.js');
  app.import('vendor/unify/html/assets/js/helpers/hs.height-calc.js');
  app.import('vendor/unify/html/assets/js/components/hs.carousel.js');


  // JS Custom
  app.import('vendor/unify/html/assets/js/custom.js');

  var img = new Funnel('vendor/unify/html/assets/img', {
    srcDir: '/',
    include: ['**/*.*'],
    destDir: '/assets/img'
  });

  var imgTemp = new Funnel('vendor/unify/html/assets/img-temp', {
    srcDir: '/',
    include: ['**/*.*'],
    destDir: '/assets/img-temp'
  });


  return app.toTree([
    img,
    imgTemp
  ]);
};
