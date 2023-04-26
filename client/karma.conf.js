module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-sonarqube-reporter'),
      // require('karma-coverage-istanbul-reporter')
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    sonarqubeReporter: {
      basePath: 'src/app',
      filePattern: '**/*.spec.ts',
      encoding: 'utf-8',
      outputFolder: 'reports',
      legacyMode: false,
      reportName: function (metadata) {
        return 'sonarqube_report.xml';
      },
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      type: 'lcov',
      subdir: '.',
      reports: [{ type: 'html' }, { type: 'lcovonly' }, { type: 'lcov' }, { type: 'text-summary' }],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 78,
        lines: 75,
        branches: 56,
        function: 68,
      },
    },
    // coverageIstanbulReporter: {
    //   dir: require('path').join(__dirname, '../coverage'),
    //   reports: ['html', 'lcovonly'],
    //   fixWebpackSourcePaths: true,
    // },
    reporters: ['progress', 'kjhtml', 'sonarqube'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
  });
};
