import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

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
