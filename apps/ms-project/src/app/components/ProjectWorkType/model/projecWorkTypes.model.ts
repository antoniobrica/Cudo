import { Field, ObjectType } from '@nestjs/graphql';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
export class ProjectWorkTypeModel {
  @Field()
  projectWorkTypeID: string;

  @Field()
  workTypeName?: string;

  @Field()
  estimatedCost: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

}


