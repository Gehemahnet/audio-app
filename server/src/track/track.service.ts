import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Track, TrackDocument} from "./track.schema";
import {TrackDto} from "./track.dto";
import {Album, AlbumDocument} from "../album/album.schema"
import {Comment, CommentDocument} from "src/comment/comment.schema";
import {FileService, FileType} from "../file/file.service";

@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        private fileService: FileService) {
    }

    async create(dto: TrackDto, picture, audio): Promise<Track> {
        try {
            const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
            const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
            const track = new this.trackModel({...dto, listens: 0, picture: picturePath, audio: audioPath})
            if (dto.album) {
                const album = await this.albumModel.findById(dto.album)
                album.tracks.push(track)
                await album.save()
            }
            await track.save()
            return track
        } catch (e) {
            return e.message
        }
    }

    async getAll(count = 10, offset = 0): Promise<Track[]> {
        try {
            return await this.trackModel.find().skip(offset).limit(count);
        } catch (e) {
            return e.message
        }
    }

    async getOne(id: ObjectId): Promise<Track> {
        try {
            const track = await this.trackModel.findById(id)
                .populate("comments")
                .populate("album")
            return track
        } catch (e) {
            return e.message
        }


    }

    async update(id: ObjectId, dto: TrackDto): Promise<Track> {
        try {
            console.log(dto)
            if (dto.album) {
                const track = await this.trackModel.findById(id)
                const album = await this.albumModel.findById(dto.album)
                album.tracks.push(track)
                await album.save()
            }
            return await this.trackModel.findByIdAndUpdate(id, dto)
        } catch (e) {
            return e.message
        }
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        try {
            const track = await this.trackModel.findById(id)
            if (track.comments.length > 0) {
                track.comments.map(async comment => await this.commentModel.findOneAndDelete(comment))
            }
            return await this.trackModel.findByIdAndDelete(id)
        } catch (e) {
            return e.message
        }

    }

    async listen(id: ObjectId) {
        const track = await this.trackModel.findById(id)
        track.listens++
        track.save()
    }

    async search(query: string): Promise<Track[]> {
        const tracks = await this.trackModel.find({
            name: {$regex: new RegExp(query, 'i')}
        })
        return tracks
    }
}