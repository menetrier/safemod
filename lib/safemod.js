'use strict'

var fs = require('fs');
var path = require('path');

function Safemod(options) {
  this._options = options;

  this._mapDirectoryListToFile();
}

Safemod.prototype.getMappingFile = function() {
  return this._options.mappingFile;
}

Safemod.prototype.getDirectoryList = function() {
  return this._options.directoryList;
}

Safemod.prototype._mapDirectoryListToFile = function() {
  var previousMapping = {}

  // Check if the mapping file exists

  if (fs.existsSync(this.getMappingFile())) {
  // if yes

    // Open the mapping file
    var fileContent = fs.readFileSync(this.getMappingFile());
    // Load the content
    previousMapping = JSON.parse(fileContent.toString());
  }

  // Create content from the current input
  var computedMapping = this._jsonifyDirectoryList(this.getDirectoryList());

  // Merge it with the previous file content

  var mapping = this._mergeMappings(previousMapping, computedMapping);

  // Save it to the file
  // fs.writeFileSync(this.getMappingFile(), JSON.stringify(mapping));
}

Safemod.prototype._jsonifyDirectoryList = function(directoryList) {
  var json = {}
  directoryList.forEach(function(directory) {

    // split and create json
    var previousItem = json;

    directory.split(path.sep).forEach(function(part) {
      if (previousItem[part] === undefined) previousItem[part] = {};
      
      previousItem = previousItem[part];
    });
  });

  return json;
}

Safemod.prototype._mergeMappings = function(previousMapping, computedMapping) {

}

module.exports = Safemod;
