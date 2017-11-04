import Component from '@ember/component';

export default Component.extend({
  tagName: 'a',
  attributeBindings: ['href'],

  classNames:['navbar-brand'],

  href: '#',
  image: 'assets/img/logo/logo-1.png',
  alt: 'Image Description'
});
