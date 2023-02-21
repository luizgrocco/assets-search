import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }

  @Get(':searchQuery/:page')
  search(
    @Param('searchQuery') searchQuery: string,
    @Param('page', ParseIntPipe) page: number,
  ) {
    return this.assetsService.search(searchQuery, page);
  }
}
