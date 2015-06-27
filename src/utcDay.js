import interval from "./interval";

export default interval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, offset) {
  date.setUTCDate(date.getUTCDate() + offset);
});
