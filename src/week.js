import {floor as day} from "./day";
import interval from "./interval";

function weekday(i) {
  return interval(function(date) {
    day(date);
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
  }, function(date, offset) {
    date.setDate(date.getDate() + offset * 7);
  });
}

export var sunday = weekday(0);
export var monday = weekday(1);
export var tuesday = weekday(2);
export var wednesday = weekday(3);
export var thursday = weekday(4);
export var friday = weekday(5);
export var saturday = weekday(6);
export default sunday;
