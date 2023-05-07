import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const crawler = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
crawler();




//https://arta1069.medium.com/nestjs-typeorm-graphql-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-a1fe4e6fc823
//해당문서 참조해서 익숙해지기 - 230507 용택