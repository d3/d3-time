var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("saturday.floor(date) returns saturdays", function(test) {
  test.dateEqual(time.saturday.floor(date.local(2011, 00, 06, 23, 59, 59)), date.local(2011, 00, 01));
  test.dateEqual(time.saturday.floor(date.local(2011, 00, 07, 00, 00, 00)), date.local(2011, 00, 01));
  test.dateEqual(time.saturday.floor(date.local(2011, 00, 07, 00, 00, 01)), date.local(2011, 00, 01));
  test.dateEqual(time.saturday.floor(date.local(2011, 00, 07, 23, 59, 59)), date.local(2011, 00, 01));
  test.dateEqual(time.saturday.floor(date.local(2011, 00, 08, 00, 00, 00)), date.local(2011, 00, 08));
  test.dateEqual(time.saturday.floor(date.local(2011, 00, 08, 00, 00, 01)), date.local(2011, 00, 08));
  test.end();
});
