import { Controller, Get, Param } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }

  @Get(':searchQuery')
  search(@Param('searchQuery') searchQuery: string) {
    return this.assetsService.search(searchQuery);
  }
}
