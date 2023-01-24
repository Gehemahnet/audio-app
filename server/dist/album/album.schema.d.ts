import mongoose from 'mongoose';
import { Track } from 'src/track/track.schema';
export type AlbumDocument = mongoose.HydratedDocument<Album>;
export declare class Album {
    name: string;
    artist: string;
    year: string;
    label: string;
    picture: string;
    tracks: Track[];
}
export declare const AlbumSchema: mongoose.Schema<Album, mongoose.Model<Album, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Album>;
