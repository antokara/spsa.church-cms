// TODO: properly extend module
declare const module: any;

import { INestApplication } from '@nestjs/common/interfaces';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/modules/AppModule';

const bootstrap: () => Promise<NestExpressApplication> = async (): Promise<
  NestExpressApplication
> => {
  const app: INestApplication = await NestFactory.create<
    NestExpressApplication
  >(AppModule);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  return app.listen(3000);
};

bootstrap();
