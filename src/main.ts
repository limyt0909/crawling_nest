import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//기존에 사용하던 함수형 문법
// const crawler = async () => {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(8080);
// }
// crawler();

async function craw() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
craw()
//https://arta1069.medium.com/nestjs-typeorm-graphql-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-a1fe4e6fc823
//해당문서 참조해서 익숙해지기 스터디 시작- 230523  용택


// Controllers: Define routes and handle requests.
// Providers: Manage application logic and data.
// Modules: Organize your application into reusable modules.
// Dependency Injection: Easily manage and inject dependencies.
// Middleware: Apply cross-cutting concerns to requests.
// Pipes: Validate and transform request data.
// Guards: Implement authorization and authentication logic.
// Interceptors: Modify incoming/outgoing data in the request/response pipeline.