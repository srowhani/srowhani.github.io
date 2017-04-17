import Ember from 'ember';

export default Ember.Component.extend({
  moveTo: Ember.inject.service(),
  elementId: 'lead',
  _eventListener (el, blur) {
    if (this._inProgress || !this._inViewPort(el[0])) {
      return;
    }
    this._inProgress = true;
    const scrollTop = document.body.scrollTop / 2;

    el.css({
      top: `${scrollTop}px`
    });

    blur.css({
      top: `${scrollTop / 1.1125}px`,
      opacity: (scrollTop + 120) / window.innerHeight
    });
    requestAnimationFrame(() => this._inProgress = false);
  },
  _inViewPort (element) {
    const b = element.getBoundingClientRect().bottom;
    return b >= 0;
  },
  didInsertElement () {
    const el = this.$('.lead-overlay');
    const blur = this.$('.lead-blur');
    const _ = this._eventListener.bind(this, el, blur);
    this._boundedEventListener = () => {
      requestAnimationFrame(_);
    };
    _();
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
