/// <reference types="multer" />
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
import { TrackService } from "./track.service";
import { TrackDto } from "./track.dto";
import { ObjectId } from "mongoose";
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackService);
    create(files: {
        picture: Express.Multer.File[];
        audio: Express.Multer.File[];
    }, dto: TrackDto): Promise<import("./track.schema").Track>;
    getAll(count: number, offset: number): Promise<import("./track.schema").Track[]>;
    search(query: string): Promise<import("./track.schema").Track[]>;
    getOne(id: ObjectId): Promise<import("./track.schema").Track>;
    update(id: ObjectId, dto: TrackDto): Promise<import("./track.schema").Track>;
    delete(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
    listen(id: ObjectId): Promise<void>;
}
