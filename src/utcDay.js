import interval from "./interval";

export function floor(date) {
  date.setUTCHours(0, 0, 0, 0);
};

export default interval(floor, function(date, offset) {
  date.setUTCDate(date.getUTCDate() + Math.floor(offset));
});
