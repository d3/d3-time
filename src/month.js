import {floor} from "./day";
import interval from "./interval";

export default interval(function(date) {
  floor(date);
  date.setDate(1);
}, function(date, offset) {
  date.setMonth(date.getMonth() + offset);
});
