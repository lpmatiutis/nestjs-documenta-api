import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { EntidadService } from './entidad.service';
import { entidad } from '../../entities/documentaJP/entidad';
// import { configure, getLogger } from 'log4js';
// configure('./log.txt');
// const logger = getLogger();
// logger.level = 'debug';
// logger.debug("Algun mensnaje");
// configure({
//     appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
//     categories: { default: { appenders: ['cheese'], level: 'error' } }
// });

@Controller('entidad')
export class EntidadController {
    private readonly logger = new Logger(EntidadController.name);
    constructor(private service: EntidadService) { }
    @Get()
    index(): Promise<entidad[]> {
        return this.service.findAll();
    }

    @Get('entidadLast')
    async getLastId(): Promise<any> {
        return this.service.getLastId();
    }

    @Get('/:id')
    async getId(@Param() params): Promise<entidad> {
        return this.service.findById(params.id);
    }

    @Post('create')
    async create(@Body() entidad: entidad): Promise<any> {
        this.logger.log('entidad 2: ' + JSON.stringify(entidad));
        return this.service.create(entidad);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() entidad: entidad): Promise<any> {
        entidad.id_entidad = String(id);
        this.logger.log('Actualizar #' + entidad.id_entidad);
        return this.service.update(entidad);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.service.delete(id);
    }
}
