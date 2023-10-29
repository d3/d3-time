import {timeInterval} from "./interval.js";
import {durationSecond} from "./duration.js";

export const second = timeInterval(
  (date) => date.setTime(date - date.getMilliseconds()),
  (date, step) => date.setTime(+date + step * durationSecond),
  (start, end) => (end - start) / durationSecond
);

export const seconds = second.range;
