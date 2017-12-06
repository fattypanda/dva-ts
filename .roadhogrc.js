export default {
  "entry": "./src/index.tsx",
  "proxy": {
    "/api": "http://172.31.50.78:7300/mock/59aceff89b1b9039308834b0/acs"
  },
  "theme": {
    "@primary-color": "#0e77ca",
    "@link-color": "#0e77ca",
    "@border-radius-base": "2px",
    "@font-size-base": "16px",
    "@line-height-base": "1.2"
  },
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        "transform-decorators-legacy",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        "transform-decorators-legacy",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    }
  }
}
