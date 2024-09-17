const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Optionally add any custom transformer options (e.g., Babel plugins)
  },
  resolver: {
    // Optionally add custom resolver options (e.g., custom extensions)
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
