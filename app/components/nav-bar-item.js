import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  classNames:['nav-item', 'g-mx-10--lg', 'g-mx-15--xl'],

  target: '',
  label: null,
});
