"use strict";
// Example:
let a = [3, 'hello', { p: 3 }];
a[0] = 6;
a[1] = 5;
// a[0] = false; // error -> only number/string/object
let b = [4, 'world', { t: 100 }];
// b[1] = 10; // error -> position wise type
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const res = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: "Test"
};
console.log(res);
