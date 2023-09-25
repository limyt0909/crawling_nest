import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './utils/swagger';



async function craw() {
  const app = await NestFactory.create(AppModule);
  swagger(app);
  await app.listen(3000);
}
craw()
