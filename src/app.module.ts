import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, scrapService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
