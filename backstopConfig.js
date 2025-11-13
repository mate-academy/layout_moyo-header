'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const baseUrl = 'http://localhost:3000/index.html';
const referenceBase = basicScenario.referenceUrl + '/moyo-header/';

const baseScenario = {
  ...basicScenario,
  referenceUrl: referenceBase,
  url: baseUrl,
  readySelector: 'body',
  delay: 1000,
  misMatchThreshold: 2,
  requireSameDimensions: false
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      label: '1024px',
      width: 1024,
      height: 768
    },
    {
      label: '1200px',
      width: 1200,
      height: 768
    }
  ],
  scenarios: [
    {
      ...baseScenario,
      label: 'Header tag',
      selectors: ['header']
    },
    {
      ...baseScenario,
      label: 'Nav tag',
      selectors: ['nav']
    },
    {
      ...baseScenario,
      label: 'Link with data-qa_hover',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000
    },
    {
      ...baseScenario,
      label: 'Link with class_is-active',
      selectors: ['a.is-active']
    }
  ]
};

module.exports = config;
