import { Controller, Get, Query } from '@nestjs/common';
import { AppService, scrapService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  getHello(@Query() data) {
    console.log("originData : ", data)
    const splitData = data.property_keys.split(',')
    console.log("splitData : ", splitData)
    return data
  }
}

@Controller()
export class scrapController {
  constructor(private readonly scrapService: scrapService) { }
  @Get('/')
  async getScrape(
    @Query() data
  ) {
    return data
  }
}