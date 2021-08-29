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
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': [2, {
      'code': 100,
      'tabWidth': 4,
      'ignoreUrls': true,
      'ignoreStrings': true,
    }],
    'react/jsx-tag-spacing': ['error', {
      'beforeSelfClosing': 'always',
    }],
    'react/jsx-curly-spacing': ['error', 'never'],
    'require-jsdoc': ['off'],
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2],
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
