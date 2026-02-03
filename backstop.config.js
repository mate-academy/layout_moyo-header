'use strict';

module.exports = {
  id: 'backstop_header',
  engine: 'puppeteer',

  engineOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },

  viewports: [
    { name: '1024px', width: 1024, height: 768 },
    { name: '1200px', width: 1200, height: 768 },
  ],

  scenarios: [
    {
      label: 'Header layout',
      url: 'https://johannpdaniel.github.io/layout_moyo-header/',
      delay: 1000,
      misMatchThreshold: 2,
    },
  ],

  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
};
