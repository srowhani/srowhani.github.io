import Ember from 'ember';
const {$} = Ember
export default Ember.Component.extend({
  elementId: 'experience',
  classNames: ['background-alt'],
  didInsertElement () {
    this._super(...arguments)
    this.$('#experience-timeline').each(function() {
      const $this = $(this); // Store reference to this
      const $userContent = $this.children('div'); // user content

      // Create each timeline block
      $userContent.each(function() {
        $(this)
          .addClass('vtimeline-content')
          .wrap(`
            <div class="vtimeline-point">
              <div class="vtimeline-block"></div>
            </div>
          `);
      });

      // Add icons to each block
      $this.find('.vtimeline-point').each(function() {
        $(this)
          .prepend(`
            <div class="vtimeline-icon">
              <i class="fa fa-map-marker"></i>
            </div>
          `);
      });

      // Add dates to the timeline if exists
      $this.find('.vtimeline-content').each(function() {
        const date = $(this).data('date');
        if (date) { // Prepend if exists
          $(this)
            .parent()
            .prepend(`<span class="vtimeline-date">${date}</span>`);
        }
      });

    });
  }
});
