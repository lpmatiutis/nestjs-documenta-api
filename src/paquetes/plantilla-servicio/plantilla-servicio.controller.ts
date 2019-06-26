import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { PlantillaServicioService } from './plantilla-servicio.service';
import { tipoplantillaservicio } from '../../entities/nandutiredpago/tipoplantillaservicio';

@Controller('plantilla-servicio')
export class PlantillaServicioController {
    private readonly logger = new Logger(PlantillaServicioController.name);
    constructor(private service: PlantillaServicioService) { }
    @Get()
    index(): Promise<tipoplantillaservicio[]> {
        return this.service.findAll();
    }
}
