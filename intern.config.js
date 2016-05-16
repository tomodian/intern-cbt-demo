define({
  environments: [
    { browserName: 'chrome' },
  ],

  webdriver: {
    host: 'localhost',
    port: 4443
  },

  maxConcurrency: 2,

  // Name of the tunnel class to use for WebDriver tests.
  // See <https://theintern.github.io/intern/#option-tunnel> for built-in options
  tunnel: 'NullTunnel',

  tunnelOptions: {
    clientUrl: 'http://localhost:4443/wd/hub',
  },

  loaderOptions: {
    packages: [
      { name: 'is_js', location: 'node_modules/is_js/', main: 'is' },
      { name: 'mithril', location: 'node_modules/mithril/', main: 'mithril' }
    ]
  },

  basePath: './',

  loaders: {
  },

  // Unit test suite(s) to run in each browser
  suites: [
    'build/test/amd/javascripts/*-test.js',
    'build/test/amd/javascripts/**/*-test.js',
  ],

  // Functional test suite(s) to execute against each browser once unit tests are completed
  functionalSuites: [
  ],

  // A regular expression matching URLs to files that should not be included in code coverage analysis. Set to `true`
  // to completely disable code coverage.
  excludeInstrumentation: true
});
