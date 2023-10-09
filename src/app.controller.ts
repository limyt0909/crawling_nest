import { Controller, Get, Param, Post, Query, Req, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller()

@ApiTags('default')

export class AppController {
  constructor(private readonly appService: AppService) {


  }
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: 'An array of files to upload.',
        },
      },
    },
  })
  @ApiParam({
    name: 'idx',
    example: '1',
    description: 'Unique identifier',
    required: true,

  })
  @UseInterceptors(FileInterceptor('files'))
  @Post()
  async uploadFiles(@UploadedFiles() files: any[], @Req() req: any) {
    console.log(files);
    console.log(req.body)

    return 'Files uploaded successfully.';
  }
}