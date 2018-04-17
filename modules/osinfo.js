var os = require('os');
var timeConverter = require('./time');
var colors = require('colors');

function getOSinfo() {
  var type = os.type();
  var release = os.release();
  if (type === 'Darwin') {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }

  console.log('System: ', type);
  console.log('Relase: ', release);

  var cpu = os.cpus[0];
  console.log('CPU model: ' + cpu);

  var uptime = os.uptime();
  timeConverter.print(uptime);

  var userInfo = os.userInfo();
  console.log('User name: ', userInfo.username);
  console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;
