const path = require('path');
module.exports = {
    webpack(config) {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // Ensures '@' resolves to 'src/'
      return config;
    },
  };