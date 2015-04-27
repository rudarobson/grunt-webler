/*
 * grunt-webler
 * https://github.com/rudarobson/grunt-webler
 *
 * Copyright (c) 2015 rudarobson
 * Licensed under the MIT license.
 */

'use strict';

var webler = require('webler');

module.exports = function(grunt) {
  grunt.registerMultiTask('weble', 'Webler for grunt.', function() {
    var self = this;
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      webler.weble(f.src[0], f.dest, self.options());
    });
  });
};
