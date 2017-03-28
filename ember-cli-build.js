/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    'ember-service-worker': {
      registrationStrategy: 'async'
    },
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets'
      ]
    },
    fingerprint: {
      exclude: ['images/*.png']
    }
  });

  app.import('bower_components/moveto/dist/moveTo.min.js');
  return app.toTree();
};
