import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  moveTo: Ember.inject.service(),
  tagName: 'footer',
  version: config.VERSION,
  emberVersion: Ember.VERSION,
  actions: {
    goUp () {
      this.get('moveTo').move(Ember.$('header')[0]);
    }
  }
});
