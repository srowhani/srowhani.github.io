import Ember from 'ember';
const {
  Route,
  RSVP
} = Ember;
export default Route.extend({
  model () {
    return new Promise((resolve, reject) => {
      Ember.run.later(function () {
        $.get('resume.json')
          .then(resolve)
          .catch(resolve)
      }, 300)
    })
  }
});
