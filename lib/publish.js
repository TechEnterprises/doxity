'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$target = _ref.target,
      target = _ref$target === undefined ? _constants.DEFAULT_TARGET : _ref$target,
      _ref$out = _ref.out,
      out = _ref$out === undefined ? _constants.DEFAULT_PUBLISH_DIR : _ref$out;

  // TODO check folder exists...
  var cwd = process.env.PWD + '/' + target;
  var outputFolder = cwd + '/public';
  var destFolder = process.env.PWD + '/' + out;
  (0, _helpers.clearDirectory)(destFolder).then(function () {
    var runDev = _child_process2.default.spawn('npm', ['run', 'build'], { cwd: cwd });
    runDev.stdout.pipe(process.stdout);
    runDev.stderr.pipe(process.stderr);
    runDev.on('close', function () {
      _fs2.default.renameSync(outputFolder, destFolder);
      process.stdout.write('Published Documentaiton to ' + destFolder + '\n');
      process.exit();
    });
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _constants = require('./constants');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }