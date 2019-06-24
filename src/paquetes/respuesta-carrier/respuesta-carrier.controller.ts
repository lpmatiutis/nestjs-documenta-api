import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { RespuestaCarrierService } from './respuesta-carrier.service';
import { respuesta_carrier } from '../../entities/documentaJP/respuesta_carrier';

@Controller('respuesta-carrier')
export class RespuestaCarrierController {
    private readonly logger = new Logger(RespuestaCarrierController.name);
    constructor(private service: RespuestaCarrierService) { }
    @Get()
    index(): Promise<respuesta_carrier[]> {
        return this.service.findAll();
    }

    @Get('/:id')
    async getId(@Param() params): Promise<respuesta_carrier> {
        return this.service.findById(params.id);
    }

    @Post('create')
    async create(@Body() respuesta_carrier: respuesta_carrier): Promise<any> {
        return this.service.create(respuesta_carrier);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() respuesta_carrier: respuesta_carrier): Promise<any> {
        respuesta_carrier.id_respuesta_carrier = String(id);
        this.logger.log('Actualizar #' + respuesta_carrier.id_respuesta_carrier);
        return this.service.update(respuesta_carrier);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.service.delete(id);
    }
}
