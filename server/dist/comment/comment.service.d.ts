import { Model, ObjectId } from "mongoose";
import { CommentDto } from "./comment.dto";
import { Comment, CommentDocument } from "./comment.schema";
import { TrackDocument } from "../track/track.schema";
export declare class CommentService {
    private commentModel;
    private trackModel;
    static delete(): any;
    constructor(commentModel: Model<CommentDocument>, trackModel: Model<TrackDocument>);
    getOne(id: ObjectId): Promise<Comment>;
    getAll(): Promise<Comment[]>;
    create(dto: CommentDto): Promise<Comment>;
    update(id: ObjectId, dto: CommentDto): Promise<Comment>;
    delete(id: ObjectId): Promise<Comment>;
}
