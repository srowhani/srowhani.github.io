const moment = require('moment');
const atob = require('atob');
const { SafeString } = require('handlebars');

const decode = (base) => {
  return new SafeString(atob(base));
};

module.exports = { decode };
