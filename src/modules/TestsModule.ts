import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from 'src/gql/mongoose/schemas/Test';
import { TestResolver } from 'src/gql/resolvers/TestResolver';
import { TestsService } from 'src/services/TestsService';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }])],
  providers: [TestsService, TestResolver],
})
export class TestsModule {}
