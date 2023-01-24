import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { Track } from 'src/track/track.schema';

export type AlbumDocument = mongoose.HydratedDocument<Album>

@Schema()
export class Album {
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    artist: string;
    @Prop({required: true})
    year: string;
    @Prop()
    label: string;
    @Prop()
    picture: string;
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Track"}]})
    tracks: Track[]
}

export const AlbumSchema = SchemaFactory.createForClass(Album)