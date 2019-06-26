import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import {PersonaService} from './persona.service';
import { persona } from '../../entities/nandutibase/persona';

@Controller('persona')
export class PersonaController {
    private readonly logger = new Logger(PersonaController.name);
    constructor(private service: PersonaService) { }
    @Get()
    index(): Promise<persona[]> {
        return this.service.findAll();
    }

    @Get('/:id')
    async getId(@Param() params): Promise<persona> {
        return this.service.findById(params.id);
    }
}
