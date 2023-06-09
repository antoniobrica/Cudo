import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CostEntity } from '../../../entities/cost.entity';
import CostFilterParams from '../../../utils/types/costFilterParams';
import ReferenceFilterParams from '../../../utils/types/referenceFilterParams';
import { CreateCostInput } from '../dto/create-cost.input';
import { CostModel } from '../model/cost.model';
import { CostService } from '../service/cost.service';


@Resolver(() => CostModel)
export class CostResolver {
  constructor(
    private readonly costService: CostService) { }

  @Query(() => [CostModel], { nullable: true })
  async costs(@Args("referenceFilter") referenceFilter: ReferenceFilterParams): Promise<CostEntity[]> {
    return await this.costService.findAllCost(referenceFilter)
  }

  @Mutation(() => CostModel)
  async createCost(
    @Args('costDetails') createCostInput: CreateCostInput,
    @Args("referenceFilter") referenceFilter: ReferenceFilterParams
  ) {
    return await this.costService.createCost(createCostInput, referenceFilter);
  }

  @Query(() => [CostModel], { nullable: true })
  async costsByID(@Args("referenceFilter") referenceFilter: ReferenceFilterParams,
    @Args("costFilterParams") costFilterParams: CostFilterParams): Promise<CostEntity[]> {
    return await this.costService.findCostByID(referenceFilter, costFilterParams)
  }

}
