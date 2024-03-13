module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
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
          '@components': ['./src/components'],
          '@navigation': ['./src/navigation'],
          '@assets': ['./src/assets'],
          '@redux': ['./src/redux'],
          '@screens': ['./src/screens'],
          '@utils': ['./src/utils'],
        },
      },
    ],
  ],
};
