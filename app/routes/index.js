import Ember from 'ember';

const {
  Route,
  RSVP
} = Ember;

export default Route.extend({
  model () {
    return Ember.$.get('resume.json');
  }
});
