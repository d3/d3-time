import {floor} from "./day";
import interval from "./interval";

export default interval(function(date) {
  floor(date);
  date.setMonth(0, 1);
}, function(date, offset) {
  date.setFullYear(date.getFullYear() + offset);
});
