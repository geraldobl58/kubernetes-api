import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getKubernetes(): string {
    return 'Hello Kubernetes!';
  }
}
