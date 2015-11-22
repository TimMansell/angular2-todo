'use strict';
var path = require('path');
var webpack = require('webpack');

// PATHS
var PATHS = {
  app: path.join(__dirname, '/app')
};

module.exports = {
  context: PATHS.app,
  entry: {
    app: PATHS.app + '/assets/js/entry.js',
    vendor: ['angular2/angular2']
  },
  output: {
    path: PATHS.app + '/assets/js',
    filename: 'bundle.js',
  }
};