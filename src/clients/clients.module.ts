import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ClientsService } from './clients.service';
import { ClientsResolver } from './clients.resolver';

@Module({
  imports: [HttpModule],
  providers: [ClientsResolver, ClientsService],
  exports: [ClientsResolver, ClientsService],
})
export class ClientsModule {}
