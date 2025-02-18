import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(`PROCESS ENV`, process.env.APP);
    console.log(`SECRET ENV`, process.env.API_KEY);
    return this.appService.getHello();
  }

  @Get('/v2')
  getVersionTwo(): string {
    return this.appService.getVersionTwo();
  }

  @Get('/v3')
  getVersionThree(): string {
    return this.appService.getVersionThree();
  }
}
