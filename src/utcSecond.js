import interval from "./interval";

export function floor(date) {
  date.setUTCMilliseconds(0);
};

export default interval(floor, function(date, offset) {
  date.setTime(+date + offset * 1e3);
});
