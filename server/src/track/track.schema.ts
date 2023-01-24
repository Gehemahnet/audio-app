import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Album } from 'src/album/album.schema';

export type TrackDocument = mongoose.HydratedDocument<Track>;

@Schema()
export class Track {
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    artist: string;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Album"})
    album: Album
    @Prop()
    text: string;
    @Prop()
    listens: number;
    @Prop()
    picture: string;
    @Prop()
    audio: string;
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]})
    comments: Comment[]
}

export const TrackSchema = SchemaFactory.createForClass(Track);
