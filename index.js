import day from "./src/day";
import dayOfYear from "./src/dayOfYear";
import hour from "./src/hour";
import minute from "./src/minute";
import month from "./src/month";
import second from "./src/second";
import utcDay from "./src/utcDay";
import utcDayOfYear from "./src/utcDayOfYear";
import utcHour from "./src/utcHour";
import utcMinute from "./src/utcMinute";
import utcMonth from "./src/utcMonth";
import utcSecond from "./src/utcSecond";
import utcYear from "./src/utcYear";
import year from "./src/year";
import {default as utcWeek, utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday} from "./src/utcWeek";
import {default as utcWeekOfYear, utcSundayOfYear, utcMondayOfYear, utcTuesdayOfYear, utcWednesdayOfYear, utcThursdayOfYear, utcFridayOfYear, utcSaturdayOfYear} from "./src/utcWeekOfYear";
import {default as week, sunday, monday, tuesday, wednesday, thursday, friday, saturday} from "./src/week";
import {default as weekOfYear, sundayOfYear, mondayOfYear, tuesdayOfYear, wednesdayOfYear, thursdayOfYear, fridayOfYear, saturdayOfYear} from "./src/weekOfYear";

export var seconds = second.range;
export var minutes = minute.range;
export var hours = hour.range;
export var days = day.range;
export var sundays = sunday.range;
export var mondays = monday.range;
export var tuesdays = tuesday.range;
export var wednesdays = wednesday.range;
export var thursdays = thursday.range;
export var fridays = friday.range;
export var saturdays = saturday.range;
export var weeks = week.range;
export var months = month.range;
export var years = year.range;

export var utcSeconds = utcSecond.range;
export var utcMinutes = utcMinute.range;
export var utcHours = utcHour.range;
export var utcDays = utcDay.range;
export var utcSundays = utcSunday.range;
export var utcMondays = utcMonday.range;
export var utcTuesdays = utcTuesday.range;
export var utcWednesdays = utcWednesday.range;
export var utcThursdays = utcThursday.range;
export var utcFridays = utcFriday.range;
export var utcSaturdays = utcSaturday.range;
export var utcWeeks = utcWeek.range;
export var utcMonths = utcMonth.range;
export var utcYears = utcYear.range;

export {
  day,
  dayOfYear,
  friday,
  fridayOfYear,
  hour,
  minute,
  monday,
  mondayOfYear,
  month,
  saturday,
  saturdayOfYear,
  second,
  sunday,
  sundayOfYear,
  thursday,
  thursdayOfYear,
  tuesday,
  tuesdayOfYear,
  utcDay,
  utcDayOfYear,
  utcFriday,
  utcFridayOfYear,
  utcHour,
  utcMinute,
  utcMonday,
  utcMondayOfYear,
  utcMonth,
  utcSaturday,
  utcSaturdayOfYear,
  utcSecond,
  utcSunday,
  utcSundayOfYear,
  utcThursday,
  utcThursdayOfYear,
  utcTuesday,
  utcTuesdayOfYear,
  utcWednesday,
  utcWednesdayOfYear,
  utcWeek,
  utcWeekOfYear,
  utcYear,
  wednesday,
  wednesdayOfYear,
  week,
  weekOfYear,
  year
};
