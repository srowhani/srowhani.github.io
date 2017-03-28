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
    const locallyStored = localStorage['_resume_'];
    return new RSVP.Promise((resolve, reject) => {
      // If new version exists, or cached resume doesn't exist...
      if (currentVersion > cachedVersion || !locallyStored) {
        return Ember.$.get('resume.json').then((resume) => {
          try {
            localStorage['_resume_'] = JSON.stringify(resume);
            localStorage['_version_'] = currentVersion;
            resolve(resume);
          } catch (e) {
            return reject(e);
          }
        });
      } else {
        try {
          const resolvedStorage = JSON.parse(locallyStored);
          resolve(resolvedStorage);
        } catch (e) {
          reject(e);
        }
      }
    });
  }
});
