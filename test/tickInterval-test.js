import assert from "node:assert";
import {it} from "vitest";
import {timeTickInterval, utcTickInterval} from "d3-time";
import {local, utc} from "./date.js";

for (const [name, tickInterval, date] of [["timeTickInterval", timeTickInterval, local], ["utcTickInterval", utcTickInterval, utc]]) {
  it(`${name} selects multi-year intervals for descending domains`, () => {
    const interval = tickInterval(date(2020, 0, 1), date(2000, 0, 1), 4);
    assert.notStrictEqual(interval, null);
    assert.deepStrictEqual(interval.range(date(2000, 0, 1), date(2021, 0, 1)), [
      date(2000, 0, 1),
      date(2005, 0, 1),
      date(2010, 0, 1),
      date(2015, 0, 1),
      date(2020, 0, 1)
    ]);
  });

  it(`${name} selects sub-second intervals for descending domains`, () => {
    const interval = tickInterval(new Date(1000), new Date(0), 5);
    assert.deepStrictEqual(interval.offset(new Date(0), 1), new Date(200));
    assert.deepStrictEqual(interval.range(new Date(0), new Date(1001)), [
      new Date(0), new Date(200), new Date(400), new Date(600), new Date(800), new Date(1000)
    ]);
  });
}
