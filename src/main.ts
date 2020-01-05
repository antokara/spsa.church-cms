import { INestApplication } from '@nestjs/common/interfaces';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/AppModule';

const bootstrap: () => Promise<NestExpressApplication> = async (): Promise<
  NestExpressApplication
> => {
  const app: INestApplication = await NestFactory.create<
    NestExpressApplication
  >(AppModule);
  return app.listen(3000);
};

bootstrap();
