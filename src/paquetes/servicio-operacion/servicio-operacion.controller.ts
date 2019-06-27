import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { ServicioOperacionService } from './servicio-operacion.service';
import { serviciooperacion } from '../../entities/nandutiredpago/serviciooperacion';
import { servicio } from '../../entities/nandutiredpago/servicio';
import { facturador } from '../../entities/nandutiredpago/facturador';

class ConsultarServicio {
    constructor(
      public servicio: string = '',
      public facturador: string = ''
    ){}
  }

@Controller('servicio-operacion')
export class ServicioOperacionController {
    private readonly logger = new Logger(ServicioOperacionController.name);
    constructor(private service: ServicioOperacionService) { }
    @Get()
    index(): Promise<serviciooperacion[]> {
        return this.service.findAll();
    }

    

    @Get('test')
    findAllBy(/*servicio: servicio*/): Promise<serviciooperacion[]> {
        return this.service.findAllBy(/*servicio*/);
    }

    @Post('join')
    async findAllJoin(@Body() consultarServicio: ConsultarServicio): Promise<serviciooperacion[]> {
        return this.service.findAllJoin(consultarServicio.servicio, consultarServicio.facturador);
    }

    @Post('create')
    async create(@Body() serviciooperacion: serviciooperacion): Promise<any> {
        this.logger.log('servicio 2: ' + JSON.stringify(serviciooperacion));
        return this.service.create(serviciooperacion);
    }

    @Post('java')
    async findJava(@Body() servicio: servicio): Promise<serviciooperacion[]> {
        return this.service.findAllJoinJava(servicio);
    }
}
