# d3-time

When visualizing time series data, analyzing temporal patterns, or working with time in general, the irregularities of conventional time units quickly become apparent. In the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar), for example, most months have 31 days but some have 28, 29 or 30; most years have 365 days but [leap years](https://en.wikipedia.org/wiki/Leap_year) have 366; and with [daylight saving](https://en.wikipedia.org/wiki/Daylight_saving_time), most days have 24 hours but some have 23 or 25. Adding to complexity, daylight saving conventions vary around the world.

As a result of these temporal peculiarities, it can be difficult to perform seemingly-trivial tasks. For example, if you want to compute the number of days that have passed between two dates, you can’t simply subtract and divide by 24 hours (86,400,000 ms):

```js
var start = new Date(2015, 02, 01), // Sun Mar 01 2015 00:00:00 GMT-0800 (PST)
    end = new Date(2015, 03, 01); // Wed Apr 01 2015 00:00:00 GMT-0700 (PDT)
(end - start) / 864e5; // 30.958333333333332, oops!
```

You can, however, use [day](#day).[count](#interval_count):

```js
day.count(start, end); // 31
```

[Day](#day) is one of several [time intervals](#api-reference) provided by d3-time. Each interval represents a conventional unit of time—[hours](#hour), [weeks](#weeks), [months](#month), *etc.*—and has methods to calculate boundary dates. For example, the [day](#day) interval computes midnight (typically 12:00 AM local time) of the corresponding day. In addition to [rounding](#interval_round) and [counting](#interval_count), intervals can also be used to generate arrays of boundary dates. For example, to compute each Sunday in the current month:

```js
var now = new Date;
week.range(month.floor(now), month.ceil(now));
// [Sun Jun 07 2015 00:00:00 GMT-0700 (PDT),
//  Sun Jun 14 2015 00:00:00 GMT-0700 (PDT),
//  Sun Jun 21 2015 00:00:00 GMT-0700 (PDT),
//  Sun Jun 28 2015 00:00:00 GMT-0700 (PDT)]
```

The d3-time module does not implement its own calendaring system; it merely implements a convenient API for calendar math on top of ECMAScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). Thus, it ignores leap seconds and can only work with the local time zone and [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) (UTC).

This module is used by D3’s time scales to generate sensible ticks, by D3’s time format, and can also be used directly to do things like [calendar layouts](http://bl.ocks.org/mbostock/4063318).

## Installing

If you use NPM, `npm install d3-time`. Otherwise, download the [latest release](https://github.com/d3/d3-time/releases/latest).

## API Reference

<a name="_interval" href="#_interval">#</a> <i>interval</i>(<i>date</i>)

Alias for [*interval*.floor](#interval_floor). For example, `year(date)` and `year.floor(date)` are equivalent.

<a name="interval_floor" href="#interval_floor">#</a> <i>interval</i>.<b>floor</b>(<i>date</i>)

Returns a new date representing the latest interval boundary date before or equal to *date*. For example, `day.floor(new Date)` typically returns 12:00 AM local time on the current day.

This method is idempotent: if the specified *date* is already floored to the current interval, a new date with an identical time is returned. Furthermore, the returned date is the minimum expressible value of the associated interval, such that `floor(+floor(date) - 1)` returns the preceeding interval boundary date.

Note that the `==` and `===` operators do not compare by value with [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects, and thus you cannot use them to tell whether the specified *date* has already been floored. Instead, coerce to a number and then compare:

```js
// Returns true if the specified date is a day boundary.
function isDay(date) {
  return +day.floor(date) === +date;
}
```

This is more reliable than testing whether the time is 12:00 AM, as in some time zones midnight may not exist due to daylight saving.

<a name="interval_round" href="#interval_round">#</a> <i>interval</i>.<b>round</b>(<i>date</i>)

Returns a new date representing the closest interval boundary date to *date*. For example, `day.round(new Date)` typically returns 12:00 AM local time on the current day if it is on or before noon, and 12:00 AM of the following day if it is after noon.

This method is idempotent: if the specified *date* is already rounded to the current interval, a new date with an identical time is returned.

<a name="interval_ceil" href="#interval_ceil">#</a> <i>interval</i>.<b>ceil</b>(<i>date</i>)

Returns a new date representing the earliest interval boundary date after or equal to *date*. For example, `day.ceil(new Date)` typically returns 12:00 AM local time on the following day.

This method is idempotent: if the specified *date* is already ceilinged to the current interval, a new date with an identical time is returned. Furthermore, the returned date is the maximum expressible value of the associated interval, such that `ceil(+ceil(date) + 1)` returns the following interval boundary date.

<a name="interval_offset" href="#interval_offset">#</a> <i>interval</i>.<b>offset</b>(<i>date</i>[, <i>step</i>])

Returns a new date equal to *date* plus *step* intervals. If *step* is not specified it defaults to 1. If *step* is negative, then the returned date will be before the specified *date*; if *step* is zero, then a copy of the specified *date* is returned; if *step* is not an integer, it is [floored](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor). This method does not round the specified *date* to the interval. For example, if it is currently 5:34 PM, then `day.offset(new Date, 1)` returns 5:34 PM tomorrow (even if daylight saving changes!).

<a name="interval_range" href="#interval_range">#</a> <i>interval</i>.<b>range</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Returns every an array of dates representing every interval boundary after or equal to *start* (inclusive) and before *stop* (exclusive). If *step* is specified, then every *step*'th interval will be returned; for example, for the [day](#day) interval a *step* of 2 will return every other day. If *step* is not an integer, it is [floored](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).

<a name="interval_filter" href="#interval_filter">#</a> <i>interval</i>.<b>filter</b>(<i>test</i>)

Returns a new interval that is a filtered subset of this interval using the specified *test* function. The *test* function is passed a date and should return true if and only if the specified date should be considered part of the interval. For example, to create an interval that returns the 1st, 11th, 21th and 31th (if it exists) of each month:

```js
var i = day.filter(function(d) { return (d.getDate() - 1) % 10 === 0; });
```

The returned filtered interval does not support [count](#interval_count).

<a name="interval_count" href="#interval_count">#</a> <i>interval</i>.<b>count</b>(<i>start</i>, <i>end</i>)

Returns the number of interval boundaries after *start* (exclusive) and before or equal to *end* (inclusive). Note that this behavior is slightly different than [*interval*.range](#interval_range) because its purpose is to return the zero-based number of the specified *end* date relative to the specified *start* date. For example, to compute the current zero-based day-of-year number:

```js
var now = new Date;
day.count(year(now), now); // 177
```

Likewise, to compute the current zero-based week-of-year number for weeks that start on Sunday:

```js
sunday.count(year(now), now); // 25
```

<a name="interval" href="#interval">#</a> <b>interval</b>(<i>floor</i>, <i>offset</i>[, <i>count</i>])

Constructs a new custom interval given the specified *floor* and *offset* functions and an optional *count* function.

The *floor* function takes a single date as an argument and rounds it down to the nearest interval boundary.

The *offset* function takes a date and an integer step as arguments and advances the specified date by the specified number of boundaries; the step may be positive, negative or zero.

The optional *count* function takes a start date and an end date, already floored to the current interval, and returns the number of boundaries between the start (exclusive) and end (inclusive). If a *count* function is not specified, the returned interval does not expose a [count](#interval_count) method. Note: due to an internal optimization, the specified *count* function must not invoke *interval*.count on other time intervals.

### Intervals

The following intervals are provided:

<a name="millisecond" href="#millisecond">#</a> <b>millisecond</b>
<br><a href="#millisecond">#</a> <b>utcMillisecond</b>

Milliseconds; the shortest available time unit.

<a name="second" href="#second">#</a> <b>second</b>
<br><a href="#second">#</a> <b>utcSecond</b>

Seconds (e.g., 01:23:45.0000 AM); 1,000 milliseconds.

<a name="minute" href="#minute">#</a> <b>minute</b>
<br><a href="#minute">#</a> <b>utcMinute</b>

Minutes (e.g., 01:02:00 AM); 60 seconds. Note that ECMAScript [ignores leap seconds](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.1).

<a name="hour" href="#hour">#</a> <b>hour</b>
<br><a href="#hour">#</a> <b>utcHour</b>

Hours (e.g., 01:00 AM); 60 minutes. Note that advancing time by one hour in local time can return the same hour or skip an hour due to daylight saving.

<a name="day" href="#day">#</a> <b>day</b>
<br><a href="#day">#</a> <b>utcDay</b>

Days (e.g., February 7, 2012 at 12:00 AM); typically 24 hours. Days in local time may range from 23 to 25 hours due to daylight saving.

<a name="week" href="#week">#</a> <b>week</b>
<br><a href="#week">#</a> <b>utcWeek</b>

Alias for [sunday](#sunday); 7 days and typically 168 hours. Weeks in local time may range from 167 to 169 hours due on daylight saving.

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

For convenience, aliases for [*interval*.range](#interval_range) are also provided as plural forms of the corresponding interval.

<a name="milliseconds" href="#milliseconds">#</a> <b>milliseconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#milliseconds">#</a> <b>utcMilliseconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [millisecond](#millisecond).[range](#interval_range) and [utcMillisecond](#millisecond).[range](#interval_range).

<a name="seconds" href="#seconds">#</a> <b>seconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#seconds">#</a> <b>utcSeconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [second](#second).[range](#interval_range) and [utcSecond](#second).[range](#interval_range).

<a name="minutes" href="#minutes">#</a> <b>minutes</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#minutes">#</a> <b>utcMinutes</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [minute](#minute).[range](#interval_range) and [utcMinute](#minute).[range](#interval_range).

<a name="hours" href="#hours">#</a> <b>hours</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#hours">#</a> <b>utcHours</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [hour](#hour).[range](#interval_range) and [utcHour](#hour).[range](#interval_range).

<a name="days" href="#days">#</a> <b>days</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#days">#</a> <b>utcDays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [day](#day).[range](#interval_range) and [utcDay](#day).[range](#interval_range).

<a name="weeks" href="#weeks">#</a> <b>weeks</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#weeks">#</a> <b>utcWeeks</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [week](#week).[range](#interval_range) and [utcWeek](#week).[range](#interval_range).

<a name="sundays" href="#sundays">#</a> <b>sundays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#sundays">#</a> <b>utcSundays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [sunday](#sunday).[range](#interval_range) and [utcSunday](#sunday).[range](#interval_range).

<a name="mondays" href="#mondays">#</a> <b>mondays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#mondays">#</a> <b>utcMondays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [monday](#monday).[range](#interval_range) and [utcMonday](#monday).[range](#interval_range).

<a name="tuesdays" href="#tuesdays">#</a> <b>tuesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#tuesdays">#</a> <b>utcTuesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [tuesday](#tuesday).[range](#interval_range) and [utcTuesday](#tuesday).[range](#interval_range).

<a name="wednesdays" href="#wednesdays">#</a> <b>wednesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#wednesdays">#</a> <b>utcWednesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [wednesday](#wednesday).[range](#interval_range) and [utcWednesday](#wednesday).[range](#interval_range).

<a name="thursdays" href="#thursdays">#</a> <b>thursdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#thursdays">#</a> <b>utcThursdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [thursday](#thursday).[range](#interval_range) and [utcThursday](#thursday).[range](#interval_range).

<a name="fridays" href="#fridays">#</a> <b>fridays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#fridays">#</a> <b>utcFridays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [friday](#friday).[range](#interval_range) and [utcFriday](#friday).[range](#interval_range).

<a name="saturdays" href="#saturdays">#</a> <b>saturdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#saturdays">#</a> <b>utcSaturdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [saturday](#saturday).[range](#interval_range) and [utcSaturday](#saturday).[range](#interval_range).

<a name="months" href="#months">#</a> <b>months</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#months">#</a> <b>utcMonths</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [month](#month).[range](#interval_range) and [utcMonth](#month).[range](#interval_range).

<a name="years" href="#years">#</a> <b>years</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#years">#</a> <b>utcYears</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

Aliases for [year](#year).[range](#interval_range) and [utcYear](#year).[range](#interval_range).

## Changes from D3 3.x:

* Instead of exposing UTC intervals as *interval*.utc, separate UTC intervals are provided. For example, use utcDay instead of day.utc.

* The dayOfYear, weekOfYear and related methods have been removed in favor of the more general [*interval*.count](#interval_count). You can now easily count the number of days you have lived or the number of hours in the current week, and you can count in either local time or UTC.

* The unusual behavior of [day](#day).[range](#interval_range) when passed a *step* greater than one has been replaced with more sensible behavior of simply skipping every *step* days. If you want to filter by day-of-month (such as ticks for a time scale), use [*interval*.filter](#interval_filter) instead.

* All methods coerce to Date where appropriate, thereby allowing numeric input.

* Fixed [a bug](https://github.com/mbostock/d3/pull/1197) related to unusual daylight saving behavior.
