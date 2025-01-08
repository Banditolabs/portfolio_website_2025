const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add md files to asset extensions
config.resolver.assetExts.push('md');
config.resolver.assetExts.push('png');
module.exports = config;