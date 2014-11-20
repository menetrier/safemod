'user strict'

var expect = require('chai').expect;
var mockFs = require('mock-fs');
var safemod = require('../lib/safemod')

before(function() {
  // Set up File-system mock

  mockFs({
    'root': {
      'first-file': 'first content',

      'foo': {
        'bar': {
          'second-file': 'second content'
        },

        'baz': {
          'end': {}
        }
      },
    }
  });
});

after(function() {
  // Restore File-system mock
  mockFs.restore();
});

describe('Safemod', function() {
  it('transform a directory list to a an object', function() {
    expect(1).to.be.ok;
  });

  it('deep merge an object properties to an other', function() {
    expect(1).to.be.ok;
  });
});
