'use strict';

var UnimplementedOperationException = require('../exceptions/unimplemented_operation_exception');

/**
 * This interface indicates that implementing classes can dump their data
 * with the #dump method.
 */
var Dumpable = module.exports = function() {};

/**
 * Dump the data.
 * @return {String} the string dump.
 */
Dumpable.prototype.dump = function() {
  throw new UnimplementedOperationException();
};
