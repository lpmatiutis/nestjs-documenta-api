import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { RuteoServicioService } from './ruteo-servicio.service';
import { ruteo_servicio } from '../../entities/documentaJP/ruteo_servicio';

@Controller('ruteo-servicio')
export class RuteoServicioController {
    private readonly logger = new Logger(RuteoServicioController.name);
    constructor(private service: RuteoServicioService) { }
    @Get()
    index(): Promise<ruteo_servicio[]> {
        return this.service.findAll();
    }

    @Get('/:id')
    async getId(@Param() params): Promise<ruteo_servicio> {
        return this.service.findById(params.id);
    }

    @Post('create')
    async create(@Body() ruteo_servicio: ruteo_servicio): Promise<any> {
        this.logger.log('ruteo_servicio 2: ' + JSON.stringify(ruteo_servicio));
        return this.service.create(ruteo_servicio);
    }

    @Put('update')
    async update(@Body() ruteo_servicio: ruteo_servicio): Promise<any> {
        this.logger.log('Actualizar #' + ruteo_servicio.idFacturador);
        return this.service.update(ruteo_servicio);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.service.delete(id);
    }
}
