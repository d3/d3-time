import {floor as utcDay} from "./utcDay";
import interval from "./interval";

export function floor(date) {
  utcDay(date);
  date.setUTCMonth(0, 1);
};

export default interval(floor, function(date, offset) {
  date.setUTCFullYear(date.getUTCFullYear() + offset);
});
