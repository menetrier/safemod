var fs = require('fs');

function Safemod(options) {
  this._options = options;

  this._mapDirectoryListToFile();
}

Safemod.prototype.getMappingFile = function() {
  return this._options.mappingFile;
}

Safemod.prototype._mapDirectoryListToFile = function() {
  var mapping = {}

  // Check if the mapping file exists

  if (fs.existsSync(this.getMappingFile())) {
  // if yes

    // Open the mapping file
    var fileContent = fs.readFileSync(this.getMappingFile());
    // Load the content
    mapping = JSON.parse(fileContent.toString());
  }

  // Create content from the current input

  // Merge it with the previous file content

  // Save it to the file
  fs.writeFileSync(this.getMappingFile(), JSON.stringify(mapping));
}

module.exports = Safemod;
