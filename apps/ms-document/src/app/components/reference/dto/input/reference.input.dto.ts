import { Field, InputType } from "@nestjs/graphql";
import { ReferenceTypeEnum } from "apps/ms-document/src/app/enum/reference-type.enum";
import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { OneToMany } from "typeorm";

@InputType()
export class ReferenceInputDto {

    @Field({ description: `ReferenceID is for work and building` })
    referenceID: string;

    @Field(type => ReferenceTypeEnum,{ description: `Refrence type Project or WorkType or BuildingType` })
    referenceType: ReferenceTypeEnum;

    @Field({ description: `Reference type name` })
    name: string;

    @Field({ description: `Who Created the Reference` })
    createdBy?: string;

    @Field({ description: `Who Updated the Reference` })
    updatedBy?: string;

    @Field({ description: `Reference Deleted or not` })
    isDeleted?: boolean;

}
