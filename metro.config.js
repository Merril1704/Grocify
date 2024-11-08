const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'cjs'],
  },
  watchFolders: [
    // Add any folders you want to exclude from watching if needed
  ],
  maxWorkers: 2, // Adjust as needed
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
