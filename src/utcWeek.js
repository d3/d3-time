import {floor as utcDay} from "./utcDay";
import interval from "./interval";

function utcWeekday(i) {
  return interval(function(date) {
    utcDay(date);
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
  }, function(date, offset) {
    date.setUTCDate(date.getUTCDate() + offset * 7);
  });
}

export var utcSunday = utcWeekday(0);
export var utcMonday = utcWeekday(1);
export var utcTuesday = utcWeekday(2);
export var utcWednesday = utcWeekday(3);
export var utcThursday = utcWeekday(4);
export var utcFriday = utcWeekday(5);
export var utcSaturday = utcWeekday(6);
export default utcSunday;
