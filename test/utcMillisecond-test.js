import {test} from "vitest";
import assert from "assert";
import {timeMillisecond, utcMillisecond} from "../src/index.js";

test("utcMillisecond is an alias for timeMillisecond", () => {
  assert.strictEqual(utcMillisecond, timeMillisecond);
});
