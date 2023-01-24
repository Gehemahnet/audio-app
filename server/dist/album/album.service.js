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
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const album_schema_1 = require("./album.schema");
let AlbumService = class AlbumService {
    constructor(albumModel) {
        this.albumModel = albumModel;
    }
    async create(dto) {
        try {
            const album = new this.albumModel(dto);
            return album.save();
        }
        catch (e) {
            console.log(e.message);
        }
    }
    async getAll() {
        return await this.albumModel.find();
    }
    async getOne(id) {
        return await (await this.albumModel.findById(id)).populate("tracks");
    }
    async update(id, dto) {
        return await this.albumModel.findByIdAndUpdate(id, dto);
    }
    async delete(id) {
        const album = await this.albumModel.findByIdAndDelete(id);
        return album.id;
    }
};
AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(album_schema_1.Album.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map