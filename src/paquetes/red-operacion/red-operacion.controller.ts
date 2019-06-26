import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import {RedOperacionService} from './red-operacion.service';
import { redoperacion } from '../../entities/nandutiredpago/redoperacion';


@Controller('red-operacion')
export class RedOperacionController {
    private readonly logger = new Logger(RedOperacionController.name);
    constructor(private service: RedOperacionService) { }
    @Get()
    index(): Promise<redoperacion[]> {
        return this.service.findAll();
    }
}
