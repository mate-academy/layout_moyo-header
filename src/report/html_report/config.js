report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/test_header-tag_0_header_0_desktop_s.png",
        "test": "../bitmaps_test/20190428-204802/test_header-tag_0_header_0_desktop_s.png",
        "selector": "header",
        "fileName": "test_header-tag_0_header_0_desktop_s.png",
        "label": "header-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "10.64",
          "analysisTime": 105
        },
        "diffImage": "../bitmaps_test/20190428-204802/failed_diff_test_header-tag_0_header_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_header-tag_0_header_1_desktop_m.png",
        "test": "../bitmaps_test/20190428-204802/test_header-tag_0_header_1_desktop_m.png",
        "selector": "header",
        "fileName": "test_header-tag_0_header_1_desktop_m.png",
        "label": "header-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "9.08",
          "analysisTime": 132
        },
        "diffImage": "../bitmaps_test/20190428-204802/failed_diff_test_header-tag_0_header_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-tag_0_nav_0_desktop_s.png",
        "test": "../bitmaps_test/20190428-204802/test_nav-tag_0_nav_0_desktop_s.png",
        "selector": "nav",
        "fileName": "test_nav-tag_0_nav_0_desktop_s.png",
        "label": "nav-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -26,
            "height": 1
          },
          "misMatchPercentage": "12.99",
          "analysisTime": 151
        },
        "diffImage": "../bitmaps_test/20190428-204802/failed_diff_test_nav-tag_0_nav_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-tag_0_nav_1_desktop_m.png",
        "test": "../bitmaps_test/20190428-204802/test_nav-tag_0_nav_1_desktop_m.png",
        "selector": "nav",
        "fileName": "test_nav-tag_0_nav_1_desktop_m.png",
        "label": "nav-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -26,
            "height": 1
          },
          "misMatchPercentage": "12.99",
          "analysisTime": 154
        },
        "diffImage": "../bitmaps_test/20190428-204802/failed_diff_test_nav-tag_0_nav_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "diff": {
          "isSameDimensions": "",
          "dimensionDifference": {
            "width": "",
            "height": ""
          },
          "misMatchPercentage": ""
        },
        "reference": "../..",
        "test": "../..",
        "selector": "",
        "fileName": "",
        "label": "",
        "scenario": {
          "label": "nav-item-hovered",
          "url": "http://localhost:8080",
          "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
          "readyEvent": "",
          "readySelector": "",
          "delay": 1000,
          "hideSelectors": [
            "[data-qa-hidden]"
          ],
          "removeSelectors": [
            "[data-qa-remove]"
          ],
          "hoverSelector": "[data-qa=\"hover\"]",
          "clickSelector": "",
          "postInteractionWait": 1000,
          "selectors": [
            "[data-qa=\"hover\"]"
          ],
          "selectorExpansion": true,
          "expect": 0,
          "misMatchThreshold": 1,
          "requireSameDimensions": true,
          "sIndex": 2
        },
        "viewport": {
          "name": "desktop_s",
          "width": 1024,
          "height": 768,
          "label": "desktop_s",
          "vIndex": 0
        },
        "msg": "Chromy error",
        "error": "Chromy error: Error. See scenario – nav-item-hovered (desktop_s)"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-hovered_0_data-qahover_1_desktop_m.png",
        "test": "../bitmaps_test/20190428-204802/test_nav-item-hovered_0_data-qahover_1_desktop_m.png",
        "selector": "[data-qa=\"hover\"]",
        "fileName": "test_nav-item-hovered_0_data-qahover_1_desktop_m.png",
        "label": "nav-item-hovered",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "misMatchPercentage": "10.99",
          "analysisTime": 29
        },
        "diffImage": "../bitmaps_test/20190428-204802/failed_diff_test_nav-item-hovered_0_data-qahover_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-active_0_ais-active_0_desktop_s.png",
        "test": "../bitmaps_test/20190428-204802/test_nav-item-active_0_ais-active_0_desktop_s.png",
        "selector": "a.is-active",
        "fileName": "test_nav-item-active_0_ais-active_0_desktop_s.png",
        "label": "nav-item-active",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "misMatchPercentage": "11.99",
          "analysisTime": 12
        },
        "diffImage": "../bitmaps_test/20190428-204802/failed_diff_test_nav-item-active_0_ais-active_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-active_0_ais-active_1_desktop_m.png",
        "test": "../bitmaps_test/20190428-204802/test_nav-item-active_0_ais-active_1_desktop_m.png",
        "selector": "a.is-active",
        "fileName": "test_nav-item-active_0_ais-active_1_desktop_m.png",
        "label": "nav-item-active",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 1
          },
          "misMatchPercentage": "11.99",
          "analysisTime": 18
        },
        "diffImage": "../bitmaps_test/20190428-204802/failed_diff_test_nav-item-active_0_ais-active_1_desktop_m.png"
      },
      "status": "fail"
    }
  ],
  "id": "test"
});