import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

export const TypeOrmSQLITETestingModule = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [
      path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        'modules',
        '**',
        'infra',
        'typeorm',
        'entities',
        '*',
      ),
    ],
    synchronize: true,
  }),
];
