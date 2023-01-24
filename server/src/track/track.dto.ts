import { ObjectId } from "mongoose";

export class TrackDto {
    readonly name: string;
    readonly artist: string;
    readonly text: string;
    readonly album: ObjectId 
}