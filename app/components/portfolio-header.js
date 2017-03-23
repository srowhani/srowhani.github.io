import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNameBindings: ['headerVisible:active'],
  _moveTo: new MoveTo({
    duration: 600,
    easing: 'easeOutQuart'
  }),
  actions: {
    moveTo (section, e) {
      e.preventDefault()
      this._moveTo.move($(section)[0])

      if (this.$().hasClass('active')) {
        this.sendAction('closeHeader')
      }
    }
  }
});
