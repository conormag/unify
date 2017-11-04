import Component from '@ember/component';
import $ from 'jquery';
import {get, computed} from '@ember/object';
import {isArray} from '@ember/array';

export default Component.extend({

  typeSpeed: 180,
  text: null,

  strings: computed('text', function(){
    let instr = get(this,'text') || '';
    return isArray(instr) ? instr : instr.split(',');
  }),

  didInsertElement() {
    this._super(...arguments);
    // initialization of text animation (typing)
    $(".u-text-animation.u-text-animation--typing").typed({
      strings: get(this, 'strings'),
      typeSpeed: get(this, 'typeSpeed')
    });
  },
});
