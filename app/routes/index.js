import Ember from 'ember';
import config from '../config/environment';

const {
  Route,
  RSVP
} = Ember;

export default Route.extend({
  model () {
    const cachedVersion = localStorage['_version_'];
    const currentVersion = config.VERSION;
    return Ember.$.get('resume.json');
  }
});
