import {floor as day} from "./day";
import interval from "./interval";

export function floor(date) {
  day(date);
  date.setMonth(0, 1);
};

export default interval(floor, function(date, offset) {
  date.setFullYear(date.getFullYear() + Math.floor(offset));
});
