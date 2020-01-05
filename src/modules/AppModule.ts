import { Module } from '@nestjs/common';
import { AppController } from '../controllers/AppController';
import { VersionController } from '../controllers/VersionController';
import { AppService } from '../services/AppService';
import { VersionService } from '../services/VersionService';

@Module({
  imports: [],
  controllers: [AppController, VersionController],
  providers: [AppService, VersionService],
})
export class AppModule {}
