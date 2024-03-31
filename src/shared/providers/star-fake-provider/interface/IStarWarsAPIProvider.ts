import { Readable } from 'stream';
import { PlanetsModel } from '../model/StarWarsModel';

interface IStarWarsAPIProvider {
  findAll(): Promise<PlanetsModel[]>;
}

export { IStarWarsAPIProvider };
