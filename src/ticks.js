import {bisector, tickStep} from "d3-array";

import millisecond from "./millisecond";
import second from "./second";
import minute from "./minute";
import hour from "./hour";
import day from "./day";
import {default as week} from "./week";
import month from "./month";
import year from "./year";

var millisecondsPerSecond = 1000,
    millisecondsPerMinute = millisecondsPerSecond * 60,
    millisecondsPerHour = millisecondsPerMinute * 60,
    millisecondsPerDay = millisecondsPerHour * 24,
    millisecondsPerWeek = millisecondsPerDay * 7,
    millisecondsPerMonth = millisecondsPerDay * 30,
    millisecondsPerYear = millisecondsPerDay * 365,
    bisectTickIntervals = bisector(function(method) { return method[2]; }).right;

export default function(start, stop, count) {
  //var interval = tickInterval(start, stop, count);
  //return interval.range(start, stop);

  start = new Date(+start);
  var i = tickInterval(start, stop, count),
    step = 0,
    nextDate = start,
    range = [nextDate];
  while (nextDate = i.interval.offset(start, step += i.step), nextDate <= +stop) range.push(nextDate);
  //while (++step < 3) range.push(month.every(2).offset(start, step));
  return range;
};

var tickIntervals = [
  [second,  1,      millisecondsPerSecond],
  [second,  5,  5 * millisecondsPerSecond],
  [second, 15, 15 * millisecondsPerSecond],
  [second, 30, 30 * millisecondsPerSecond],
  [minute,  1,      millisecondsPerMinute],
  [minute,  5,  5 * millisecondsPerMinute],
  [minute, 15, 15 * millisecondsPerMinute],
  [minute, 30, 30 * millisecondsPerMinute],
  [  hour,  1,      millisecondsPerHour  ],
  [  hour,  3,  3 * millisecondsPerHour  ],
  [  hour,  6,  6 * millisecondsPerHour  ],
  [  hour, 12, 12 * millisecondsPerHour  ],
  [   day,  1,      millisecondsPerDay   ],
  [   day,  2,  2 * millisecondsPerDay   ],
  [  week,  1,      millisecondsPerWeek  ],
  [ month,  1,      millisecondsPerMonth ],
  [ month,  3,  3 * millisecondsPerMonth ],
  [  year,  1,      millisecondsPerYear  ]
];

export function tickInterval(start, stop, count) {
  start = new Date(+start);
  stop = new Date(+stop);
  if (isNaN(start.getTime()) || isNaN(stop.getTime()) ||
      start.getTime() === stop.getTime() ||
     !isFinite(count) || !(count > 0)) return null;

  var target = Math.abs(stop - start) / count,
      i = bisectTickIntervals(tickIntervals, target),
      step,
      interval;
  if (i === tickIntervals.length) {
    step = tickStep(start / millisecondsPerYear, stop / millisecondsPerYear, count);
    interval = year;
  } else if (i) {
    i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    step = i[1];
    interval = i[0];
  } else {
    step = tickStep(start, stop, count);
    interval = millisecond;
  }
  return { interval: interval, step: step};
};
