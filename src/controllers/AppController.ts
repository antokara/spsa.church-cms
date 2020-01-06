import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/services/AppService';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): string {
    return this.appService.getHello();
  }
}
