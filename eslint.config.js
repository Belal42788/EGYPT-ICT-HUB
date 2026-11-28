// Code-quality gate for the site's JavaScript.
// HTML pages are the source of truth, so this only checks the .js files.
// Error-level rules are the ones the codebase passes today; the rest report
// as warnings so existing style debt does not block work (see batch E/F plan).
const sonarjs = require('eslint-plugin-sonarjs');

const browserGlobals = {
  window: 'readonly', document: 'readonly', localStorage: 'readonly',
  sessionStorage: 'readonly', navigator: 'readonly', console: 'readonly',
  setTimeout: 'readonly', clearTimeout: 'readonly', setInterval: 'readonly',
  clearInterval: 'readonly', requestAnimationFrame: 'readonly', cancelAnimationFrame: 'readonly',
  IntersectionObserver: 'readonly', MutationObserver: 'readonly', ResizeObserver: 'readonly',
  fetch: 'readonly', alert: 'readonly', location: 'readonly', history: 'readonly',
  CustomEvent: 'readonly', Event: 'readonly', HTMLElement: 'readonly', Image: 'readonly',
  getComputedStyle: 'readonly', matchMedia: 'readonly', performance: 'readonly',
};

module.exports = [
  {
    ignores: ['node_modules/**', '_dev/**', '_docs/**', 'assets/js/three.*.js'],
  },
  {
    files: ['assets/js/**/*.js', 'scripts/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: browserGlobals,
    },
    plugins: { sonarjs },
    rules: {
      // errors: correctness only, all green on the current tree
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-cond-assign': 'error',
      'no-unreachable': 'error',
      'no-func-assign': 'error',
      'no-obj-calls': 'error',
      'no-sparse-arrays': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'no-redeclare': 'error',
      // warnings: style and structure debt, fixed as files are touched
      // sonarjs rules report as warnings: they describe real debt but are not
      // gates yet (see the audit; fixed file by file)
      ...Object.fromEntries(Object.keys(sonarjs.configs.recommended.rules).map((r) => [r, 'warn'])),
      'no-var': 'warn',
      'eqeqeq': 'warn',
      'no-unused-vars': 'warn',
      'no-empty': 'warn',
      'complexity': ['warn', 15],
      'max-depth': ['warn', 4],
      'max-params': ['warn', 4],
    },
  },
];
