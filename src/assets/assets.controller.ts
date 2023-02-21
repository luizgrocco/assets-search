import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  search(
    @Query('searchQuery') searchQuery: string,
    @Query('page', ParseIntPipe) page: number,
  ) {
    return this.assetsService.search(searchQuery, page);
  }
}
