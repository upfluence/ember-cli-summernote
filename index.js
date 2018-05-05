/* eslint-env node */
'use strict';

var FastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-summernote',
  options: {
    nodeAssets: {
      'popper.js': {
        import: ['dist/umd/popper.js'],
        processTree(input) {
         return FastbootTransform(input);
        }
      }
    }
  }
};
