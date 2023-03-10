import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AlbumController } from "./album.controller";
import { AlbumService } from "./album.service";
import { Album, AlbumSchema } from "./album.schema";


@Module({
  imports: [MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}])],
  controllers: [AlbumController],
  providers: [AlbumService]

})

export class AlbumModule {

}