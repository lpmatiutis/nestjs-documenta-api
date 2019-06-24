import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { FacturadorService } from './facturador.service';
import { facturador } from '../../entities/documentaJP/facturador';

@Controller('facturador')
export class FacturadorController {
    private readonly logger = new Logger(FacturadorController.name);
    constructor(private service: FacturadorService) { }

    @Get()
    index(): Promise<facturador[]> {
        return this.service.findAll();
    }

    @Get('facturadorLast')
    async getLastId(): Promise<any> {
        return this.service.getLastId();
    }

    @Get('/:id')
    async getId(@Param() params): Promise<facturador> {
        return this.service.findById(params.id);
    }

    @Post('create')
    async create(@Body() facturador: facturador): Promise<any> {
        this.logger.log(JSON.stringify(facturador));
        return this.service.create(facturador);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() facturador: facturador): Promise<any> {
        facturador.id_facturador = String(id);
        this.logger.log('Actualizar #' + facturador.id_facturador);
        return this.service.update(facturador);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.service.delete(id);
    }
}
