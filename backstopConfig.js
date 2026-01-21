'use strict';

const path = require('path');

const basic = {
  label: 'Elementary test',
  url: `file://${path.resolve(__dirname, 'src/index.html')}`,
};

const config = {
  id: 'layout_moyo-header',
  viewports: [
    { name: '1024px', width: 1024, height: 768 },
    { name: '1200px', width: 1200, height: 768 },
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  scenarios: [
    {
      ...basic,
      label: 'Header tag',
      selectors: ['header'],
    },
    {
      ...basic,
      label: 'Nav tag',
      selectors: ['nav'],
    },
    {
      ...basic,
      label: 'Link with data-qa_hover',
      selectors: ['a.nav__link[data-qa="hover"]'],
      hoverSelector: 'a.nav__link[data-qa="hover"]',
      postInteractionWait: 1500,
      misMatchThreshold: 2,
    },
    {
      ...basic,
      label: 'Link with class_is-active',
      selectors: ['a.nav__link.is-active'],
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
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  report: ['browser', 'CI'],
  debug: false,
  debugWindow: false,
};

module.exports = config;
