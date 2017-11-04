import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hs-megamenu', 'Integration | Component | hs megamenu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hs-megamenu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hs-megamenu}}
      template block text
    {{/hs-megamenu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
