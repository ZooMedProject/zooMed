import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointments } from "./appointments.entity";
import { Species } from "./species.entity";
import { Users } from "./users.entity";

@Entity("animals")
export class Animals {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ type: "date" })
  birthDate: string;

  @Column({ length: 200 })
  breed: string;

  @Column({ default: true })
  isAlive: boolean;

  @ManyToOne(() => Users)
  user: Users;

  @ManyToOne(() => Species, { eager: true })
  @JoinColumn()
  species: Species;

  @OneToMany(() => Appointments, (appointments) => appointments.animals)
  appointments: Appointments[];
}
