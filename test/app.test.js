const test = require("node:test");
const assert = require("node:assert/strict");
const dayjs = require("dayjs");

test("Day.js formats dates as YYYY-MM-DD", () => {
  const date = dayjs("2026-01-15").format("YYYY-MM-DD");
  assert.equal(date, "2026-01-15");
});
