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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumController = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const album_dto_1 = require("./album.dto");
const album_service_1 = require("./album.service");
let AlbumController = class AlbumController {
    constructor(albumService) {
        this.albumService = albumService;
    }
    create(dto) {
        return this.albumService.create(dto);
    }
    getAll() {
        return this.albumService.getAll();
    }
    getOne(id) {
        return this.albumService.getOne(id);
    }
    update(id, dto) {
        return this.albumService.update(id, dto);
    }
    delete(id) {
        return this.albumService.delete(id);
    }
};
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [album_dto_1.AlbumDto]),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "create", null);
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "getAll", null);
__decorate([
    (0, decorators_1.Get)(":id"),
    __param(0, (0, decorators_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "getOne", null);
__decorate([
    (0, decorators_1.Put)(":id"),
    __param(0, (0, decorators_1.Param)("id")),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, album_dto_1.AlbumDto]),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "update", null);
__decorate([
    (0, decorators_1.Delete)(":id"),
    __param(0, (0, decorators_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "delete", null);
AlbumController = __decorate([
    (0, decorators_1.Controller)("/albums"),
    __metadata("design:paramtypes", [album_service_1.AlbumService])
], AlbumController);
exports.AlbumController = AlbumController;
//# sourceMappingURL=album.controller.js.map