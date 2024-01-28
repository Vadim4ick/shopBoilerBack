import { ApiProperty } from '@nestjs/swagger';

const mockDataShoppingCart = {
  partId: 309,
  price: 1524,
  in_stock: 3,
  count: 0,
  totalPrice: 1524,
  id: 1,
  userId: 4,
  boiler_manufacturer: 'Henry',
  parts_manufacturer: 'Sensor',
  image:
    'https://loremflickr.com/640/480/technics?lock=3896818335219712?random=6',
  name: 'Vespillo dignissimos.',
  updatedAt: '2024-01-28T08:53:58.060Z',
  createdAt: '2024-01-28T08:53:58.060Z',
};

class ShoppingCartItem {
  @ApiProperty({ example: mockDataShoppingCart.id })
  id: number;

  @ApiProperty({ example: mockDataShoppingCart.partId })
  partId: number;

  @ApiProperty({ example: mockDataShoppingCart.price })
  price: number;

  @ApiProperty({ example: mockDataShoppingCart.in_stock })
  in_stock: number;

  @ApiProperty({ example: mockDataShoppingCart.count })
  count: number;

  @ApiProperty({ example: mockDataShoppingCart.totalPrice })
  totalPrice: number;

  @ApiProperty({ example: mockDataShoppingCart.userId })
  userId: number;

  @ApiProperty({ example: mockDataShoppingCart.boiler_manufacturer })
  boiler_manufacturer: string;

  @ApiProperty({ example: mockDataShoppingCart.parts_manufacturer })
  parts_manufacturer: string;

  @ApiProperty({ example: mockDataShoppingCart.image })
  image: string;

  @ApiProperty({ example: mockDataShoppingCart.name })
  name: string;

  @ApiProperty({ example: mockDataShoppingCart.updatedAt })
  updatedAt: string;

  @ApiProperty({ example: mockDataShoppingCart.createdAt })
  createdAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}

export class AddToCartResponse extends ShoppingCartItem {}

export class UpdateCountResponse {
  @ApiProperty({ example: mockDataShoppingCart.count })
  count: number;
}
export class UpdateCountRequest {
  @ApiProperty({ example: mockDataShoppingCart.count })
  count: number;
}

export class TotalPriceResponse {
  @ApiProperty({ example: mockDataShoppingCart.totalPrice })
  totalPrice: number;
}
export class TotalPriceRequest {
  @ApiProperty({ example: mockDataShoppingCart.totalPrice })
  totalPrice: number;
}
