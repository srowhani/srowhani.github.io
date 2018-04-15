import Ember from 'ember';

const {
  requestAnimationFrame,
  MoveTo,
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
    requestAnimationFrame(() => {
      this.moveTo.move(target);
    });
  }
});
