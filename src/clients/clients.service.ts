import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ClientModel } from './models/client.model';

@Injectable()
export class ClientsService {
  private readonly apiURL;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiURL = this.configService.get<string>('APEX_CLIENT_API_URL', '');
  }

  async findAll(): Promise<ClientModel[]> {
    const response = await this.httpService.axiosRef.get(
      `${this.apiURL}/clients`,
    );
    return response.data || [];
  }

  async findById(id: string): Promise<ClientModel | null> {
    const response = await this.httpService.axiosRef.get(
      `${this.apiURL}/clients`,
      {
        params: { id },
      },
    );
    return response.data[0] || null;
  }
}
