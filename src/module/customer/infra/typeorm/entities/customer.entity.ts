import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Complement } from './complement.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  zipcode: string;

  @Column()
  age: number;

  @OneToOne(() => Complement, {
    cascade: true,
  })
  @JoinColumn()
  complement: Complement;
}
