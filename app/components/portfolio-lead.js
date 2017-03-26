import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'lead',
  moveTo: new MoveTo({
    duration: 1200,
    easing: 'easeOutQuart'
  }),
  _eventListener (el) {
    const scrollTop = (document.body.scrollTop / 2) | 0
    el.css({
      backgroundPositionY: `${scrollTop}px`
    })
  },
  didInsertElement () {
    const el = this.$('.lead-overlay')
    const _ = this._eventListener.bind(this, el)
    this._boundedEventListener = () => {
      requestAnimationFrame(_)
    }
    window.addEventListener('scroll', this._boundedEventListener, {passive: true, capture: true})
  },
  willDestroy () {
    window.removeEventListener('scroll', this._boundedEventListener)
  },
  actions: {
    moveTo () {
      this.moveTo.move(this.$().next()[0])
    }
  }
});
