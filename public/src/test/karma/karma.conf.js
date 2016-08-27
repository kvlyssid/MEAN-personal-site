module.exports = function (config) {
	config.set({

		basePath: '../../../',
		frameworks: ['jasmine'],

		files: [
			'src/main/components/jquery/dist/jquery.min.js',
			'src/main/components/angular/angular.min.js',
			'src/main/components/angular-route/angular-route.min.js',
			'src/main/components/angular-mocks/angular-mocks.js',
			'src/main/components/angular-animate/angular-animate.min.js',
			'src/main/components/angular-aria/angular-aria.min.js',
			'src/main/components/angular-messages/angular-messages.min.js',
			'src/main/components/angular-material/angular-material.min.js',
			'src/main/app.js',
			'src/main/!(components)/**/*.js',
			'src/test/karma/**/*.js'
		],

		exclude: [],

		preprocessors: {
		},

		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['PhantomJS'],
		singleRun: true,

		plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher'
		]
	});
};

