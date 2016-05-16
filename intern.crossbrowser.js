define({
	environments: [
		{
      browser_api_name: 'MblSafari8.0',
      os_api_name: 'iPhone6-iOS8sim',
      record_video: true,
      record_network: true
    },
		{
      browser_api_name: 'MblChrome35',
      os_api_name: 'GalaxyS5-And44',
      record_video: true,
      record_network: true
    },
	],

	maxConcurrency: 2,

	// Name of the tunnel class to use for WebDriver tests.
	// See <https://theintern.github.io/intern/#option-tunnel> for built-in options
  tunnel: 'NullTunnel',

  tunnelOptions: {
    clientUrl: 'http://' + process.env.CBT_USERNAME + ':' + process.env.CBT_AUTHKEY + '@hub.crossbrowsertesting.com/wd/hub',
    username: process.env.CBT_USERNAME,
    accessKey: process.env.CBT_AUTHKEY,
    authKey: process.env.CBT_AUTHKEY
  },

	loaderOptions: {
		// Packages that should be registered with the loader in each testing environment
		// packages: [ { name: 'dojo', location: 'lib/dojo/dojo' } ]
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
