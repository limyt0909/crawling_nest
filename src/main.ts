import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const crawler = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
crawler();
