import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { VehicleEnum } from './vehicle-type.enum';

@Entity()
@Unique(['plate'])
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  color: string;

  @Column()
  plate: string;

  @Column({
    type: 'enum',
    enum: VehicleEnum,
  })
  type: VehicleEnum;
}
