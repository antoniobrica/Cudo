import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsOptional } from 'class-validator';
import { Expose, plainToClass } from 'class-transformer';
import * as uuid from 'uuid';
import ReferanceTypeEntity from './reference-type.entity';

@Entity({ name: 'buildingType' })

export class BuildingTypeEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @Column({ unique: true })
  buildingTypeID: string;

  @Expose()
  @Column()
  name: string;

  @Expose()
  @CreateDateColumn()
  createdAt: Date

  @Expose()
  @UpdateDateColumn()
  updatedAt: Date

  @Expose()
  @ManyToOne(() => ReferanceTypeEntity, (reference: ReferanceTypeEntity) => reference.buildingTypes)
  reference: ReferanceTypeEntity;


  constructor(buildingTypeEntity: Partial<BuildingTypeEntity>) {
    super();
    if (buildingTypeEntity) {
      Object.assign(
        this,
        plainToClass(BuildingTypeEntity, buildingTypeEntity, {
          excludeExtraneousValues: true
        })
      )
      // this.createdAt = this.createdAt || new Date(new Date().toUTCString());
      // this.updatedAt = new Date(new Date().toUTCString());
    }
  }
}
