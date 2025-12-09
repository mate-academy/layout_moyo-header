'use strict';

module.exports = {
  id: 'moyo-header',
  viewports: [
    { name: '1024px', width: 1024, height: 768 },
    { name: '1200px', width: 1200, height: 768 },
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios: [
    {
      label: 'Header tag',
      url: 'http://127.0.0.1:8081/', // адрес твого локального сервера
      selectors: ['header'],
      misMatchThreshold: 1,
    },
    {
      label: 'Nav tag',
      url: 'http://127.0.0.1:8081/',
      selectors: ['nav'],
      misMatchThreshold: 1,
    },
    {
      label: 'Link with data-qa_hover',
      url: 'http://127.0.0.1:8081/',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      misMatchThreshold: 2,
    },
    {
      label: 'Link with class_is-active',
      url: 'http://127.0.0.1:8081/',
      selectors: ['a.is-active'],
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
  report: ['browser'],
  debug: false,
};
