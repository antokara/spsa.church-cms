import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/AppController';
import { VersionController } from 'src/controllers/VersionController';
import { AppService } from 'src/services/AppService';
import { VersionService } from 'src/services/VersionService';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MongoService } from 'src/services/MongoService';
import { TestsModule } from 'src/modules/TestsModule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({ useClass: MongoService }),
    GraphQLModule.forRoot({
      typePaths: ['src/gql/typeDefs/*.graphql'],
    }),
    TestsModule,
  ],
  controllers: [AppController, VersionController],
  providers: [AppService, VersionService],
})
export class AppModule {}
