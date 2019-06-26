import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { servicio } from '../../entities/nandutiredpago/servicio';

@Controller('servicio')
export class ServicioController {
    private readonly logger = new Logger(ServicioController.name);
    constructor(private service: ServicioService) { }
    @Get()
    index(): Promise<servicio[]> {
        return this.service.findAll();
    }

    @Get('/:id')
    async getId(@Param() params): Promise<servicio> {
        return this.service.findById(params.id);
    }
}
