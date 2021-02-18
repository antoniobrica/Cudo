import { ArgsType, Field } from "@nestjs/graphql";
import ObjectWithIdStringDto from "../../../../utils/types/objectWithIdString.dto";

@ArgsType()
export class GetTasksArgs {
    @Field({ description: `This is for title task title` })
    referenceDto?: ObjectWithIdStringDto;
}
