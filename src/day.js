import {timeInterval} from "./interval.js";
import {durationDay, durationMinute} from "./duration.js";

export const timeMonthDay = timeInterval(
  (date) => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  (date) => date.getDate() - 1
);

export const timeMonthDays = timeMonthDay.range;

export const utcMonthDay = timeInterval(
  (date) => date.setUTCHours(0, 0, 0, 0),
  (date, step) => date.setUTCDate(date.getUTCDate() + step),
  (start, end) => (end - start) / durationDay,
  (date) => date.getUTCDate() - 1
 );

export const utcMonthDays = utcMonthDay.range;

export const timeDay = timeInterval(
  (date) => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay
);

export const timeDays = timeDay.range;

export const utcDay = timeInterval(
  (date) => date.setUTCHours(0, 0, 0, 0),
  (date, step) => date.setUTCDate(date.getUTCDate() + step),
  (start, end) => (end - start) / durationDay,
  (date) => Math.floor(date / durationDay)
);

export const utcDays = utcDay.range;
