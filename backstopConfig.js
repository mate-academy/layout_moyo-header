'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/moyo-header/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    { name: '1024px', width: 1024, height: 768 },
    { name: '1200px', width: 1200, height: 768 },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Header tag',
      selectors: ['header[data-qa="header"]'],
      readySelector: 'header[data-qa="header"]',
      delay: 500,
    },
    {
      ...basic,
      label: 'Nav tag',
      selectors: ['nav[data-qa="nav"]'],
      readySelector: 'nav[data-qa="nav"]',
      delay: 500,
    },
    {
      ...basic,
      label: 'Link hover effect',
      selectors: ['.nav__link:first-child'],
      hoverSelector: '.nav__link:first-child',
      postInteractionWait: 1000,
      readySelector: '.nav__list',
      delay: 500,
    },
    {
      ...basic,
      label: 'Active link style',
      selectors: ['.nav__link.is-active, a[data-qa="active"]'],
      readySelector: '.nav__list',
      delay: 500,
    },
  ],
};

module.exports = config;
