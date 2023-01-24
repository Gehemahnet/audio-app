import { HydratedDocument } from 'mongoose';
import * as mongoose from "mongoose";
export type CommentDocument = HydratedDocument<Comment>;
export declare class Comment {
    userName: string;
    trackId: mongoose.ObjectId;
    text: string;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment>;
