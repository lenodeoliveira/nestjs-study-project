import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import {
  Subject,
  catchError,
  firstValueFrom,
  map,
  takeUntil,
  interval,
  switchMap,
  take,
} from 'rxjs';
import { IStarWarsAPIProvider } from '../interface/IStarWarsAPIProvider';
import { PlanetsModel } from '../model/StarWarsModel';

@Injectable()
export class StarWarsAPIProviderModule implements IStarWarsAPIProvider {
  private destroy$ = new Subject();
  constructor(
    private starWarsApi: HttpService, //   private readonly logger = new Logger(StarWarsAPIProviderModule.name),
  ) {}

  async findAll(): Promise<PlanetsModel[]> {
    try {
      const data = await firstValueFrom(
        this.starWarsApi
          .get<PlanetsModel[]>('https://swapi.dev/api/planets/')
          .pipe(map((response) => response?.data))
          .pipe(takeUntil(this.destroy$)),
      );

      console.log(data);

      return data['results'];
    } catch (err) {
      console.error(err);
    }
  }
}

// @Injectable()
// export class StarWarsAPIProviderModule
//   extends Readable
//   implements IStarWarsAPIProvider
// {
//   private buffer: Buffer;
//   private isFetching: boolean;
//   constructor(private starWarsApi: HttpService, options: any) {
//     super(options);
//     this.buffer = Buffer.alloc(0);
//     this.isFetching = false;
//   }
//   findAll(): Promise<PlanetsModel[]> {
//     throw new Error('Method not implemented.');
//   }

//   async _read(): Promise<any> {
//     let data = null;
//     if (!this.isFetching) {
//       data = await this.fetchData();
//     }
//     return data;
//   }

//   async fetchData(): Promise<any> {
//     if (this.isFetching) return;
//     try {
//       const response = await firstValueFrom(
//         this.starWarsApi.get<Readable>('https://swapi.dev/api/planets/', {
//           responseType: 'stream',
//         }),
//       );

//       response?.data.on('data', (chunk) => {
//         this.buffer = Buffer.concat([this.buffer, chunk]);
//         this.push(chunk);
//       });

//       response?.data.on('end', () => {
//         this.isFetching = false;
//         this.push(null);
//       });

//       response?.data.on('error', (error) => {
//         this.emit('error', error);
//       });
//     } catch (err) {
//       console.error(err);
//       this.emit('error', err);
//     }
//   }
// }
