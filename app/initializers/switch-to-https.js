export function initialize () {
  if (window.location.protocol == 'http:') {
    window.location.protocol = 'https:'
  }
}

export default {
  name: 'switch-to-https',
  initialize
};
