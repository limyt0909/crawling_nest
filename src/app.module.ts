import { Module } from '@nestjs/common';
import { AppController, scrapController } from './app.controller';
import { AppService, scrapService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, scrapController],
  providers: [AppService, scrapService],
})

export class AppModule { }
