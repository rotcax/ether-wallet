module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@common': './src/common',
            '@components': './src/components'
          }
        }
      ]
    ]
  };
};
