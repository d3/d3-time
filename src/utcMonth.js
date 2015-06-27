import {floor} from "./utcDay";
import interval from "./interval";

export default interval(function(date) {
  floor(date);
  date.setUTCDate(1);
}, function(date, offset) {
  date.setUTCMonth(date.getUTCMonth() + offset);
});
