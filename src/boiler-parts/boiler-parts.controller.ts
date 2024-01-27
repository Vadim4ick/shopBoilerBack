import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { BoilerPartsService } from './boiler-parts.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
  GetBestselleresResponse,
  GetByNameRequest,
  GetByNameResponse,
  GetNewResponse,
  GetSearchRequest,
  GetSearchResponse,
  PaginateAndFilterResponse,
  findOneResponse,
} from './types';

@Controller('boiler-parts')
export class BoilerPartsController {
  constructor(private readonly boilerPartsService: BoilerPartsService) {}

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @Get()
  @UseGuards(AuthenticatedGuard)
  async paginateAndFilter(@Query() query) {
    return await this.boilerPartsService.paginateAndFilter(query);
  }

  @ApiOkResponse({ type: findOneResponse })
  @Get('find/:id')
  @UseGuards(AuthenticatedGuard)
  async findOne(@Param('id') id: string) {
    return await this.boilerPartsService.findOne(id);
  }

  @ApiOkResponse({ type: GetBestselleresResponse })
  @Get('bestsellers')
  @UseGuards(AuthenticatedGuard)
  async findBestsellers() {
    return await this.boilerPartsService.bestsellers();
  }

  @ApiOkResponse({ type: GetNewResponse })
  @Get('new')
  @UseGuards(AuthenticatedGuard)
  async findNew() {
    return await this.boilerPartsService.new();
  }

  @ApiOkResponse({ type: GetSearchResponse })
  @ApiBody({ type: GetSearchRequest })
  @Post('search')
  @UseGuards(AuthenticatedGuard)
  async findSearch(@Body() { search }: { search: string }) {
    return await this.boilerPartsService.searchByString(search);
  }

  @ApiOkResponse({ type: GetByNameResponse })
  @ApiBody({ type: GetByNameRequest })
  @Post('name')
  @UseGuards(AuthenticatedGuard)
  async findByName(@Body() { name }: { name: string }) {
    return await this.boilerPartsService.findOneByName(name);
  }
}
