import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getVersionTwo(): string {
    return 'Hello Version V2';
  }

  getVersionThree(): string {
    return 'Hello Version V3';
  }
}
