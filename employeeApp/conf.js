exports.config = {
  chromeOnly: true,
  chromeDriver:  'chromedriver',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/protractorSpecs/e2eSpecs.js']
};