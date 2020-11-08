const path = require('path')
	
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

/* config-overrides.js */
module.exports = function override(config, env) {
  config.resolve.alias = {
    '@': resolve('src'),
    '@components': resolve('src/components'),
    '@common': resolve('src/commonComponents'),
    '@store': resolve('src/store')
  };
  return config;
}