import { Controller, Get, Param, Post, Put, Delete, Body, Logger } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { cliente } from '../../entities/nandutiredpago/cliente';

@Controller('cliente')
export class ClienteController {
    private readonly logger = new Logger(ClienteController.name);
    constructor(private service: ClienteService) { }
    @Get()
    index(): Promise<cliente[]> {
        return this.service.findAll();
    }
}
