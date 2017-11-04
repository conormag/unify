import Component from '@ember/component';
import { get, computed}  from '@ember/object';

export default Component.extend({
  tagName: 'nav',
  classNames: ['js-mega-menu', 'navbar', 'navbar-expand-lg'],
  align: null,

  alignment: computed('align', function() {
    let align = get(this,'align') || 'none';
    switch(align.toLowerCase()) {
      case 'left':
        return 'mr-auto';
      case 'right':
        return 'ml-auto';
      default:
        return 'mx-auto';
    }
  })
});
