import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/AppController';
import { VersionController } from 'src/controllers/VersionController';
import { AppService } from 'src/services/AppService';
import { VersionService } from 'src/services/VersionService';
import { GraphQLModule } from '@nestjs/graphql';
import { TestResolver } from 'src/gql/resolvers/TestResolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/gql/typeDefs/*.graphql'],
    }),
    TestResolver,
  ],
  controllers: [AppController, VersionController],
  providers: [AppService, VersionService],
})
export class AppModule {}
