import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { PortfoliosService } from './portfolios.service';
import { PortfoliosResolver } from './portfolios.resolver';

@Module({
  imports: [HttpModule],
  providers: [PortfoliosResolver, PortfoliosService],
  exports: [PortfoliosResolver, PortfoliosService],
})
export class PortfoliosModule {}
