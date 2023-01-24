import { CommentService } from "./comment.service";
import { CommentDto } from "./comment.dto";
import { ObjectId } from "mongoose";
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    getAll(): Promise<import("./comment.schema").Comment[]>;
    getOne(id: ObjectId): Promise<import("./comment.schema").Comment>;
    create(dto: CommentDto): Promise<import("./comment.schema").Comment>;
    update(id: ObjectId, dto: CommentDto): Promise<import("./comment.schema").Comment>;
    delete(id: ObjectId): Promise<import("./comment.schema").Comment>;
}
