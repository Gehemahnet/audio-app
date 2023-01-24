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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_schema_1 = require("./comment.schema");
const track_schema_1 = require("../track/track.schema");
let CommentService = class CommentService {
    static delete() {
        throw new Error("Method not implemented.");
    }
    constructor(commentModel, trackModel) {
        this.commentModel = commentModel;
        this.trackModel = trackModel;
    }
    async getOne(id) {
        return await this.commentModel.findById(id);
    }
    async getAll() {
        return await this.commentModel.find();
    }
    async create(dto) {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create(Object.assign({}, dto));
        track.comments.push(comment.id);
        await track.save();
        return comment;
    }
    async update(id, dto) {
        const comment = await this.commentModel.findByIdAndUpdate(id, dto);
        return comment;
    }
    async delete(id) {
        const comment = await this.commentModel.findByIdAndDelete(id);
        return comment;
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __param(1, (0, mongoose_1.InjectModel)(track_schema_1.Track.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map