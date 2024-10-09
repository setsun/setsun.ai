const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('next', 'next/core-web-vitals'),

  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  { ignores: ['.next/**/*'] },
];
