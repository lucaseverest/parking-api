import { Vehicle } from 'src/modules/vehicle/entity/vehicle.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
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

  @OneToMany(() => Vehicle, (vehicle) => vehicle.parkingCompany)
  vehicles: Vehicle[];
}
