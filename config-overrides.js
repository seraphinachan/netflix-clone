const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@pages': 'src/pages',
    '@api': 'src/api',
    '@lib': 'src/lib',
    '@assets': 'src/assets',
    '@data': 'src/data',
  })(config);

  return config;
};
