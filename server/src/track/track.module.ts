import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {Track, TrackSchema} from "./track.schema";
import { Album, AlbumSchema } from "src/album/album.schema";
import { Comment, CommentSchema } from "src/comment/comment.schema";
import {FileService} from "../file/file.service";


@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Track.name, schema: TrackSchema},
            {name: Album.name, schema: AlbumSchema},
            {name: Comment.name, schema: CommentSchema}
        ])],
    controllers: [TrackController],
    providers: [TrackService, FileService]
})
export class TrackModule {
}