import Ember from 'ember';

export default Ember.Component.extend({
  moveTo: Ember.inject.service(),
  tagName: 'header',
  classNameBindings: ['headerVisible:active'],
  actions: {
    moveTo (section, e) {
      e.preventDefault();
      this.get('moveTo').move(Ember.$(section)[0]);

      if (this.$().hasClass('active')) {
        this.sendAction('closeHeader');
      }
    }
  }
});
