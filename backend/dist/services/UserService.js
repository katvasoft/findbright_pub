"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.removeUser = exports.updateUser = exports.signUp = exports.changePassword = exports.saveLocalUser = exports.setEntityAccountIdByUserId = exports.queryUserWithUsername = exports.hashPassword = exports.queryUserWithId = exports.queryUsersWithAccountId = void 0;
var typeorm_1 = require("typeorm");
var uuidv4_1 = require("uuidv4");
var User_1 = require("../entities/User");
var moment_1 = __importDefault(require("moment"));
var bcrypt = __importStar(require("bcryptjs"));
var AccountService_1 = require("./AccountService");
var entities_1 = require("../entities");
exports.queryUsersWithAccountId = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getManager().getRepository(User_1.User)
                    .createQueryBuilder("user")
                    .where("user.accountid = :id", { id: id })
                    .getMany()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, users];
        }
    });
}); };
exports.queryUserWithId = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getManager().getRepository(User_1.User)
                    .createQueryBuilder("user")
                    .where("user.id = :id", { id: id })
                    .getOne()];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
exports.hashPassword = function (pword) {
    var hashedPword = bcrypt.hashSync(pword, 8);
    return hashedPword;
};
exports.queryUserWithUsername = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getManager().getRepository(User_1.User)
                    .createQueryBuilder("user")
                    .where("user.username = :username", { username: username })
                    .getOne()];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
exports.setEntityAccountIdByUserId = function (userid, entity) { return __awaiter(void 0, void 0, void 0, function () {
    var usr;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.queryUserWithId(userid)];
            case 1:
                usr = _a.sent();
                entity.accountid = usr.accountid;
                return [2 /*return*/, entity];
        }
    });
}); };
exports.saveLocalUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!user.accountid) return [3 /*break*/, 2];
                if (!user.id) {
                    user.id = uuidv4_1.uuid().toString();
                }
                if (!user.created) {
                    user.created = moment_1.default().format();
                }
                if (!user.lastlogin) {
                    user.lastlogin = moment_1.default().format();
                }
                user.pword = exports.hashPassword(user.pword);
                user.provider = 'local';
                userRepository = typeorm_1.getManager().getRepository(User_1.User);
                return [4 /*yield*/, userRepository.save(user)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: throw 'AccountId cannot be empty';
        }
    });
}); };
exports.changePassword = function (passwordChange) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userOldPassword, givenOldPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.queryUserWithId(passwordChange.userid)];
            case 1:
                user = _a.sent();
                userOldPassword = exports.hashPassword(user.pword);
                givenOldPassword = exports.hashPassword(passwordChange.oldPassword);
                if (!(userOldPassword === givenOldPassword)) return [3 /*break*/, 3];
                return [4 /*yield*/, typeorm_1.getConnection()
                        .createQueryBuilder()
                        .update(User_1.User)
                        .set({ pword: passwordChange.newPassword })
                        .where("id = :id", { id: user.id })
                        .execute()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3: throw 'Passwords do not match';
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.signUp = function (signUpDto) { return __awaiter(void 0, void 0, void 0, function () {
    var account, createdAccount, newUser, savedNewUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                account = new entities_1.Account();
                account.accountName = signUpDto.accountName;
                return [4 /*yield*/, AccountService_1.saveAccount(account)];
            case 1:
                createdAccount = _a.sent();
                newUser = new User_1.User();
                newUser.accountid = createdAccount.id;
                newUser.email = signUpDto.email;
                newUser.username = signUpDto.username;
                newUser.pword = signUpDto.pword;
                return [4 /*yield*/, exports.saveLocalUser(newUser)];
            case 2:
                savedNewUser = _a.sent();
                return [2 /*return*/, savedNewUser];
        }
    });
}); };
exports.updateUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .update(User_1.User)
                    .set({ username: user.username, pword: user.pword, provider: user.provider, email: user.email })
                    .where("id = :id", { id: user.id })
                    .execute()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.removeUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .delete()
                    .from(User_1.User)
                    .where("id = :id", { id: id })
                    .execute()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=UserService.js.map