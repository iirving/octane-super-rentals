import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting root', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Ian\'s Octance Super Rentals!')
  });

  test('visting about from root', async function(assert){
    await visit('/');

    assert.equal(currentURL(), '/');

    assert.dom('.jumbo a.button').hasText('About Us')
    await click('.jumbo a.button')

    assert.equal(currentURL(), '/about')
  });
});
