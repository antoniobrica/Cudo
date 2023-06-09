import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { BKP } from '../../../entities/bkp.entity';
import { BkpService } from '../service/bkp.service';
import { CreateBkpInput } from '../dto/input/create-bkp.input';

@Resolver(of => BKP)
export class BkpResolver {
  constructor(
    @Inject(BkpService) private bkpService: BkpService) { }

    // @Mutation(returns => BKP)
    // async createBkp(
    //     @Args('newBkp') createBkpData: CreateBkpInput) {
    //     return this.bkpService.create(createBkpData);
    // }



  @Mutation(returns => BKP)
  async createBkp(
    @Args('bkpTitle') bkpTitle: string,
    @Args('companyId') companyId: number,
    @Args('clientId') clientId: number,
  ): Promise<BKP> {
    return await this.bkpService.create({ bkpTitle, companyId,clientId })
  }

  @Query(returns => BKP)
  async bkp(@Args('id') id: number): Promise<BKP> {
    return await this.bkpService.findOne(id);
  }

  @Query(returns => [BKP])
  async bkps(): Promise<BKP[]> {
    return await this.bkpService.findAll();
  }
}