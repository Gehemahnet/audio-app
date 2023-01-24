import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {CommentController} from "./comment.controller";
import {CommentService} from "./comment.service";
import {Comment, CommentSchema} from "./comment.schema";
import { Track, TrackSchema } from "src/track/track.schema";


@Module({
    imports: [
        MongooseModule.forFeature([
        {name: Comment.name, schema: CommentSchema}, 
        {name: Track.name, schema: TrackSchema}
    ])],
    controllers: [CommentController],
    providers: [CommentService]
})
export class CommentModule {
}