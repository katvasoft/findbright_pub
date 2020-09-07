"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeErrorWrapper = exports.commonErrorHandler = void 0;
exports.commonErrorHandler = function (err, req, res, next) {
    console.error("Exception occurred in some route : ", err.message);
    res.status(err.status || 500).send();
};
exports.routeErrorWrapper = function (fn) { return function (req, res) {
    fn(req, res).catch(function (err) {
        console.error("Exception occurred in some route : ", err);
        res.status(err.status || 500).send();
    });
}; };
//# sourceMappingURL=CommonErrorHandler.js.map