import {Controller, Get, Post, Delete, Body, Param, Put, UploadedFiles, UseInterceptors, Query} from "@nestjs/common";
import {TrackService} from "./track.service";
import {TrackDto} from "./track.dto";
import {ObjectId} from "mongoose";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {Express} from "express";


@Controller("/tracks")
export class TrackController {
    constructor(private trackService: TrackService) {
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: "picture", maxCount: 1},
        {name: "audio", maxCount: 1}
    ]))
    create(
        @UploadedFiles() files: { picture: Express.Multer.File[], audio: Express.Multer.File[] },
        @Body() dto: TrackDto) {
        const {picture, audio} = files
        return this.trackService.create(dto, picture[0], audio[0])
    }

    @Get()
    getAll(@Query("count") count: number,
           @Query("offset") offset: number) {
        return this.trackService.getAll(count, offset)
    }
    @Get("/search")
    search(@Query("query") query: string) {
        return this.trackService.search(query)
    }
    @Get(":id")
    getOne(@Param("id") id: ObjectId) {
        return this.trackService.getOne(id)
    }
    @Put(":id")
    update(@Param("id") id: ObjectId, dto: TrackDto) {
        return this.trackService.update(id, dto)
    }

    @Delete(":id")
    delete(@Param("id") id: ObjectId) {
        return this.trackService.delete(id)
    }
    @Post("/listen/:id")
    listen(@Param("id") id: ObjectId) {
        return this.trackService.listen(id)
    }
}