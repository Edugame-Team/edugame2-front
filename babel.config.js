module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          EGComponents: './src/components/',
          EGColors: './src/contants/Colors',
          EGStrings: './src/contants/Strings',
          EGScreens: './src/components/',
        },
      }],
    ],
  };
};
