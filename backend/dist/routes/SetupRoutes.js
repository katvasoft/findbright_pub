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
exports.SetupController = void 0;
var express_1 = require("express");
var SetupService_1 = require("../services/SetupService");
var LookAndFeelService_1 = require("../services/LookAndFeelService");
var CommonErrorHandler_1 = require("../services/CommonErrorHandler");
var JwtService_1 = require("../services/JwtService");
var router = express_1.Router();
var domainPath = "/domain";
var synonymPath = "/synonym";
var promotionPath = "/promotion";
var stylePath = "/style";
router.use(domainPath, JwtService_1.checkJwt);
router.use(synonymPath, JwtService_1.checkJwt);
router.use(promotionPath, JwtService_1.checkJwt);
router.use(stylePath, JwtService_1.checkJwt);
router.route(domainPath + "/account/:accountid")
    .get(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var domains;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.params['accountid']) return [3 /*break*/, 2];
                return [4 /*yield*/, SetupService_1.queryAccountDomains(req.params['accountid'])];
            case 1:
                domains = _a.sent();
                res.send(domains);
                return [3 /*break*/, 3];
            case 2:
                res.status(400).send();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); }));
router.route(synonymPath + "/account/:accountid")
    .get(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var synonyms;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.params['accountid']) return [3 /*break*/, 2];
                return [4 /*yield*/, SetupService_1.queryAccountSynonyms(req.params['accountid'])];
            case 1:
                synonyms = _a.sent();
                res.send(synonyms);
                return [3 /*break*/, 3];
            case 2:
                res.status(400).send();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); }));
router.route(synonymPath + "/:id")
    .delete(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params['id'];
                return [4 /*yield*/, SetupService_1.removeSynonym(id)];
            case 1:
                _a.sent();
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(domainPath + "/:id")
    .delete(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params['id'];
                return [4 /*yield*/, SetupService_1.removeDomain(id)];
            case 1:
                _a.sent();
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(domainPath)
    .post(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var domains;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                domains = req.body;
                return [4 /*yield*/, SetupService_1.saveDomain(domains)];
            case 1:
                _a.sent();
                res.status(201).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(domainPath)
    .put(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var domains;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                domains = req.body;
                return [4 /*yield*/, SetupService_1.updateDomain(domains)];
            case 1:
                _a.sent();
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(synonymPath)
    .post(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var synonym;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                synonym = req.body;
                return [4 /*yield*/, SetupService_1.saveSynonym(synonym)];
            case 1:
                _a.sent();
                res.status(201).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(synonymPath)
    .put(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var synonym;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                synonym = req.body;
                return [4 /*yield*/, SetupService_1.updateSynonym(synonym)];
            case 1:
                _a.sent();
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(promotionPath)
    .post(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var promotion;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                promotion = req.body;
                return [4 /*yield*/, SetupService_1.savePromotion(promotion)];
            case 1:
                _a.sent();
                res.status(201).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(promotionPath)
    .put(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var promotion;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                promotion = req.body;
                return [4 /*yield*/, SetupService_1.updatePromotion(promotion)];
            case 1:
                _a.sent();
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(promotionPath + "/account/:id").get(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, promotions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params['id'];
                return [4 /*yield*/, SetupService_1.queryAccountPromotions(id)];
            case 1:
                promotions = _a.sent();
                res.send(promotions);
                return [2 /*return*/];
        }
    });
}); }));
router.route(promotionPath + "/:id").delete(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params['id'];
                return [4 /*yield*/, SetupService_1.removePromotion(id)];
            case 1:
                _a.sent();
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(stylePath + "/account/:id").get(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, styles;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params['id'];
                return [4 /*yield*/, LookAndFeelService_1.queryLookAndFeelWithAccountId(id)];
            case 1:
                styles = _a.sent();
                res.send(styles);
                return [2 /*return*/];
        }
    });
}); }));
router.route(stylePath).post(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var style;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                style = req.body;
                return [4 /*yield*/, LookAndFeelService_1.saveLookAndFeel(style)];
            case 1:
                _a.sent();
                res.status(201).send();
                return [2 /*return*/];
        }
    });
}); }));
router.route(stylePath + "/:id").delete(CommonErrorHandler_1.routeErrorWrapper(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params['id'];
                return [4 /*yield*/, LookAndFeelService_1.removeStyle(id)];
            case 1:
                _a.sent();
                res.status(200).send();
                return [2 /*return*/];
        }
    });
}); }));
exports.SetupController = router;
//# sourceMappingURL=SetupRoutes.js.map