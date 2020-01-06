import { Controller, Get } from '@nestjs/common';
import { VersionService } from 'src/services/VersionService';

@Controller('version')
export class VersionController {
  constructor(private readonly service: VersionService) {}

  @Get()
  index(): string {
    return this.service.getVersion();
  }
}
