import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { VehicleEnum } from './vehicle-type.enum';
import { ParkingCompany } from 'src/modules/parking-company/entity/parking-company.entity';

@Entity()
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

  @ManyToOne(() => ParkingCompany, (parkingCompany) => parkingCompany.vehicles)
  parkingCompany: ParkingCompany;
}
