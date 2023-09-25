import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, scrapService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './interceptors/response.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
  ],
})

export class AppModule { }
