// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  ignoreUncaughtExceptions: true,
  allScriptsTimeout: 11000,
  specs: [
    './src/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: false,
  baseUrl: 'http://localhost:4444/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  cucumberOpts: {    
    require: ['./src/step-definitions/*.step.ts'],
    tags: [],    
    dryRun: false,
    compiler: []
    },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  
}};