import interval from "./interval";

export function floor(date) {
  date.setUTCMinutes(0, 0, 0);
};

export default interval(floor, function(date, offset) {
  date.setTime(+date + Math.floor(offset) * 36e5);
});
