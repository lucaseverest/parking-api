import { ParkingRegisters } from 'src/modules/parking-registers/entity/parking-registers.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['cnpj'])
export class ParkingCompany {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  cnpj: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  carSpacesQuantity: number;

  @Column()
  motorcycleSpacesQuantity: number;

  // relacionamento com parking registers
  @OneToMany(
    () => ParkingRegisters,
    (parkingRegisters) => parkingRegisters.company,
  )
  parkingRegisters: ParkingRegisters[];
}
