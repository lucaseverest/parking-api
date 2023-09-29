import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';
import { VehicleEnum } from './vehicle-type.enum';
import { ParkingRegisters } from 'src/modules/parking-registers/entity/parking-registers.entity';

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

  @OneToMany(
    () => ParkingRegisters,
    (parkingRegisters) => parkingRegisters.vehicle,
  )
  parkingRegisters: ParkingRegisters[];
}
