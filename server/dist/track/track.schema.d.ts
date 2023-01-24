import mongoose from 'mongoose';
import { Album } from 'src/album/album.schema';
export type TrackDocument = mongoose.HydratedDocument<Track>;
export declare class Track {
    name: string;
    artist: string;
    album: Album;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Comment[];
}
export declare const TrackSchema: mongoose.Schema<Track, mongoose.Model<Track, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Track>;
