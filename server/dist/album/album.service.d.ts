import { Model, ObjectId } from "mongoose";
import { Album, AlbumDocument } from "./album.schema";
import { AlbumDto } from "./album.dto";
export declare class AlbumService {
    private albumModel;
    constructor(albumModel: Model<AlbumDocument>);
    create(dto: AlbumDto): Promise<Album>;
    getAll(): Promise<Album[]>;
    getOne(id: ObjectId): Promise<Album>;
    update(id: ObjectId, dto: AlbumDto): Promise<Album>;
    delete(id: ObjectId): Promise<ObjectId>;
}
