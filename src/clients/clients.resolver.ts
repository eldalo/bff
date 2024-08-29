import { Args, Query, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';

import { ClientsService } from './clients.service';
import { ClientModel } from './models/client.model';

@Resolver('Client')
export class ClientsResolver {
  constructor(private readonly clientsService: ClientsService) {}

  @Query(() => ClientModel)
  getAllClients() {
    return this.clientsService.findAll();
  }

  @Query(() => ClientModel)
  async getClientById(@Args('id', { type: () => String }) id: string) {
    const client = await this.clientsService.findById(id);
    if (!client) {
      throw new NotFoundException(id);
    }
    return client;
  }
}
