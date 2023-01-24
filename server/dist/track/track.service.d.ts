import { Model, ObjectId } from "mongoose";
import { Track, TrackDocument } from "./track.schema";
import { TrackDto } from "./track.dto";
import { AlbumDocument } from "../album/album.schema";
import { CommentDocument } from "src/comment/comment.schema";
import { FileService } from "../file/file.service";
export declare class TrackService {
    private trackModel;
    private albumModel;
    private commentModel;
    private fileService;
    constructor(trackModel: Model<TrackDocument>, albumModel: Model<AlbumDocument>, commentModel: Model<CommentDocument>, fileService: FileService);
    create(dto: TrackDto, picture: any, audio: any): Promise<Track>;
    getAll(count?: number, offset?: number): Promise<Track[]>;
    getOne(id: ObjectId): Promise<Track>;
    update(id: ObjectId, dto: TrackDto): Promise<Track>;
    delete(id: ObjectId): Promise<ObjectId>;
    listen(id: ObjectId): Promise<void>;
    search(query: string): Promise<Track[]>;
}
