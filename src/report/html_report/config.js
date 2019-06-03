report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_header-tag_0_header_0_desktop_s.png",
        "test": "..\\bitmaps_test\\20190603-081114\\test_header-tag_0_header_0_desktop_s.png",
        "selector": "header",
        "fileName": "test_header-tag_0_header_0_desktop_s.png",
        "label": "header-tag",
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 683,
            "height": -206
          },
          "misMatchPercentage": "22.40",
          "analysisTime": 32
        },
        "diffImage": "..\\bitmaps_test\\20190603-081114\\failed_diff_test_header-tag_0_header_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_header-tag_0_header_1_desktop_m.png",
        "test": "..\\bitmaps_test\\20190603-081114\\test_header-tag_0_header_1_desktop_m.png",
        "selector": "header",
        "fileName": "test_header-tag_0_header_1_desktop_m.png",
        "label": "header-tag",
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 859,
            "height": -206
          },
          "misMatchPercentage": "22.38",
          "analysisTime": 33
        },
        "diffImage": "..\\bitmaps_test\\20190603-081114\\failed_diff_test_header-tag_0_header_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_nav-tag_0_nav_0_desktop_s.png",
        "test": "..\\bitmaps_test\\20190603-081114\\test_nav-tag_0_nav_0_desktop_s.png",
        "selector": "nav",
        "fileName": "test_nav-tag_0_nav_0_desktop_s.png",
        "label": "nav-tag",
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -7,
            "height": 0
          },
          "misMatchPercentage": "11.30",
          "analysisTime": 34
        },
        "diffImage": "..\\bitmaps_test\\20190603-081114\\failed_diff_test_nav-tag_0_nav_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_nav-tag_0_nav_1_desktop_m.png",
        "test": "..\\bitmaps_test\\20190603-081114\\test_nav-tag_0_nav_1_desktop_m.png",
        "selector": "nav",
        "fileName": "test_nav-tag_0_nav_1_desktop_m.png",
        "label": "nav-tag",
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -7,
            "height": 0
          },
          "misMatchPercentage": "11.30",
          "analysisTime": 44
        },
        "diffImage": "..\\bitmaps_test\\20190603-081114\\failed_diff_test_nav-tag_0_nav_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_nav-item-hovered_0_data-qahover_0_desktop_s.png",
        "test": "..\\bitmaps_test\\20190603-081114\\test_nav-item-hovered_0_data-qahover_0_desktop_s.png",
        "selector": "[data-qa=\"hover\"]",
        "fileName": "test_nav-item-hovered_0_data-qahover_0_desktop_s.png",
        "label": "nav-item-hovered",
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
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_nav-item-hovered_0_data-qahover_1_desktop_m.png",
        "test": "..\\bitmaps_test\\20190603-081114\\test_nav-item-hovered_0_data-qahover_1_desktop_m.png",
        "selector": "[data-qa=\"hover\"]",
        "fileName": "test_nav-item-hovered_0_data-qahover_1_desktop_m.png",
        "label": "nav-item-hovered",
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
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_nav-item-active_0_ais-active_0_desktop_s.png",
        "test": "..\\bitmaps_test\\20190603-081114\\test_nav-item-active_0_ais-active_0_desktop_s.png",
        "selector": "a.is-active",
        "fileName": "test_nav-item-active_0_ais-active_0_desktop_s.png",
        "label": "nav-item-active",
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 1,
            "height": 0
          },
          "misMatchPercentage": "14.77",
          "analysisTime": 25
        },
        "diffImage": "..\\bitmaps_test\\20190603-081114\\failed_diff_test_nav-item-active_0_ais-active_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_nav-item-active_0_ais-active_1_desktop_m.png",
        "test": "..\\bitmaps_test\\20190603-081114\\test_nav-item-active_0_ais-active_1_desktop_m.png",
        "selector": "a.is-active",
        "fileName": "test_nav-item-active_0_ais-active_1_desktop_m.png",
        "label": "nav-item-active",
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -1,
            "height": 0
          },
          "misMatchPercentage": "14.77",
          "analysisTime": 34
        },
        "diffImage": "..\\bitmaps_test\\20190603-081114\\failed_diff_test_nav-item-active_0_ais-active_1_desktop_m.png"
      },
      "status": "fail"
    }
  ],
  "id": "test"
});