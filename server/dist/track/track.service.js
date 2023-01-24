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
exports.TrackService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const track_schema_1 = require("./track.schema");
const album_schema_1 = require("../album/album.schema");
const comment_schema_1 = require("../comment/comment.schema");
const file_service_1 = require("../file/file.service");
let TrackService = class TrackService {
    constructor(trackModel, albumModel, commentModel, fileService) {
        this.trackModel = trackModel;
        this.albumModel = albumModel;
        this.commentModel = commentModel;
        this.fileService = fileService;
    }
    async create(dto, picture, audio) {
        try {
            const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
            const audioPath = this.fileService.createFile(file_service_1.FileType.AUDIO, audio);
            const track = new this.trackModel(Object.assign(Object.assign({}, dto), { listens: 0, picture: picturePath, audio: audioPath }));
            if (dto.album) {
                const album = await this.albumModel.findById(dto.album);
                album.tracks.push(track);
                await album.save();
            }
            await track.save();
            return track;
        }
        catch (e) {
            return e.message;
        }
    }
    async getAll(count = 10, offset = 0) {
        try {
            return await this.trackModel.find().skip(offset).limit(count);
        }
        catch (e) {
            return e.message;
        }
    }
    async getOne(id) {
        try {
            const track = await this.trackModel.findById(id)
                .populate("comments")
                .populate("album");
            return track;
        }
        catch (e) {
            return e.message;
        }
    }
    async update(id, dto) {
        try {
            console.log(dto);
            if (dto.album) {
                const track = await this.trackModel.findById(id);
                const album = await this.albumModel.findById(dto.album);
                album.tracks.push(track);
                await album.save();
            }
            return await this.trackModel.findByIdAndUpdate(id, dto);
        }
        catch (e) {
            return e.message;
        }
    }
    async delete(id) {
        try {
            const track = await this.trackModel.findById(id);
            if (track.comments.length > 0) {
                track.comments.map(async (comment) => await this.commentModel.findOneAndDelete(comment));
            }
            return await this.trackModel.findByIdAndDelete(id);
        }
        catch (e) {
            return e.message;
        }
    }
    async listen(id) {
        const track = await this.trackModel.findById(id);
        track.listens++;
        track.save();
    }
    async search(query) {
        const tracks = await this.trackModel.find({
            name: { $regex: new RegExp(query, 'i') }
        });
        return tracks;
    }
};
TrackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(track_schema_1.Track.name)),
    __param(1, (0, mongoose_1.InjectModel)(album_schema_1.Album.name)),
    __param(2, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        file_service_1.FileService])
], TrackService);
exports.TrackService = TrackService;
//# sourceMappingURL=track.service.js.map