import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { MonedaNandutiService } from './moneda-nanduti.service';
import { moneda } from '../../entities/nandutibase/moneda';

@Controller('moneda-nanduti')
export class MonedaNandutiController {
    private readonly logger = new Logger(MonedaNandutiController.name);
    constructor(private service: MonedaNandutiService) { }
    @Get()
    index(): Promise<moneda[]> {
        return this.service.findAll();
    }
}
