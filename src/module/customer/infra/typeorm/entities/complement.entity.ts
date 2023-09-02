import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Complement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  borough: string;

  @Column()
  residential_number: number;
}
