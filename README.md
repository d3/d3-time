# d3-time

…

## Installing

If you use NPM, `npm install d3-time`. Otherwise, download the [latest release](https://github.com/d3/d3-time/releases/latest).

## API Reference

[Need description of time interval here.]

<a name="_interval" href="#_interval">#</a> <i>interval</i>(<i>date</i>)

An alias for [*interval*.floor](#interval_floor).

<a name="interval_floor" href="#interval_floor">#</a> <i>interval</i>.<b>floor</b>(<i>date</i>)

Returns a new date representing the latest time interval before or equal to *date*. For example, `day.floor(new Date)` typically returns 12:00 AM local time on the current day.

<a name="interval_round" href="#interval_round">#</a> <i>interval</i>.<b>round</b>(<i>date</i>)

Returns a new date representing the closest time interval to *date*. For example, `day.round(new Date)` typically returns 12:00 AM local time on the current day if it is on or before noon, and 12:00 AM of the following day if it is after noon.

<a name="interval_ceil" href="#interval_ceil">#</a> <i>interval</i>.<b>ceil</b>(<i>date</i>)

Returns a new date representing the earliest time interval after or equal to *date*. For example, `day.ceil(new Date)` typically returns 12:00 AM local time on the following day.

<a name="interval_offset" href="#interval_offset">#</a> <i>interval</i>.<b>offset</b>(<i>date</i>[, <i>step</i>])

Returns a new date equal to *date* plus *step* intervals. If *step* is negative, then the returned date will be before the specified *date*; if *step* is zero, then a copy of the specified *date* is returned. This method does not round the specified *date* to the interval. For example, if it is currently 5:34 PM, then `day.offset(new Date, 1)` returns 5:34 PM tomorrow (even if Daylight Savings changes!). If *step* is not specified it defaults to 1.

<a name="interval_range" href="#interval_range">#</a> <i>interval</i>.<b>range</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Returns every an array of dates representing every time interval after or equal to *start* and before *stop*. If *step* is specified, then every *step*'th interval will be returned; for example, for the [day](#day) interval a *step* of 2 will return every other day.

<a name="interval_filter" href="#interval_filter">#</a> <i>interval</i>.<b>filter</b>(<i>test</i>)

Returns a new time interval that is a filtered subset of this time interval using the specified *test* function. The *test* function is passed a date and should return true if and only if the specified date should be considered part of the time interval. For example, to create an interval that returns the 1st, 11th, 21th and 31th (if it exists) of each month:

```js
var i = day.filter(function(d) { return (d.getDate() - 1) % 10 === 0; });
```

### Intervals

The following time intervals are provided:

<a name="second" href="#second">#</a> <b>second</b>
<br><a href="#second">#</a> <b>utcSecond</b>

Seconds (e.g., 01:23:45.0000 AM); 1,000 milliseconds.

<a name="minute" href="#minute">#</a> <b>minute</b>
<br><a href="#minute">#</a> <b>utcMinute</b>

Minutes (e.g., 01:02:00 AM); 60 seconds. Note that ECMAScript [ignores leap seconds](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.1).

<a name="hour" href="#hour">#</a> <b>hour</b>
<br><a href="#hour">#</a> <b>utcHour</b>

Hours (e.g., 01:00 AM); 60 minutes. Note that advancing time by one hour in local time can return the same hour or skip an hour due to Daylight Savings.

<a name="day" href="#day">#</a> <b>day</b>
<br><a href="#day">#</a> <b>utcDay</b>

Days (e.g., February 7, 2012 at 12:00 AM); typically 24 hours. Days in local time may range from 23 to 25 hours due to Daylight Savings.

<a name="week" href="#week">#</a> <b>week</b>
<br><a href="#week">#</a> <b>utcWeek</b>

Alias for [sunday](#sunday); 7 days and typically 168 hours. Weeks in local time may range from 167 to 169 hours due on Daylight Savings.

<a name="sunday" href="#sunday">#</a> <b>sunday</b>
<br><a href="#sunday">#</a> <b>utcSunday</b>

Sunday-based weeks (e.g., February 5, 2012 at 12:00 AM).

<a name="monday" href="#monday">#</a> <b>monday</b>
<br><a href="#monday">#</a> <b>utcMonday</b>

Monday-based weeks (e.g., February 6, 2012 at 12:00 AM).

<a name="tuesday" href="#tuesday">#</a> <b>tuesday</b>
<br><a href="#tuesday">#</a> <b>utcTuesday</b>

Tuesday-based weeks (e.g., February 7, 2012 at 12:00 AM).

<a name="wednesday" href="#wednesday">#</a> <b>wednesday</b>
<br><a href="#wednesday">#</a> <b>utcWednesday</b>

Wednesday-based weeks (e.g., February 8, 2012 at 12:00 AM).

<a name="thursday" href="#thursday">#</a> <b>thursday</b>
<br><a href="#thursday">#</a> <b>utcThursday</b>

Thursday-based weeks (e.g., February 9, 2012 at 12:00 AM).

<a name="friday" href="#friday">#</a> <b>friday</b>
<br><a href="#friday">#</a> <b>utcFriday</b>

Friday-based weeks (e.g., February 10, 2012 at 12:00 AM).

<a name="saturday" href="#saturday">#</a> <b>saturday</b>
<br><a href="#saturday">#</a> <b>utcSaturday</b>

Saturday-based weeks (e.g., February 11, 2012 at 12:00 AM).

<a name="month" href="#month">#</a> <b>month</b>
<br><a href="#month">#</a> <b>utcMonth</b>

Months (e.g., February 1, 2012 at 12:00 AM); ranges from 28 to 31 days.

<a name="year" href="#year">#</a> <b>year</b>
<br><a href="#year">#</a> <b>utcYear</b>

Years (e.g., January 1, 2012 at 12:00 AM); ranges from 365 to 366 days.

### Ranges

For convenience, aliases for [*interval*.range](#interval_range) are also provided as plural forms of the corresponding time interval.

<a name="seconds" href="#seconds">#</a> <b>seconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#seconds">#</a> <b>utcSecond</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [second](#second).[range](#interval_range) and [utcSecond](#utcSecond).[range](#interval_range).

<a name="minutes" href="#minutes">#</a> <b>minutes</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#minutes">#</a> <b>utcMinute</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [minute](#minute).[range](#interval_range) and [utcMinute](#utcMinute).[range](#interval_range).

<a name="hours" href="#hours">#</a> <b>hours</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#hours">#</a> <b>utcHour</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [hour](#hour).[range](#interval_range) and [utcHour](#utcHour).[range](#interval_range).

<a name="days" href="#days">#</a> <b>days</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#days">#</a> <b>utcDay</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [day](#day).[range](#interval_range) and [utcDay](#utcDay).[range](#interval_range).

<a name="weeks" href="#weeks">#</a> <b>weeks</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#weeks">#</a> <b>utcWeek</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [week](#week).[range](#interval_range) and [utcWeek](#utcWeek).[range](#interval_range).

<a name="sundays" href="#sundays">#</a> <b>sundays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#sundays">#</a> <b>utcSunday</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [sunday](#sunday).[range](#interval_range) and [utcSunday](#utcSunday).[range](#interval_range).

<a name="mondays" href="#mondays">#</a> <b>mondays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#mondays">#</a> <b>utcMonday</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [monday](#monday).[range](#interval_range) and [utcMonday](#utcMonday).[range](#interval_range).

<a name="tuesdays" href="#tuesdays">#</a> <b>tuesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#tuesdays">#</a> <b>utcTuesday</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [tuesday](#tuesday).[range](#interval_range) and [utcTuesday](#utcTuesday).[range](#interval_range).

<a name="wednesdays" href="#wednesdays">#</a> <b>wednesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#wednesdays">#</a> <b>utcWednesday</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [wednesday](#wednesday).[range](#interval_range) and [utcWednesday](#utcWednesday).[range](#interval_range).

<a name="thursdays" href="#thursdays">#</a> <b>thursdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#thursdays">#</a> <b>utcThursday</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [thursday](#thursday).[range](#interval_range) and [utcThursday](#utcThursday).[range](#interval_range).

<a name="fridays" href="#fridays">#</a> <b>fridays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#fridays">#</a> <b>utcFriday</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [friday](#friday).[range](#interval_range) and [utcFriday](#utcFriday).[range](#interval_range).

<a name="saturdays" href="#saturdays">#</a> <b>saturdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#saturdays">#</a> <b>utcSaturday</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [saturday](#saturday).[range](#interval_range) and [utcSaturday](#utcSaturday).[range](#interval_range).

<a name="months" href="#months">#</a> <b>months</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#months">#</a> <b>utcMonth</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [month](#month).[range](#interval_range) and [utcMonth](#utcMonth).[range](#interval_range).

<a name="years" href="#years">#</a> <b>years</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#years">#</a> <b>utcYear</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [year](#year).[range](#interval_range) and [utcYear](#utcYear).[range](#interval_range).


### Counting

<a name="dayOfYear" href="#dayOfYear">#</a> <b>dayOfYear</b>(<i>date</i>)
<br><a href="#dayOfYear">#</a> <b>utcDayOfYear</b>(<i>date</i>)

Returns the day number for the given date. The first day of the year (January 1) is always the 0th day.

<a name="weekOfYear" href="#weekOfYear">#</a> <b>weekOfYear</b>(<i>date</i>)
<br><a href="#weekOfYear">#</a> <b>utcWeekOfYear</b>(<i>date</i>)
<br><a name="sundayOfYear" href="#sundayOfYear">#</a> <b>sundayOfYear</b>(<i>date</i>)
<br><a href="#sundayOfYear">#</a> <b>utcSundayOfYear</b>(<i>date</i>)
<br><a name="mondayOfYear" href="#mondayOfYear">#</a> <b>mondayOfYear</b>(<i>date</i>)
<br><a href="#mondayOfYear">#</a> <b>utcMondayOfYear</b>(<i>date</i>)
<br><a name="tuesdayOfYear" href="#tuesdayOfYear">#</a> <b>tuesdayOfYear</b>(<i>date</i>)
<br><a href="#tuesdayOfYear">#</a> <b>utcTuesdayOfYear</b>(<i>date</i>)
<br><a name="wednesdayOfYear" href="#wednesdayOfYear">#</a> <b>wednesdayOfYear</b>(<i>date</i>)
<br><a href="#wednesdayOfYear">#</a> <b>utcWednesdayOfYear</b>(<i>date</i>)
<br><a name="thursdayOfYear" href="#thursdayOfYear">#</a> <b>thursdayOfYear</b>(<i>date</i>)
<br><a href="#thursdayOfYear">#</a> <b>utcThursdayOfYear</b>(<i>date</i>)
<br><a name="fridayOfYear" href="#fridayOfYear">#</a> <b>fridayOfYear</b>(<i>date</i>)
<br><a href="#fridayOfYear">#</a> <b>utcFridayOfYear</b>(<i>date</i>)
<br><a name="saturdayOfYear" href="#saturdayOfYear">#</a> <b>saturdayOfYear</b>(<i>date</i>)
<br><a href="#saturdayOfYear">#</a> <b>utcSaturdayOfYear</b>(<i>date</i>)

Returns the week number for the given date, where weeks start with the given <i>day</i>. The first day of the year (January 1) is always the 0th week. weekOfYear is an alias for sundayOfYear.

## Changes from D3 3.x:

…
