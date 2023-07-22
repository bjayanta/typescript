"use strict";
// Example:
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
