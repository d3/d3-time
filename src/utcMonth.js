import {floor as utcDay} from "./utcDay";
import interval from "./interval";

export function floor(date) {
  utcDay(date);
  date.setUTCDate(1);
};

export default interval(floor, function(date, offset) {
  date.setUTCDate(date.getUTCDate() + offset);
});
