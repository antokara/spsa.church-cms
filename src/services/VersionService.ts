import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionService {
  getVersion(): string {
    return '1.0.0';
  }
}
