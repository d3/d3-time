import utcYear from "./utcYear";

export default function(date) {
  return Math.floor((date - utcYear.floor(date)) / 864e5);
};
