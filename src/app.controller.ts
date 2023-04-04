import { Controller, Get } from '@nestjs/common';
import { AppService, scrapService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class scrapController {
  constructor(private readonly scrapService: scrapService) { }
  @Get('scrap')
  getScrape(): object {
    return this.scrapService.getScrape()
  }
}