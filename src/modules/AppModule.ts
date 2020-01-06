import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/AppController';
import { VersionController } from 'src/controllers/VersionController';
import { AppService } from 'src/services/AppService';
import { VersionService } from 'src/services/VersionService';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/gql/typeDefs/*.graphql'],
    }),
  ],
  controllers: [AppController, VersionController],
  providers: [AppService, VersionService],
})
export class AppModule {}
