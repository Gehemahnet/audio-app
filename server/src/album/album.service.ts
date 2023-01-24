import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Album, AlbumDocument } from "./album.schema";
import { AlbumDto } from "./album.dto";

@Injectable()
export class AlbumService {
  constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>) {
  }
  async create(dto: AlbumDto): Promise<Album>{
    try {
      const album = new this.albumModel(dto)
      return album.save()
    } catch(e) {
      console.log(e.message)
    }
  }
  async getAll(): Promise<Album[]> {
    return await this.albumModel.find()
  }
  async getOne(id: ObjectId): Promise<Album> {
    return await (await this.albumModel.findById(id)).populate("tracks")
  }
  async update(id: ObjectId, dto: AlbumDto): Promise<Album> {
    return await this.albumModel.findByIdAndUpdate(id, dto)
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const album = await this.albumModel.findByIdAndDelete(id)
    return album.id
  }
}