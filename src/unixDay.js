import interval from "./interval.js";
import {durationDay} from "./duration.js";

var unixDay = interval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return Math.floor(date / durationDay);
});

export default unixDay;
export var unixDays = unixDay.range;
