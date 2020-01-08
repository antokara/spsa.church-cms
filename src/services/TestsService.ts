import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITest } from 'src/gql/mongoose/schemas/Test';

@Injectable()
export class TestsService {
  constructor(@InjectModel('Test') private readonly testModel: Model<ITest>) {}

  async findAll(): Promise<ITest[]> {
    return await this.testModel.find().exec();
  }
}
