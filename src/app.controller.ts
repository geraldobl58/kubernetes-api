import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(process.env.APP);
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
