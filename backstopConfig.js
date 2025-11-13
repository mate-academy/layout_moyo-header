module.exports = {
  id: 'moyo-header',
  viewports: [
    {
      label: 'desktop',
      width: 1280,
      height: 800
    }
  ],
  scenarios: [
    {
      label: 'Header default',
      url: 'http://localhost:3000/index.html',
      selectors: ['header'],
      misMatchThreshold: 0.1,
      postInteractionWait: 100
    },
    {
      label: 'Hover 4º link (data-qa)',
      url: 'http://localhost:3000/index.html',
      selectors: ['header'],
      hoverSelector: '.nav-list li:nth-child(4) .nav-link',
      postInteractionWait: 100
    },
    {
      label: 'Active link',
      url: 'http://localhost:3000/index.html',
      selectors: ['header'],
      selectorExpansion: true,
      postInteractionWait: 100
    }
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  launchOptions: {
    headless: 'new'
  },
  report: ['browser'],
  debug: false
};
