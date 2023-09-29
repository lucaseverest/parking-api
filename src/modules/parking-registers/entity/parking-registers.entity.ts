import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ParkingRegisterEnum } from './parking-registers.enum';
import { ParkingCompany } from 'src/modules/parking-company/entity/parking-company.entity';
import { Vehicle } from 'src/modules/vehicle/entity/vehicle.entity';

@Entity()
export class ParkingRegisters {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ParkingRegisterEnum,
  })
  type: ParkingRegisterEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => ParkingCompany, (company) => company.parkingRegisters)
  @JoinColumn({ name: 'companyId' })
  company: ParkingCompany;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.parkingRegisters)
  @JoinColumn({ name: 'vehicleId' })
  vehicle: Vehicle;
}
