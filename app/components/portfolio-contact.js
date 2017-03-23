import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'contact',
  email: Ember.computed('contact.email', function () {
    const email = this.get('contact.email')
    return `https://formspree.io/${atob(email)}`
  })
});
