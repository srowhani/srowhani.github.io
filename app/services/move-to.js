import Ember from 'ember';

const {
  MoveTo
} = window;

export default Ember.Service.extend({
  moveTo: new MoveTo({
    duration: 600,
    easing: 'easeOutQuart'
  }),
  move (target) {
    if (!target) {
      return;
    }
    requestIdleCallback(() => {
      this.moveTo.move(target)
    })
  }
});
