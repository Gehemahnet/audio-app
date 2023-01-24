import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';
import * as mongoose from "mongoose";
import { Track } from 'src/track/track.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
    @Prop({required: true})
    userName: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Track"})
    trackId: mongoose.ObjectId;
    @Prop({required: true})
    text: string;
}   

export const CommentSchema = SchemaFactory.createForClass(Comment);
