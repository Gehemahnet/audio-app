import {Controller, Get, Post, Delete, Body, Param, Put} from "@nestjs/common";
import {CommentService} from "./comment.service";
import {CommentDto} from "./comment.dto";
import {ObjectId} from "mongoose";


@Controller("/comments")
export class CommentController {
    constructor(private commentService: CommentService) {
    }
    @Get()
    getAll() {
        return this.commentService.getAll()
    }
    @Get(":id")
    getOne(@Param("id") id: ObjectId) {
        return this.commentService.getOne(id)
    }
    @Post()
    create(@Body() dto: CommentDto) {
        return this.commentService.create(dto)
    }
    @Put(":id")
    update(
        @Param("id")id : ObjectId,
        @Body() dto: CommentDto
        ) {
        return this.commentService.update(id, dto)
    }
    @Delete(":id")
    delete(@Param("id") id: ObjectId) {
        return this.commentService.delete(id)
    }
}