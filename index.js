import day from "./src/day";
import hour from "./src/hour";
import minute from "./src/minute";
import month from "./src/month";
import second from "./src/second";
import utcDay from "./src/utcDay";
import utcHour from "./src/utcHour";
import utcMinute from "./src/utcMinute";
import utcMonth from "./src/utcMonth";
import utcSecond from "./src/utcSecond";
import utcYear from "./src/utcYear";
import year from "./src/year";
import {default as utcWeek, utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday} from "./src/utcWeek";
import {default as week, sunday, monday, tuesday, wednesday, thursday, friday, saturday} from "./src/week";

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
  friday,
  hour,
  minute,
  monday,
  month,
  saturday,
  second,
  sunday,
  thursday,
  tuesday,
  utcDay,
  utcFriday,
  utcHour,
  utcMinute,
  utcMonday,
  utcMonth,
  utcSaturday,
  utcSecond,
  utcSunday,
  utcThursday,
  utcTuesday,
  utcWednesday,
  utcWeek,
  utcYear,
  wednesday,
  week,
  year
};
