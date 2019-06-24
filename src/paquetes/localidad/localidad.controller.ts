import { Controller, Get, Param, Post,Put, Delete, Body, Logger, } from '@nestjs/common';
import { LocalidadService } from './localidad.service';
import { localidad } from '../../entities/documentaJP/localidad';

@Controller('localidad')
export class LocalidadController {
    constructor(private service: LocalidadService){}

    @Get()
    index(): Promise<localidad[]> {
        return this.service.findAll();
    }

    @Get('/:id')
    async getId(@Param() params): Promise<localidad>{
        return this.service.findById(params.id);
    }

    @Post()
    async create(@Body() entidad: localidad): Promise<any>{
        return this.service.create(entidad);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() localidad: localidad): Promise<any>{
        ;localidad.id_localidad = String(id);
        console.log('Actualizar #' + localidad.id_localidad);
        return this.service.update(localidad);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.service.delete(id);
    }
}
