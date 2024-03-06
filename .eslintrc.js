module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'xo',
    'xo-typescript',
    'xo-react',
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/errors'
  ],
  plugins: ['jsx-a11y', 'react', 'import', 'prettier', '@typescript-eslint'],
  rules: {
    'no-trailing-spaces': ['error'],
    '@next/next/no-html-link-for-pages': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-console': ['error'],
    '@typescript-eslint/ban-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // Prettier
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    camelcase: 'off',
    'react/require-default-props': 'off',
    // React
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/prop-types': ['off', {}],
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
    ],
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'no-negated-condition': 'off',
    'import/namespace': 'off',
    'import/named ': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.d.ts'],
      },
      typescript: {
        alwaysTryTypes: true,
        // project: [
        //   'apps/*/tsconfig.json',
        //   'packages/*/tsconfig.json',
        //   'config/*/tsconfig.json',
        // ],
      }, // This loads <rootdir>/aatsconfig.json to eslint
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
    'import/core-modules': ['test-utils'],
    'import/ignore': [
      'node_modules',
      '.next'
    ]
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['./src/modules/shared/gql/*']
};
