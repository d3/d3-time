import interval from "./interval";
import {durationSecond} from "./duration";

var utcSecond = interval(function(date) {
  date.setUTCMilliseconds(0);
}, function(date, step) {
  date.setUTCSeconds(date.getUTCSeconds() + step);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});

export default utcSecond;
export var utcSeconds = utcSecond.range;
