import { Controller, Get, Param, Post,Put, Delete, Body, } from '@nestjs/common';
import { TicketTransaccionnService } from './ticket-transaccionn.service';
import { ticket_transaccion } from '../../entities/documentaJP/ticket_transaccion';
@Controller('ticket-transaccionn')
export class TicketTransaccionnController {
    constructor(private service: TicketTransaccionnService) { }
    @Get()
    index(): Promise<ticket_transaccion[]>{
        return this.service.findAll();
    }

    @Get('/:id')
    async getId(@Param() params): Promise<ticket_transaccion>{
        return this.service.findById(params.id);
    }
}
