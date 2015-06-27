# d3-time

…

## Installing

If you use NPM, `npm install d3-time`. Otherwise, download the [latest release](https://github.com/d3/d3-time/releases/latest).

## API Reference

The following time intervals are supported:

<a name="second" href="#second">#</a> <b>second</b>
<br><a href="#second">#</a> <b>utcSecond</b>

Seconds (e.g., 01:23:45.0000 AM). Always 1,000 milliseconds long.

<a name="minute" href="#minute">#</a> <b>minute</b>
<br><a href="#minute">#</a> <b>utcMinute</b>

Minutes (e.g., 01:02:00 AM). ECMAScript [ignores leap seconds](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.1), so minutes are always 60 seconds (6e4 milliseconds) long.

<a name="hour" href="#hour">#</a> <b>hour</b>
<br><a href="#hour">#</a> <b>utcHour</b>

Hours (e.g., 01:00 AM). 60 minutes long (36e5 milliseconds). Note that advancing time by one hour can return the same hour number, or skip an hour number, due to Daylight Savings Time.

<a name="day" href="#day">#</a> <b>day</b>
<br><a href="#day">#</a> <b>utcDay</b>

Days (e.g., February 7, 2012 at 12:00 AM). Most days are 24 hours long (864e5 milliseconds); however, with Daylight Savings Time, a day may be 23 or 25 hours long.

<a name="week" href="#week">#</a> <b>week</b>
<br><a href="#week">#</a> <b>utcWeek</b>

Alias for [sunday](#sunday). A week is always 7 days, but ranges between 167 and 169 hours depending on Daylight Savings Time.

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

Months (e.g., February 1, 2012 at 12:00 AM). Ranges between 28 and 31 days.

<a name="year" href="#year">#</a> <b>year</b>
<br><a href="#year">#</a> <b>utcYear</b>

Years (e.g., January 1, 2012 at 12:00 AM). Normal years are 365 days long; leap years are 366.

Each interval supports the following methods:

<a name="interval_floor" href="#interval_floor">#</a> <i>interval</i>.<b>floor</b>(<i>date</i>)

Returns a new date representing the latest time interval before or equal to *date*. For example, `day.floor(new Date)` typically returns 12:00 AM local time on the current day.

<a name="interval_round" href="#interval_round">#</a> <i>interval</i>.<b>round</b>(<i>date</i>)

Returns a new date representing the closest time interval to *date*. For example, `day.round(new Date)` typically returns 12:00 AM local time on the current day if it is on or before noon, and 12:00 AM of the following day if it is after noon.

<a name="interval_ceil" href="#interval_ceil">#</a> <i>interval</i>.<b>ceil</b>(<i>date</i>)

Returns a new date representing the earliest time interval after or equal to *date*. For example, `day.ceil(new Date)` typically returns 12:00 AM local time on the following day.

<a name="interval_offset" href="#interval_offset">#</a> <i>interval</i>.<b>offset</b>(<i>date</i>[, <i>step</i>])

Returns a new date equal to *date* plus *step* intervals. If *step* is negative, then the returned date will be before the specified *date*; if *step* is zero, then a copy of the specified *date* is returned. This method does not round the specified *date* to the interval. For example, if it is currently 5:34 PM, then `day.offset(new Date, 1)` returns 5:34 PM tomorrow (even if Daylight Savings Time changes!). If *step* is not specified it defaults to 1.

<a name="interval_range" href="#interval_range">#</a> <i>interval</i>.<b>range</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Returns every an array of dates representing every time interval after or equal to *start* and before *stop*. If *step* is specified, then every *step*'th interval will be returned; for example, for the [day](#day) interval a *step* of 2 will return every other day.

<a name="interval_filter" href="#interval_filter">#</a> <i>interval</i>.<b>filter</b>(<i>test</i>)

Returns a new interval that is a filtered subset of this time interval using the specified *test* function. For example, to create a new time interval that returns the 1st, 10th, 20th and 30th (if it exists) of each month:

```js
var i = day.filter(function(d) { return d.getDate() % 10 === 0; });
```

### Counting

<a name="dayOfYear" href="#dayOfYear">#</a> <b>dayOfYear</b>(<i>date</i>)

Returns the day number for the given date. The first day of the year (January 1) is always the 0th day.

<a name="weekOfYear" href="#weekOfYear">#</a> <b>weekOfYear</b>(<i>date</i>)
<br><a name="sundayOfYear" href="#sundayOfYear">#</a> <b>sundayOfYear</b>(<i>date</i>)
<br><a name="mondayOfYear" href="#mondayOfYear">#</a> <b>mondayOfYear</b>(<i>date</i>)
<br><a name="tuesdayOfYear" href="#tuesdayOfYear">#</a> <b>tuesdayOfYear</b>(<i>date</i>)
<br><a name="wednesdayOfYear" href="#wednesdayOfYear">#</a> <b>wednesdayOfYear</b>(<i>date</i>)
<br><a name="thursdayOfYear" href="#thursdayOfYear">#</a> <b>thursdayOfYear</b>(<i>date</i>)
<br><a name="fridayOfYear" href="#fridayOfYear">#</a> <b>fridayOfYear</b>(<i>date</i>)
<br><a name="saturdayOfYear" href="#saturdayOfYear">#</a> <b>saturdayOfYear</b>(<i>date</i>)

Returns the week number for the given date, where weeks start with the given <i>day</i>. The first day of the year (January 1) is always the 0th week. weekOfYear is an alias for sundayOfYear.

## Changes from D3 3.x:

…
