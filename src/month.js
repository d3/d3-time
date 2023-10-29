import {timeEpoch} from "./epoch.js";
import {timeInterval} from "./interval.js";

export const timeMonth = timeInterval(
  (date) => (date.setDate(1), date.setHours(0, 0, 0, 0)),
  (date, step) => date.setMonth(date.getMonth() + step),
  (start, end) => end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12,
  timeEpoch
);

export const timeMonths = timeMonth.range;

export const utcMonth = timeInterval(
  (date) => (date.setUTCDate(1), date.setUTCHours(0, 0, 0, 0)),
  (date, step) => date.setUTCMonth(date.getUTCMonth() + step),
  (start, end) => end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12
);

export const utcMonths = utcMonth.range;
