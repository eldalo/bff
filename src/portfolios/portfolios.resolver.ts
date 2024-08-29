import { Args, Query, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';

import { PortfoliosService } from './portfolios.service';
import { PortfolioModel } from './models/portfolio.model';

@Resolver('Portfolio')
export class PortfoliosResolver {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @Query(() => PortfolioModel)
  getAllPortfoliosByClientId(@Args('id', { type: () => String }) id: string) {
    return this.portfoliosService.findAllByClientId(id);
  }

  @Query(() => PortfolioModel)
  async getPortfolioById(@Args('id', { type: () => String }) id: string) {
    const portfolio = await this.portfoliosService.findById(id);
    if (!portfolio) {
      throw new NotFoundException(id);
    }
    return portfolio;
  }
}
