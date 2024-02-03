import { ApiProperty } from '@nestjs/swagger';
const { Op } = require('sequelize');

const mockBoilerData = {
  id: 301,
  boiler_manufacturer: 'Northwest',
  price: 1552,
  parts_manufacturer: 'Radain',
  vendor_code: 'ZU60rgdgEkNCRV5',
  name: 'Tabella caritas.',
  description:
    'Ultio itaque antepono amo basium velum convoco vilis attonbitus tutamen.',
  images:
    '["https://loremflickr.com/640/480/technics?lock=5595846548652032?random=11","https://loremflickr.com/640/480/technics?lock=6116044546506752?random=3","https://loremflickr.com/640/480/technics?lock=6713786901725184?random=26","https://loremflickr.com/640/480/technics?lock=5199377536647168?random=29","https://loremflickr.com/640/480/technics?lock=833058490023936?random=30","https://loremflickr.com/640/480/technics?lock=7704238668906496?random=8","https://loremflickr.com/640/480/technics?lock=4890625497366528?random=23"]',
  in_stock: 6,
  bestsellers: false,
  new: true,
  popularity: 18,
  compatibility: 'Triduana cohors summa canonicus nulla tabella commemoro.',
  createdAt: '2024-01-27T20:02:45.535Z',
  updatedAt: '2024-01-27T20:02:45.535Z',
};

class BoilerParts {
  @ApiProperty({ example: mockBoilerData.id })
  id: number;

  @ApiProperty({ example: mockBoilerData.boiler_manufacturer })
  boiler_manufacturer: string; // Assuming it's a string, update the type accordingly

  @ApiProperty({ example: mockBoilerData.price })
  price: number;

  @ApiProperty({ example: mockBoilerData.parts_manufacturer })
  parts_manufacturer: string;

  @ApiProperty({ example: mockBoilerData.vendor_code })
  vendor_code: string;

  @ApiProperty({ example: mockBoilerData.name })
  name: string;

  @ApiProperty({ example: mockBoilerData.description })
  description: string;

  @ApiProperty({ example: mockBoilerData.images })
  images: string[]; // Assuming it's an array of strings, update the type accordingly

  @ApiProperty({ example: mockBoilerData.in_stock })
  in_stock: number;

  @ApiProperty({ example: mockBoilerData.bestsellers })
  bestsellers: boolean; // Assuming it's a boolean, update the type accordingly

  @ApiProperty({ example: mockBoilerData.new })
  new: boolean; // Assuming it's a boolean, update the type accordingly

  @ApiProperty({ example: mockBoilerData.popularity })
  popularity: number;

  @ApiProperty({ example: mockBoilerData.compatibility })
  compatibility: string;

  @ApiProperty({ example: mockBoilerData.createdAt })
  createdAt: Date; // Assuming it's a date, update the type accordingly

  @ApiProperty({ example: mockBoilerData.updatedAt })
  updatedAt: Date; // Assuming it's a date, update the type accordingly
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: BoilerParts;
}

export class Bestsellers extends BoilerParts {
  @ApiProperty({ example: true })
  bestsellers: boolean; // Assuming it's a date, update the type accordingly
}

export class GetBestselleresResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends BoilerParts {
  @ApiProperty({ example: true })
  new: boolean; // Assuming it's a date, update the type accordingly
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: NewParts;
}

export class GetSearchResponse extends PaginateAndFilterResponse {}
export class GetSearchRequest {
  @ApiProperty({ example: 'l' })
  search: string; // Assuming it's a date, update the type accordingl
}

export class GetByNameResponse extends BoilerParts {}
export class GetByNameRequest {
  @ApiProperty({ example: 'Tabella caritas.' })
  name: string; // Assuming it's a date, update the type accordingl
}

export class findOneResponse extends BoilerParts {}

export interface IBoilerPartsQuery {
  limit: string;
  offset: string;
  boiler: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}

export interface IBoilerPartsFilter {
  boiler_manufacturer: string | undefined;
  parts_manufacturer: string | undefined;
  price: {
    // @ts-ignore
    [Op.between]: number[];
  };
}
