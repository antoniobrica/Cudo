import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, getMongoRepository, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import * as uuid from 'uuid';
import { Expose, plainToClass } from 'class-transformer';
import ReferanceTypeEntity from './reference-type.entity';
import TaskFileEntity from './task-file.entity';

@Entity({ name: 'milestone' })

export class MileStoneEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @Column({ unique: true })
  milestoneID: string;

  @Expose()
  @Column({ nullable: true })
  milestoneTitle?: string;

  @Expose()
  @Column({ nullable: true })
  dueDate?: Date;

  @Expose()
  @Column({ nullable: true })
  description?: string;

  @Expose()
  @Column({ nullable: true })
  phaseID?: string;

  @Expose()
  @Column({ nullable: true })
  phaseName?: string;

  @Expose()
  @Column({ nullable: true })
  worktypeID?: string;

  @Expose()
  @Column({ nullable: true })
  worktypeName?: string;

  @Expose()
  @Column({ nullable: true })
  status?: string;

  @Expose()
  @CreateDateColumn()
  createdAt?: Date;

  @Expose()
  @Column({ nullable: true })
  createdBy?: string;

  @Expose()
  @UpdateDateColumn()
  updatedAt?: Date;

  @Expose()
  @Column({ nullable: true })
  updatedBy?: string;

  @Expose()
  @Column({ nullable: true })
  isDeleted?: boolean;

  @ManyToOne(() => ReferanceTypeEntity, (reference: ReferanceTypeEntity) => reference.tasks)
  reference: ReferanceTypeEntity;

  @Expose()
  @ManyToMany(type => TaskFileEntity)
  @JoinTable()
  files: TaskFileEntity[];

  constructor(milestoneEntity: Partial<MileStoneEntity>) {
    super();
    if (milestoneEntity) {
      Object.assign(
        this,
        plainToClass(MileStoneEntity, milestoneEntity, {
          excludeExtraneousValues: true
        })
      )
      this.milestoneID = this.milestoneID || uuid.v1();
    }
  }

}
