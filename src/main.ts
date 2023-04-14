import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      name: 'nestjs_session_id',
      secret: 'nest-anson-secret',
      resave: false,
      saveUninitialized: false, // ko luu vao browser khi truoc khi dang nhap
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
