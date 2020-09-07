"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
var express_1 = require("express");
var AccountService_1 = require("../services/AccountService");
var JwtService_1 = require("../services/JwtService");
var CommonErrorHandler_1 = require("../services/CommonErrorHandler");
var router = express_1.Router();
var path = "/account";
router.use(path, JwtService_1.checkJwt);
router.route(path)
    .get(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var accounts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, AccountService_1.queryAllAccounts()];
            case 1:
                accounts = _a.sent();
                res.send(accounts);
                return [2 /*return*/];
        }
    });
}); }));
router.route(path)
    .post(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                account = req.body;
                return [4 /*yield*/, AccountService_1.saveAccount(account)];
            case 1:
                _a.sent();
                res.status(201).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(path + "/feedback")
    .post(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var feedback;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                feedback = req.body;
                return [4 /*yield*/, AccountService_1.saveAccountFeedback(feedback)];
            case 1:
                _a.sent();
                res.status(201).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(path)
    .put(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var accountUpd, account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                accountUpd = req.body;
                return [4 /*yield*/, AccountService_1.queryAccountWithId(accountUpd.id)];
            case 1:
                account = _a.sent();
                account.accountName = accountUpd.accountName;
                account.dateCreated = accountUpd.dateCreated;
                return [4 /*yield*/, AccountService_1.saveAccount(account)];
            case 2:
                _a.sent();
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(path + "/:id")
    .get(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.params['id']) return [3 /*break*/, 2];
                return [4 /*yield*/, AccountService_1.queryAccountWithId(req.params['id'])];
            case 1:
                account = _a.sent();
                if (account) {
                    res.send(account);
                }
                else {
                    res.status(404).send();
                }
                return [3 /*break*/, 3];
            case 2:
                res.status(400).send();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); }));
exports.AccountController = router;
//# sourceMappingURL=AccountRoutes.js.map