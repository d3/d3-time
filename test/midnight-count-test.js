import assert from "node:assert";
import {execFileSync} from "node:child_process";
import process from "node:process";
import {it} from "vitest";

function countInSaoPaulo(interval, start, end) {
  return JSON.parse(execFileSync(process.execPath, ["--input-type=module", "--eval", `
    import {${interval} as interval} from "./src/index.js";
    const start = new Date(${JSON.stringify(start)}), end = new Date(${JSON.stringify(end)});
    console.log(JSON.stringify([interval.count(start, end), interval.count(end, start)]));
  `], {env: {...process.env, TZ: "America/Sao_Paulo"}, encoding: "utf8"}));
}

it("timeDay.count counts boundaries after a day whose midnight is skipped", () => {
  // DST began at midnight on November 4: the day starts at 01:00 local time.
  assert.deepStrictEqual(countInSaoPaulo("timeDay", "2018-11-04T03:00:00.000Z", "2018-11-05T02:00:00.000Z"), [1, -1]);
  assert.deepStrictEqual(countInSaoPaulo("timeDay", "2018-11-03T03:00:00.000Z", "2018-11-04T03:00:00.000Z"), [1, -1]);
});

it("timeSunday.count counts boundaries after a week whose midnight is skipped", () => {
  assert.deepStrictEqual(countInSaoPaulo("timeSunday", "2018-11-04T03:00:00.000Z", "2018-11-11T02:00:00.000Z"), [1, -1]);
  assert.deepStrictEqual(countInSaoPaulo("timeSunday", "2018-10-28T03:00:00.000Z", "2018-11-04T03:00:00.000Z"), [1, -1]);
});
