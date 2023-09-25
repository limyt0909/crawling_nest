import { Controller, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller()

@ApiTags('default')

export class AppController {
  constructor(private readonly appService: AppService) { }
  @ApiOperation({
    summary: '파일업로드 여러개 테스트',
    description: '파일업로드 여러개 테스트',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: '파일1',
        },
        file2: {
          type: 'string',
          format: 'binary',
          description: '파일2',
        },
      },
    },
  })
  @ApiParam({
    name: 'idx',
    example: '1',
    description: '고유번호 ',
    required: true,
  })
  @UseInterceptors(FilesInterceptor('files'))
  @Post('/:idx')
  async multipleUploaded(@Param("idx") idx: number, @UploadedFiles() file) {
    console.log(file)
    return idx
  }
}


