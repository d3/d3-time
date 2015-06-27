import {floor} from "./utcDay";
import interval from "./interval";

export default interval(function(date) {
  floor(date);
  date.setUTCMonth(0, 1);
}, function(date, offset) {
  date.setUTCFullYear(date.getUTCFullYear() + offset);
});
