module.exports = {
  "setupFiles": ["jest.setup.js"].map(file => `<rootDir>/${file}`),
  "transform": {
    "^.+\\.jsx?$": "<rootDir>/jest.preprocess.js"
  }
};
