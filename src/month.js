import interval from "./interval";

export default interval(function(date) {
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
}, function(date, offset) {
  date.setMonth(date.getMonth() + offset);
});
