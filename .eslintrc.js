module.exports = {
  'extends': ['google', 'plugin:react/recommended'],
  'plugins': ['@typescript-eslint', 'unused-imports'],
  'rules': {
    'linebreak-style': ['off'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'after-used',
        'argsIgnorePattern': '^_',
      },
    ],
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxEOF': 0,
    }],
  },
  'parser': 'babel-eslint',
  'settings': {
    'react': {
      'createClass': 'createReactClass',
      'pragma': 'React',
      'fragment': 'Fragment',
      'version': 'detect',
      'flowVersion': '0.53',
    },
  },
};
