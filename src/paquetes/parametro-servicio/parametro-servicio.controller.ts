import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { ParametroServicioService } from './parametro-servicio.service';
import { parametro_servicio } from '../../entities/documentaJP/parametro_servicio';

@Controller('parametro-servicio')
export class ParametroServicioController {
    private readonly logger = new Logger(ParametroServicioController.name);
    constructor(private service: ParametroServicioService) { }
    @Get()
    index(): Promise<parametro_servicio[]> {
        return this.service.findAll();
    }

    @Get('/:id')
    async getId(@Param() params): Promise<parametro_servicio> {
        return this.service.findById(params.id);
    }

    @Post('create')
    async create(@Body() parametro_servicio: parametro_servicio): Promise<any> {
        return this.service.create(parametro_servicio);
    }

    @Put('/update')
    async update(@Body() parametro_servicio: parametro_servicio): Promise<any> {
        //parametro_servicio.id_entidad = String(id);
        this.logger.log('Actualizar #' + parametro_servicio.idServicio);
        return this.service.update(parametro_servicio);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.service.delete(id);
    }
}
