"use strict";
// Enum
var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["North"] = 0] = "North";
    DIRECTIONS[DIRECTIONS["South"] = 1] = "South";
    DIRECTIONS[DIRECTIONS["East"] = 2] = "East";
    DIRECTIONS[DIRECTIONS["West"] = 3] = "West";
})(DIRECTIONS || (DIRECTIONS = {}));
console.log(DIRECTIONS.East);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["OK"] = 405] = "OK";
    StatusCode[StatusCode["Created"] = 406] = "Created";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Created);
var Status;
(function (Status) {
    Status["Ok"] = "Sucess";
    Status["NotFound"] = "404";
    Status["Created"] = "202";
})(Status || (Status = {}));
console.log(Status.Ok);
