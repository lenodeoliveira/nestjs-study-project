import { HttpModule } from '@nestjs/axios';
import { StarWarsAPIProviderModule } from './implementation/star.wars.provider';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [
    {
      provide: 'StarWarsAPIProviderModule',
      useClass: StarWarsAPIProviderModule,
    },
  ],
  exports: [
    {
      provide: 'StarWarsAPIProviderModule',
      useClass: StarWarsAPIProviderModule,
    },
  ],
})
export class StarWarsAPIModule {}
