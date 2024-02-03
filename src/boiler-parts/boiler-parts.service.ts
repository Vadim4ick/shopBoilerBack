import { Injectable } from '@nestjs/common';
import { BoilerParts } from './boiler-parts.model';
import { InjectModel } from '@nestjs/sequelize';
import { IBoilerPartsFilter, IBoilerPartsQuery } from './types';
const { Op } = require('sequelize');

@Injectable()
export class BoilerPartsService {
  constructor(
    @InjectModel(BoilerParts)
    private boilderPartsModel: typeof BoilerParts,
  ) {}

  async paginateAndFilter(
    query: IBoilerPartsQuery,
  ): Promise<{ count: number; rows: BoilerParts[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    const filter = {} as Partial<IBoilerPartsFilter>;

    if (query.priceFrom && query.priceTo) {
      filter.price = {
        [Op.between]: [+query.priceFrom, +query.priceTo],
      };
    }

    if (query.boiler) {
      filter.boiler_manufacturer = JSON.parse(decodeURIComponent(query.boiler));
    }

    if (query.parts) {
      filter.parts_manufacturer = JSON.parse(decodeURIComponent(query.parts));
    }

    return this.boilderPartsModel.findAndCountAll({
      limit,
      offset,

      where: filter,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilderPartsModel.findAndCountAll({
      where: {
        bestsellers: true,
      },
    });
  }

  async new(): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilderPartsModel.findAndCountAll({
      where: {
        new: true,
      },
    });
  }

  async findOne(id: number | string): Promise<BoilerParts> {
    const task = await this.boilderPartsModel.findOne({
      where: {
        id: id,
      },
    });

    return task;
  }

  async findOneByName(name: string): Promise<BoilerParts> {
    return this.boilderPartsModel.findOne({
      where: {
        name,
      },
    });
  }

  async searchByString(
    string: string,
  ): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilderPartsModel.findAndCountAll({
      limit: 20,

      where: {
        name: {
          [Op.like]: `%${string}%`,
        },
      },
    });
  }
}
