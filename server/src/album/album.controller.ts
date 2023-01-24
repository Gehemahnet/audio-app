import { Body, Controller, Get, Post, Put, Delete, Param } from "@nestjs/common/decorators";
import { ObjectId } from "mongoose";
import { AlbumDto } from "./album.dto";
import { AlbumService } from "./album.service";

@Controller("/albums")
export class AlbumController {
  constructor(private albumService: AlbumService) {
    }
  @Post()
  create(@Body() dto: AlbumDto) {
    return this.albumService.create(dto)
  }
  @Get()
  getAll() {
    return this.albumService.getAll()
  }
  @Get(":id")
  getOne(@Param("id") id: ObjectId) {
    return this.albumService.getOne(id)
  }
  @Put(":id")
  update(
    @Param("id")id: ObjectId,
    @Body() dto: AlbumDto
  ) {
    return this.albumService.update(id, dto)
  }
  @Delete(":id")
  delete(@Param("id") id: ObjectId) {
    return this.albumService.delete(id)
  }

}