import interval from "./interval";

export function floor(date) {
  date.setMilliseconds(0);
};

export default interval(floor, function(date, offset) {
  date.setTime(date.getTime() + Math.floor(offset) * 1e3);
});
