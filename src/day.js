import {timeInterval} from "./interval.js";
import {durationDay, durationMinute} from "./duration.js";

export const timeDay = timeInterval(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  // A boundary may be after midnight when daylight saving time skips it.
  (start, end) => Math.round((end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay),
  date => date.getDate() - 1
);

export const timeDays = timeDay.range;

export const utcDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return date.getUTCDate() - 1;
});

export const utcDays = utcDay.range;

export const unixDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return Math.floor(date / durationDay);
});

export const unixDays = unixDay.range;
