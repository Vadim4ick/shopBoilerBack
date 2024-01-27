import { Injectable } from '@nestjs/common';
import { BoilerParts } from './boiler-parts.model';
import { InjectModel } from '@nestjs/sequelize';
import { IBoilerPartsQuery } from './types';
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

    return this.boilderPartsModel.findAndCountAll({
      limit,
      offset,
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
