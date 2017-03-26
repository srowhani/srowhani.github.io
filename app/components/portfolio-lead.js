import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'lead',
  moveTo: new MoveTo({
    duration: 1200,
    easing: 'easeOutQuart'
  }),
  _eventListener (el) {
    const scrollTop = Math.floor(document.body.scrollTop * 0.5)
    el.css({
      backgroundPositionY: `${scrollTop}px`
    })
  },
  didInsertElement () {
    const el = this.$('.lead-overlay')
    this._eventListener = this._eventListener.bind(this, el)
    window.addEventListener('scroll', this._eventListener, {passive: true, capture: true})
  },
  willDestroy () {
    window.removeEventListener('scroll', this._eventListener)
  },
  actions: {
    moveTo () {
      this.moveTo.move(this.$().next()[0])
    }
  }
});
