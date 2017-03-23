import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  moveTo: new MoveTo({
    duration: 600,
    easing: 'easeOutQuart'
  }),
  actions: {
    goUp () {
      this.moveTo.move(Ember.$('header')[0])
    }
  }
});
