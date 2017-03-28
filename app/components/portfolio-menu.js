import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'mobile-menu-open',
  classNames: ['shadow-large'],
  click () {
    this.sendAction('openHeader');
  }
});
