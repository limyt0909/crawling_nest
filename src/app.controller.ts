import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

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


