module.exports = {
  "extends": [
    "airbnb",
    "plugin:jest/recommended",
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": ["jest"],
  "rules": {
    "react/jsx-filename-extension": "off",
    "no-underscore-dangle": "off"
  }
};