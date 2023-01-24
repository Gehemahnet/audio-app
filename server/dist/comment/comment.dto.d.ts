import { ObjectId } from "mongoose";
export declare class CommentDto {
    readonly userName: string;
    readonly text: string;
    readonly trackId: ObjectId;
}
