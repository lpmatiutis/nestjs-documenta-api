import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { RedService } from './red.service';
import { red } from '../../entities/nandutiredpago/red';

@Controller('red')
export class RedController {
    private readonly logger = new Logger(RedController.name);
    constructor(private service: RedService) { }
    @Get()
    index(): Promise<red[]> {
        return this.service.findAll();
    }

    @Get('redActive')
    findAllActive(): Promise<red[]> {
        return this.service.findAllActive();
    }

    @Get(':id')
    findById(@Param() params): Promise<red> {
        return this.service.findById(params.id);
    }
}
