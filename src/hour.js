import interval from "./interval";

export function floor(date) {
  date.setMinutes(0, 0, 0);
};

export default interval(floor, function(date, offset) {
  date.setTime(+date + offset * 36e5);
});
