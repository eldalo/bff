import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PortfolioModel } from './models/portfolio.model';

@Injectable()
export class PortfoliosService {
  private readonly apiURL;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiURL = this.configService.get<string>('', '');
  }
  async findAllByClientId(id: string): Promise<PortfolioModel[]> {
    const response = await this.httpService.axiosRef.get(
      `${this.apiURL}/portfolios`,
      {
        params: { clientId: id },
      },
    );
    return response.data || [];
  }

  async findById(id: string): Promise<PortfolioModel | null> {
    const response = await this.httpService.axiosRef.get(
      `${this.apiURL}/portfolios`,
      {
        params: { id },
      },
    );
    return response.data[0] || null;
  }
}
