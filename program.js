var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');


process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(input);
    var instruction = input.toString().trim();
    switch (instruction) {
      case 'version':
        console.log('Node version: ' + process.versions.node);
        break;
      case 'language':
        console.log('Language is: ' + process.env.LANG);
        break;
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case '/getOSinfo':
        OSinfo.print();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
  }
});
