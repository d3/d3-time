import dayOfYear from "./dayOfYear";
import year from "./year";

function weekdayOfYear(i) {
  return function(date) {
    return Math.floor((dayOfYear(date) + (year.floor(date).getDay() + 7 - i) % 7) / 7);
  };
}

export var sundayOfYear = weekdayOfYear(0);
export var mondayOfYear = weekdayOfYear(1);
export var tuesdayOfYear = weekdayOfYear(2);
export var wednesdayOfYear = weekdayOfYear(3);
export var thursdayOfYear = weekdayOfYear(4);
export var fridayOfYear = weekdayOfYear(5);
export var saturdayOfYear = weekdayOfYear(6);
export default sundayOfYear;
