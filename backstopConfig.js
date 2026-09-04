'use strict';

const config = {
  id: 'moyo-header',
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  viewports: [
    {
      name: '1024px',
      width: 1024,
      height: 768,
    },
    {
      name: '1200px',
      width: 1200,
      height: 768,
    },
  ],
  scenarios: [
    {
      label: 'Header',
      url: 'http://localhost:8080/index.html',
      referenceUrl: '',
      selectors: ['.header'],
      readySelector: 'body',
      delay: 1000,
    },
    {
      label: 'Nav',
      url: 'http://localhost:8080/index.html',
      referenceUrl: '',
      selectors: ['.nav'],
      readySelector: 'body',
      delay: 1000,
    },
    {
      label: 'Link with data-qa_hover',
      url: 'http://localhost:8080/index.html',
      referenceUrl: '',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      readySelector: 'body',
      delay: 1000,
      misMatchThreshold: 2,
    },
    {
      label: 'Link with class_is-active',
      url: 'http://localhost:8080/index.html',
      referenceUrl: '',
      selectors: ['a.is-active'],
      readySelector: 'body',
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
  report: ['browser', 'CI'],
  engine: 'puppet',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  puppeteerLaunchConfig: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
    ],
  },
};

module.exports = config;
