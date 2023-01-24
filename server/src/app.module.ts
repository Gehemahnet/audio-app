import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {CommentModule} from "./comment/comment.module";
import {AlbumModule} from "./album/album.module";
import {MulterModule} from "@nestjs/platform-express";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";


@Module({
    imports: [
        AlbumModule,
        TrackModule,
        CommentModule,
        FileModule,
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot("mongodb+srv://user:user@cluster0.nxql3.mongodb.net/?retryWrites=true&w=majority"),
        MulterModule.register({
            dest: './files',
            limits: {
                fieldSize: 25 * 1024 * 1024,
            }
        })
    ]
})
export class AppModule {
}