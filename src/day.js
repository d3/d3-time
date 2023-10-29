import {timeInterval} from "./interval.js";
import {durationDay, durationMinute} from "./duration.js";
import {timeEpoch} from "./epoch.js";

export const timeDay = timeInterval(
  (date) => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  timeEpoch
);

export const timeDays = timeDay.range;

export const utcDay = timeInterval(
  (date) => date.setUTCHours(0, 0, 0, 0),
  (date, step) => date.setUTCDate(date.getUTCDate() + step),
  (start, end) => (end - start) / durationDay
);

export const utcDays = utcDay.range;
