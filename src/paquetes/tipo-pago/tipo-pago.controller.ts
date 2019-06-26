import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { TipoPagoService } from './tipo-pago.service';
import { tipopago } from '../../entities/nandutiredpago/tipopago';

@Controller('tipo-pago')
export class TipoPagoController {
    private readonly logger = new Logger(TipoPagoController.name);
    constructor(private service: TipoPagoService) { }
    @Get()
    index(): Promise<tipopago[]> {
        return this.service.findAll();
    }

    @Get('/:id')
    findById(@Param() params): Promise<tipopago> {
        return this.service.findById(params.id);
    }
}
