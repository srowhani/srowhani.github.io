import Ember from 'ember';

export default Ember.Component.extend({
  moveTo: Ember.inject.service(),
  elementId: 'lead',
  _eventListener (el) {
    if (!this._inViewPort(el[0])) {
      return;
    }

    const scrollTop = (document.body.scrollTop / 2) | 0;
    el.css({
      backgroundPositionY: `${scrollTop}px`
    });
  },
  _inViewPort (element) {
    const b = element.getBoundingClientRect().bottom;
    return b >= 0;
  },
  didInsertElement () {
    const el = this.$('.lead-overlay');
    const _ = this._eventListener.bind(this, el);
    this._boundedEventListener = () => {
      requestAnimationFrame(_);
    };
    window.addEventListener('scroll', this._boundedEventListener, {passive: true, capture: true});
  },
  willDestroy () {
    window.removeEventListener('scroll', this._boundedEventListener);
  },
  actions: {
    moveTo () {
      this.get('moveTo').move(this.$().next()[0]);
    }
  }
});
