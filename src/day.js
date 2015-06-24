import interval from "./interval";

export function floor(date) {
  date.setHours(0, 0, 0, 0);
};

export default interval(floor, function(date, offset) {
  date.setDate(date.getDate() + Math.floor(offset));
});
