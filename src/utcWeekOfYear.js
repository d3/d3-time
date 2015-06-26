import utcDayOfYear from "./utcDayOfYear";
import utcYear from "./utcYear";

function utcWeekdayOfYear(i) {
  return function(date) {
    return Math.floor((utcDayOfYear(date) + (utcYear.floor(date).getUTCDay() + 7 - i) % 7) / 7);
  };
}

export var utcSundayOfYear = utcWeekdayOfYear(0);
export var utcMondayOfYear = utcWeekdayOfYear(1);
export var utcTuesdayOfYear = utcWeekdayOfYear(2);
export var utcWednesdayOfYear = utcWeekdayOfYear(3);
export var utcThursdayOfYear = utcWeekdayOfYear(4);
export var utcFridayOfYear = utcWeekdayOfYear(5);
export var utcSaturdayOfYear = utcWeekdayOfYear(6);
export default utcSundayOfYear;
