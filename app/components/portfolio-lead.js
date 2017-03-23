import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'lead',
  moveTo: new MoveTo({
    duration: 600,
    easing: 'easeOutQuart'
  }),
  actions: {
    moveTo () {
      this.moveTo.move(this.$().next()[0])
    }
  }
});
