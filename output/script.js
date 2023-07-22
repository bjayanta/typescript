"use strict";
// Example:
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["UNAUTHENTIcaTED"] = 2] = "UNAUTHENTIcaTED";
    ResponseType[ResponseType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResponseType || (ResponseType = {}));
const res1 = {
    status: 200,
    type: 1,
    data: "Test"
};
