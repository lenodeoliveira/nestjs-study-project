import { HttpModule } from '@nestjs/axios';
import { StarWarsAPIProviderFaker } from './implementation/star.wars.provider';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [
    {
      provide: 'StarWarsAPIProviderFaker',
      useClass: StarWarsAPIProviderFaker,
    },
  ],
  exports: [
    {
      provide: 'StarWarsAPIProviderFaker',
      useClass: StarWarsAPIProviderFaker,
    },
  ],
})
export class StarWarsAPIFakerModule {}
