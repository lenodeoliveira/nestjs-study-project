import { Injectable } from '@nestjs/common';
import { IStarWarsAPIProvider } from '../interface/IStarWarsAPIProvider';
import { PlanetsModel } from '../model/StarWarsModel';

@Injectable()
export class StarWarsAPIProviderFaker implements IStarWarsAPIProvider {
  async findAll(): Promise<PlanetsModel[]> {
    try {
      return Promise.resolve(null);
    } catch (err) {
      console.error(err);
    }
  }
}
