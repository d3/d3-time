import {timeInterval} from "./interval.js";
import {durationMinute, durationSecond} from "./duration.js";
import {timeEpoch} from "./epoch.js";

export const timeMinute = timeInterval(
  (date) => date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond),
  (date, step) => date.setTime(+date + step * durationMinute),
  (start, end) => (end - start) / durationMinute,
  timeEpoch
);

export const timeMinutes = timeMinute.range;

export const utcMinute = timeInterval(
  (date) => date.setUTCSeconds(0, 0),
  (date, step) => date.setTime(+date + step * durationMinute),
  (start, end) => (end - start) / durationMinute
);

export const utcMinutes = utcMinute.range;
