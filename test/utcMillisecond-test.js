import assert from "node:assert";
import {it} from "vitest";
import {timeMillisecond, utcMillisecond} from "d3-time";

it("utcMillisecond is an alias for timeMillisecond", () => {
  assert.strictEqual(utcMillisecond, timeMillisecond);
});
