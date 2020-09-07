"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion = void 0;
var typeorm_1 = require("typeorm");
var Promotion = /** @class */ (function () {
    function Promotion() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Promotion.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Promotion.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Promotion.prototype, "promotionName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Promotion.prototype, "limitWithKeywords", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Promotion.prototype, "keyword", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Promotion.prototype, "dateFrom", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Promotion.prototype, "dateTo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Promotion.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Promotion.prototype, "content", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Promotion.prototype, "link", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Promotion.prototype, "thumbnailUrl", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Promotion.prototype, "accountid", void 0);
    Promotion = __decorate([
        typeorm_1.Entity()
    ], Promotion);
    return Promotion;
}());
exports.Promotion = Promotion;
//# sourceMappingURL=Promotion.js.map