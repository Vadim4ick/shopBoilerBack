import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
  AddToCartResponse,
  GetAllResponse,
  TotalPriceRequest,
  TotalPriceResponse,
  UpdateCountRequest,
  UpdateCountResponse,
} from './types';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @ApiOkResponse({ type: [GetAllResponse] })
  @Get(':id')
  @UseGuards(AuthenticatedGuard)
  async findAll(@Param('id') userId: string) {
    return this.shoppingCartService.findAll(userId);
  }

  @ApiOkResponse({ type: AddToCartResponse })
  @Post('/add')
  @UseGuards(AuthenticatedGuard)
  async addToCart(@Body() addToCartDto: AddToCartDto) {
    return this.shoppingCartService.add(addToCartDto);
  }

  @ApiOkResponse({ type: UpdateCountResponse })
  @ApiBody({ type: UpdateCountRequest })
  @Patch('/count/:id')
  @UseGuards(AuthenticatedGuard)
  async updateCount(
    @Body() { count }: { count: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCartService.updateCount(count, partId);
  }

  @ApiOkResponse({ type: TotalPriceResponse })
  @ApiBody({ type: TotalPriceRequest })
  @Patch('/total-price/:id')
  @UseGuards(AuthenticatedGuard)
  async updateTotalPrice(
    @Body() { totalPrice }: { totalPrice: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCartService.updateTotalPrice(totalPrice, partId);
  }

  @Delete('/one/:id')
  @UseGuards(AuthenticatedGuard)
  async removeOne(@Param('id') partId: string) {
    return this.shoppingCartService.remove(partId);
  }

  @Delete('/all/:id')
  @UseGuards(AuthenticatedGuard)
  async removeAll(@Param('id') userId: string) {
    return this.shoppingCartService.removeAll(userId);
  }
}
