function timeConvert(uptime) {
  var time = {},
    seconds = uptime % 60,
    minutes = Math.floor(uptime / 60),
    hours;

  if (minutes > 60) {
    hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes - (hours * 60);
    time = {
      hr: hours,
      min: remainingMinutes,
      sec: seconds
    };
    timeToString(time);
  } else {
    time = {
      hr: hours,
      min: minutes,
      sec: seconds
    };
    timeToString(time);
  }

  function timeToString(time) {
    var string = '';
    for (var item in time) {
      if (time[item] < 10) {
        string += '0' + time[item] + ':';
      } else if (time[item] === undefined) {
        string += '00:';
      } else {
        string += time[item] + ':';
      }
    }
    console.log('Uptime: ' + string.slice(0, -1) + ' [hr/min/sec]');
  }
}

exports.print = timeConvert;
