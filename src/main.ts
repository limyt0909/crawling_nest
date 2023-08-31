import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'stream/consumers';

//기존에 사용하던 함수형 문법
// const crawler = async () => {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(8080);
// }
// crawler();

async function craw() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));
}
craw()
