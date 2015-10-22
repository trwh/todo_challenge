exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  mocks: {
    default: ['mock-login'], // default value: []
  },
  onPrepare: function(){
    require('protractor-http-mock').config = {
        rootDirectory: __dirname, // default value: process.cwd()
        protractorConfig: 'conf.js' // default value: 'protractor.conf'
    };
  }
}

