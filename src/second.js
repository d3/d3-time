import interval from "./interval";
import {durationSecond} from "./duration";

var second = interval(function(date) {
  date.setMilliseconds(0);
}, function(date, step) {
  date.setSeconds(date.getSeconds() + step);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getSeconds();
});

export default second;
export var seconds = second.range;
