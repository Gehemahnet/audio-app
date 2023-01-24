/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ObjectId } from "mongoose";
import { AlbumDto } from "./album.dto";
import { AlbumService } from "./album.service";
export declare class AlbumController {
    private albumService;
    constructor(albumService: AlbumService);
    create(dto: AlbumDto): Promise<import("./album.schema").Album>;
    getAll(): Promise<import("./album.schema").Album[]>;
    getOne(id: ObjectId): Promise<import("./album.schema").Album>;
    update(id: ObjectId, dto: AlbumDto): Promise<import("./album.schema").Album>;
    delete(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
}
