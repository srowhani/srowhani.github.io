import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  tagName: 'footer',
  version: config.VERSION,
  emberVersion: Ember.VERSION,
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
