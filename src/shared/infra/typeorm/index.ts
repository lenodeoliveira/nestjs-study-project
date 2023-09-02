import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export default {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [
        path.resolve(
          __dirname,
          '..',
          '..',
          '..',
          'module',
          '**',
          'infra',
          'typeorm',
          'entities',
          '*',
        ),
      ],
      synchronize: true,
    };
  },
};
