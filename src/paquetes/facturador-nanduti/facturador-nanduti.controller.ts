import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import {FacturadorNandutiService} from './facturador-nanduti.service';
import { facturador } from '../../entities/nandutiredpago/facturador';

@Controller('facturador-nanduti')
export class FacturadorNandutiController {
    private readonly logger = new Logger(FacturadorNandutiController.name);
    constructor(private service: FacturadorNandutiService) { }
    @Get()
    index(): Promise<facturador[]> {
        return this.service.findAll();
    }
}
