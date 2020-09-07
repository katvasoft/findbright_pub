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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePromotion = exports.removeSynonym = exports.removeDomain = exports.updateDomainLastCrawl = exports.updateSynonym = exports.updateDomain = exports.updatePromotion = exports.savePromotion = exports.saveDomain = exports.saveSynonym = exports.queryAccountPromotions = exports.queryAccountSynonyms = exports.queryAccountDomains = void 0;
var typeorm_1 = require("typeorm");
var Domain_1 = require("../entities/Domain");
var Synonym_1 = require("../entities/Synonym");
var Promotion_1 = require("../entities/Promotion");
var uuidv4_1 = require("uuidv4");
var moment_1 = __importDefault(require("moment"));
exports.queryAccountDomains = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var domains;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getManager().getRepository(Domain_1.Domain)
                    .createQueryBuilder("domain")
                    .where("domain.accountid = :id", { id: id })
                    .getMany()];
            case 1:
                domains = _a.sent();
                return [2 /*return*/, domains];
        }
    });
}); };
exports.queryAccountSynonyms = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var synonyms;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getManager().getRepository(Synonym_1.Synonym)
                    .createQueryBuilder("synonym")
                    .where("synonym.accountid = :id", { id: id })
                    .getMany()];
            case 1:
                synonyms = _a.sent();
                return [2 /*return*/, synonyms];
        }
    });
}); };
exports.queryAccountPromotions = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var promotions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getManager().getRepository(Promotion_1.Promotion)
                    .createQueryBuilder("promotion")
                    .where("promotion.accountid = :id", { id: id })
                    .getMany()];
            case 1:
                promotions = _a.sent();
                return [2 /*return*/, promotions];
        }
    });
}); };
exports.saveSynonym = function (synonym) { return __awaiter(void 0, void 0, void 0, function () {
    var synonymRepository;
    return __generator(this, function (_a) {
        if (synonym.accountid) {
            if (!synonym.id) {
                synonym.id = uuidv4_1.uuid().toString();
            }
            synonymRepository = typeorm_1.getManager().getRepository(Synonym_1.Synonym);
            synonymRepository.save(synonym);
        }
        return [2 /*return*/];
    });
}); };
exports.saveDomain = function (domain) { return __awaiter(void 0, void 0, void 0, function () {
    var domainRepository;
    return __generator(this, function (_a) {
        if (domain.accountid) {
            if (!domain.id) {
                domain.id = uuidv4_1.uuid().toString();
            }
            domainRepository = typeorm_1.getManager().getRepository(Domain_1.Domain);
            domainRepository.save(domain);
        }
        else {
            throw 'AccountId cannot be empty';
        }
        return [2 /*return*/];
    });
}); };
exports.savePromotion = function (promotion) { return __awaiter(void 0, void 0, void 0, function () {
    var promotionRepository;
    return __generator(this, function (_a) {
        if (promotion.accountid) {
            if (!promotion.id) {
                promotion.id = uuidv4_1.uuid().toString();
            }
            promotionRepository = typeorm_1.getManager().getRepository(Promotion_1.Promotion);
            promotionRepository.save(promotion);
        }
        else {
            throw 'AccountId cannot be empty';
        }
        return [2 /*return*/];
    });
}); };
exports.updatePromotion = function (promotion) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .update(Promotion_1.Promotion)
                    .set({ active: promotion.active, promotionName: promotion.promotionName,
                    limitWithKeywords: promotion.limitWithKeywords, keyword: promotion.keyword,
                    dateFrom: promotion.dateFrom, dateTo: promotion.dateTo, title: promotion.title,
                    content: promotion.content, link: promotion.link, thumbnailUrl: promotion.thumbnailUrl })
                    .where("id = :id", { id: promotion.id })
                    .execute()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.updateDomain = function (domain) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .update(Domain_1.Domain)
                    .set({ domainName: domain.domainName, lastCrawl: domain.lastCrawl })
                    .where("id = :id ", { id: domain.id })
                    .execute()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.updateSynonym = function (synonym) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .update(Synonym_1.Synonym)
                    .set({ synonymList: synonym.synonymList })
                    .where("id = :id", { id: synonym.id })
                    .execute()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.updateDomainLastCrawl = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .update(Domain_1.Domain)
                    .set({ lastCrawl: moment_1.default().format() })
                    .where("id = :id", { id: id })
                    .execute()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.removeDomain = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .delete()
                    .from(Domain_1.Domain)
                    .where("id = :id", { id: id })
                    .execute()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.removeSynonym = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .delete()
                    .from(Synonym_1.Synonym)
                    .where("id = :id", { id: id })
                    .execute()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.removePromotion = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .delete()
                    .from(Promotion_1.Promotion)
                    .where("id = :id", { id: id })
                    .execute()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=SetupService.js.map