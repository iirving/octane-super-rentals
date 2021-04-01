import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting root', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/', 'rigth root path');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Super Rentals');
    assert.dom('h2').hasText("Welcome to Ian's Octance Super Rentals!");
  });

  test('viewing details of a rental property', async function (assert) {
    await visit('/');

    assert.dom('.rental').exists({ count: 3 });

    await click('.rental:first-of-type a');

    assert.equal(currentURL(), '/rentals/grand-old-mansion');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('Super Rentals');
    assert.dom('h2').containsText('Grand Old Mansion');
    assert.dom('.rental.detailed').exists();
  });

  test('visting about from root', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    assert.dom('nav').exists();
    assert.dom('h1').hasText('Super Rentals');
    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Super Rentals');
    assert.dom('h2').hasText('About Super Rentals');
  });

  test('visting getting-in-touch happy path ', async function (assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Super Rentals');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });
});
