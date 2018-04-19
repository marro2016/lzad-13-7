
var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpeg', function(err, stats) {
  var statMode = new StatMode(stats);
  console.log(statMode.toString());
});

var fs = require('fs');

fs.readFile('./text.txt', 'utf-8', function(err, data) {
  console.log('Dane przed zapisem'.blue);
  console.log(data);
  fs.appendFile('./text.txt', '\nA tak wyglądaja dane po zapisie', function(err) {
    if (err) throw err;
    console.log('Zapisano'.blue);
    fs.readFile('./text.txt', 'utf-8', function(err, data) {
      console.log('Dane po zapisie'.blue);
      console.log(data);
    });
  });
});


fs.readdir('./', 'utf-8', function(err, files) {
  if (err) {throw err;}
  else {
    fs.writeFile('./nowy.txt', files, function() {
      if (err) throw err;
      console.log('Zapisano zawartość katalogu do pliku nowy.txt'.red);
    });

    fs.readFile('./nowy.txt', 'utf-8', function(err, data) {
      console.log('Zawartość katalogu to: '.green + data);
    });
  }
});
