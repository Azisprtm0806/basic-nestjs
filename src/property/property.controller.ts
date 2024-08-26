import { Controller, Get, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'all property';
  }

  @Post()
  create() {
    return 'this create property';
  }
}
