import {timeInterval} from "./interval.js";
import {durationHour, durationMinute, durationSecond} from "./duration.js";
import {timeEpoch} from "./epoch.js";

export const timeHour = timeInterval(
  (date) => date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute),
  (date, step) => date.setTime(+date + step * durationHour),
  (start, end) => (end - start) / durationHour,
  timeEpoch
);

export const timeHours = timeHour.range;

export const utcHour = timeInterval(
  (date) => date.setUTCMinutes(0, 0, 0),
  (date, step) => date.setTime(+date + step * durationHour),
  (start, end) => (end - start) / durationHour
);

export const utcHours = utcHour.range;
