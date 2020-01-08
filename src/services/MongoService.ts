import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

/**
 * MongoDB Service
 * responsible for initializing the MongooseModule in the AppModule like so:
 *
 * imports: [
 *  ...
 *  MongooseModule.forRootAsync({ useClass: MongoService }),
 *  ...
 * ]
 *
 * requires the following (process.env) environment variables:
 *  - MONGO_USERNAME
 *  - MONGO_PASSWORD
 *  - MONGO_HOST
 *  - MONGO_PORT
 *  - MONGO_DATABASE
 */
@Injectable({})
export class MongoService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    const user = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const host = process.env.MONGO_HOST;
    const port = process.env.MONGO_PORT;
    const database = process.env.MONGO_DATABASE;

    return {
      uri: `mongodb://${user}:${password}@${host}:${port}/${database}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}
