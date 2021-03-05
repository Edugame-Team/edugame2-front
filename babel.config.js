// module.exports = function (api) {
//  api.cache(true);
//  return {
//    presets: ['babel-preset-expo'],
//  };
// };

module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './assets',
        },
      },
    ],
  ],
};
