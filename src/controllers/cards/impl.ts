import { FastifyRequest } from 'fastify';

import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';

@Controller('cards')
export class CardsController {
  @Post()
  createCard(): string {
    return 'This action adds a new card';
  }
  @Get()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  @Redirect('https://nestjs.com', 301)
  findAll(@Req() req: FastifyRequest): string {
    return 'This action returns all cards';
  }
  @Get('ab*')
  findAllWildcards() {
    return 'This action returns wildcards';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  @HttpCode(204)
  getDocs(@Query('version') version: string): object {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
    return {};
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id.toString()} card`;
  }
}
