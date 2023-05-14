import { string } from '@hapi/joi';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import ReferenceFilterParams from '../../../utils/types/referenceFilterParams';
import { BkpHierarchyFilterTitle } from '../dto/args/bkpHierarchy.param';
import { BkpHierarchyFilterID } from '../dto/args/bkpId.fiolter';
import { BKPFilterParam } from '../dto/bkp.filter';
import { CreateBkpHierarchyInput } from '../dto/create-bkphierarchy.input';
import { BkpDeleteInput } from '../dto/delete.bkp';
import { UpdateBKPLayerTwo } from '../dto/update-bkp-layer-two.input';
import { AddLayerTwoBkpHierarchyInput } from '../dto/update-bkphierarchy.input';
import { bkpLayerTwoModel } from '../model/bkp-layerTwo.model';
import { SearchModel } from '../model/bkp-serch.model';
import { BkpHierarchyModel } from '../model/bkphierarchy.model';
import { BkpHierarchyService } from '../service/bkphierarchy.service';


@Resolver(() => BkpHierarchyModel)
export class BkpHierarchyResolver {
  constructor(
    private readonly bkpHierarchyService: BkpHierarchyService) { }

  @Mutation(() => BkpHierarchyModel)
  async createBkpHierarchy(
    @Args('BkpHierarchyDetails') createBkpHierarchyInput: CreateBkpHierarchyInput,
    @Args("referenceFilter") referenceFilter: ReferenceFilterParams
  ) {
    return await this.bkpHierarchyService.createBkpHierarchy(createBkpHierarchyInput, referenceFilter);
  }

  @Query(() => [BkpHierarchyModel])
  async getBkps(@Args('refFilter') refFilter: ReferenceFilterParams) {
    return await this.bkpHierarchyService.getBkps(refFilter)
  }

  @Query(() => SearchModel)
  async SearchBkpHierarchyObjects(
    @Args('bkptitle', { nullable: true }) bkptitle: BkpHierarchyFilterTitle,
    @Args('bkpid', { nullable: true }) bkpid: BkpHierarchyFilterID) {
    return await this.bkpHierarchyService.searchBkpObjects(bkptitle, bkpid)
  }

  @Query(() => BkpHierarchyModel)
  async BKPHierarchyByID(@Args("bkpFilter") bkpFilter?: BKPFilterParam
  ) {
    const bkp = await this.bkpHierarchyService.getBKPByID(bkpFilter);
    return bkp;
  }

  @Mutation(() => BkpHierarchyModel)
  async deleteBkp(
    @Args('bkpDeleteInput') bkpDeleteInput: BkpDeleteInput,
  ) {
    return this.bkpHierarchyService.deleteBkp(bkpDeleteInput);
  }

  @Mutation(() => [BkpHierarchyModel])
  async createBkpCost(
    @Args('addLayerTwoBkpHierarchy') addLayerTwoBkpHierarchy: AddLayerTwoBkpHierarchyInput,
    @Args('referenceFilter') referenceFilter: ReferenceFilterParams
  ) {
    return this.bkpHierarchyService.createBkpCost(addLayerTwoBkpHierarchy, referenceFilter)
  }

  @Mutation(() => bkpLayerTwoModel)
  async updateBkpCost(
    @Args('updateBKPLayerTwo') updateBKPLayerTwo: UpdateBKPLayerTwo
  ) {
    return this.bkpHierarchyService.updateBkpCost(updateBKPLayerTwo)
  }

}