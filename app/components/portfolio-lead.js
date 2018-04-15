import Ember from 'ember';

export default Ember.Component.extend({
  moveTo: Ember.inject.service(),
  elementId: 'lead',
  actions: {
    moveTo () {
      this.get('moveTo').move(this.$().next()[0]);
    }
  }
});
