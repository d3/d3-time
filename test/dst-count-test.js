import assert from "node:assert";
import {it} from "vitest";
import {timeDay, timeWeek} from "d3-time";

// Issue #74: in time zones where DST starts at 00:00 (e.g. America/Santiago),
// timeDay.floor of the transition day is 01:00. The count functions must still
// return the number of interval boundaries after start (exclusive), including
// the floored boundary itself when start is already aligned.
it("timeDay.count counts boundaries after a skipped-midnight start", () => {
  const start = timeDay.floor(new Date(2025, 8, 7, 12));
  const next = timeDay.floor(new Date(2025, 8, 8, 12));
  const end = new Date(2025, 8, 17);
  const expected = timeDay.range(new Date(+start + 1), new Date(+end + 1)).length;
  assert.strictEqual(timeDay.count(start, next), 1);
  assert.strictEqual(timeDay.count(start, end), expected);
});

it("timeWeek.count counts boundaries after a skipped-midnight start", () => {
  const start = timeDay.floor(new Date(2025, 8, 7, 12));
  const end = new Date(2025, 8, 17);
  // start is a Sunday (floored), end is a Wednesday; count the Sundays after start.
  const expected = timeWeek.range(new Date(+start + 1), new Date(+end + 1)).length;
  assert.strictEqual(timeWeek.count(start, end), expected);
});
