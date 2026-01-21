'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/moyo-header/',
  readySelector: 'header',
  delay: 5000, // Змінено затримку на 5000
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
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
      label: 'Header tag',
      url: 'http://localhost:3000',
      selectors: ['header'],
      delay: 5000,
    },
  ],
};

module.exports = config;
