report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/test_header-tag_0_header_0_desktop_s.png",
        "test": "../bitmaps_test/20190530-134606/test_header-tag_0_header_0_desktop_s.png",
        "selector": "header",
        "fileName": "test_header-tag_0_header_0_desktop_s.png",
        "label": "header-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.07",
          "analysisTime": 24
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_header-tag_0_header_1_desktop_m.png",
        "test": "../bitmaps_test/20190530-134606/test_header-tag_0_header_1_desktop_m.png",
        "selector": "header",
        "fileName": "test_header-tag_0_header_1_desktop_m.png",
        "label": "header-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.06",
          "analysisTime": 34
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-tag_0_nav_0_desktop_s.png",
        "test": "../bitmaps_test/20190530-134606/test_nav-tag_0_nav_0_desktop_s.png",
        "selector": "nav",
        "fileName": "test_nav-tag_0_nav_0_desktop_s.png",
        "label": "nav-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -20,
            "height": 0
          },
          "misMatchPercentage": "13.03",
          "analysisTime": 61
        },
        "diffImage": "../bitmaps_test/20190530-134606/failed_diff_test_nav-tag_0_nav_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-tag_0_nav_1_desktop_m.png",
        "test": "../bitmaps_test/20190530-134606/test_nav-tag_0_nav_1_desktop_m.png",
        "selector": "nav",
        "fileName": "test_nav-tag_0_nav_1_desktop_m.png",
        "label": "nav-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -20,
            "height": 0
          },
          "misMatchPercentage": "13.03",
          "analysisTime": 63
        },
        "diffImage": "../bitmaps_test/20190530-134606/failed_diff_test_nav-tag_0_nav_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-hovered_0_data-qahover_0_desktop_s.png",
        "test": "../bitmaps_test/20190530-134606/test_nav-item-hovered_0_data-qahover_0_desktop_s.png",
        "selector": "[data-qa=\"hover\"]",
        "fileName": "test_nav-item-hovered_0_data-qahover_0_desktop_s.png",
        "label": "nav-item-hovered",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -46
          },
          "misMatchPercentage": "10.79",
          "analysisTime": 33
        },
        "diffImage": "../bitmaps_test/20190530-134606/failed_diff_test_nav-item-hovered_0_data-qahover_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-hovered_0_data-qahover_1_desktop_m.png",
        "test": "../bitmaps_test/20190530-134606/test_nav-item-hovered_0_data-qahover_1_desktop_m.png",
        "selector": "[data-qa=\"hover\"]",
        "fileName": "test_nav-item-hovered_0_data-qahover_1_desktop_m.png",
        "label": "nav-item-hovered",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -46
          },
          "misMatchPercentage": "10.79",
          "analysisTime": 50
        },
        "diffImage": "../bitmaps_test/20190530-134606/failed_diff_test_nav-item-hovered_0_data-qahover_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-active_0_ais-active_0_desktop_s.png",
        "test": "../bitmaps_test/20190530-134606/test_nav-item-active_0_ais-active_0_desktop_s.png",
        "selector": "a.is-active",
        "fileName": "test_nav-item-active_0_ais-active_0_desktop_s.png",
        "label": "nav-item-active",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 42
          },
          "misMatchPercentage": "10.23",
          "analysisTime": 15
        },
        "diffImage": "../bitmaps_test/20190530-134606/failed_diff_test_nav-item-active_0_ais-active_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-active_0_ais-active_1_desktop_m.png",
        "test": "../bitmaps_test/20190530-134606/test_nav-item-active_0_ais-active_1_desktop_m.png",
        "selector": "a.is-active",
        "fileName": "test_nav-item-active_0_ais-active_1_desktop_m.png",
        "label": "nav-item-active",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 42
          },
          "misMatchPercentage": "10.23",
          "analysisTime": 32
        },
        "diffImage": "../bitmaps_test/20190530-134606/failed_diff_test_nav-item-active_0_ais-active_1_desktop_m.png"
      },
      "status": "fail"
    }
  ],
  "id": "test"
});