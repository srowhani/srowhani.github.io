import config from '../config/environment';

export function initialize () {
  if (config.environment !== 'production')
    return

  if (window.location.protocol === 'http:') {
    window.location.protocol = 'https:'
  }
}

export default {
  name: 'switch-to-https',
  initialize
};
