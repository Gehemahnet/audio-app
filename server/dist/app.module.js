"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const track_module_1 = require("./track/track.module");
const mongoose_1 = require("@nestjs/mongoose");
const comment_module_1 = require("./comment/comment.module");
const album_module_1 = require("./album/album.module");
const platform_express_1 = require("@nestjs/platform-express");
const file_module_1 = require("./file/file.module");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            album_module_1.AlbumModule,
            track_module_1.TrackModule,
            comment_module_1.CommentModule,
            file_module_1.FileModule,
            serve_static_1.ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
            mongoose_1.MongooseModule.forRoot("mongodb+srv://user:user@cluster0.nxql3.mongodb.net/?retryWrites=true&w=majority"),
            platform_express_1.MulterModule.register({
                dest: './files',
                limits: {
                    fieldSize: 25 * 1024 * 1024,
                }
            })
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map