module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@common': './src/common',
          '@core': './src/core',
          '@data': './src/data',
          '@di': './src/di',
          '@presentation': './src/presentation',
          '@assets': './src/presentation/assets',
          '@components': './src/presentation/components',
          '@navigators': './src/presentation/navigators',
          '@screens': './src/presentation/screens',
          '@store': './src/presentation/store',
          '@store_mobx': './src/presentation/store_mobx',
          '@styles': './src/presentation/styles',
        },
      },
    ],
    ['@babel/plugin-transform-private-methods', {loose: true}],
  ],
};
