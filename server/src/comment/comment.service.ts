import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {CommentDto} from "./comment.dto";
import {Comment, CommentDocument} from "./comment.schema";
import {Track, TrackDocument} from "../track/track.schema"


@Injectable()
export class CommentService {
    static delete(): any {
        throw new Error("Method not implemented.");
    }
    constructor(
      @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
      @InjectModel(Track.name) private trackModel: Model<TrackDocument>) {
    }
    async getOne(id: ObjectId): Promise<Comment> {
        const comment = await this.commentModel.findById(id)
        return comment
    }
    async getAll(): Promise<Comment[]> {
        const comments = await this.commentModel.find()
        return comments
   }
    async create(dto: CommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId)
        const comment = await this.commentModel.create({...dto})
        track.comments.push(comment.id)
        await track.save()
        return comment
    }
    async update(id: ObjectId, dto: CommentDto): Promise<Comment> {
        const comment = await this.commentModel.findByIdAndUpdate(id, dto)
        return comment
    }
    async delete(id: ObjectId): Promise<Comment> {
        const comment = await this.commentModel.findByIdAndDelete(id)
        return comment
    }
}