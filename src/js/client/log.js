/**
 * Print an exception for debug purposes.
 *
 * Includes some logic to try and log a stack in various browsers.
 */
exports.exception = function (exception) {
  console.log(e.getStack());
}
