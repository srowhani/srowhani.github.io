import Ember from 'ember';

export function array (params) {
  return params.slice();
}

export default Ember.Helper.helper(array);
