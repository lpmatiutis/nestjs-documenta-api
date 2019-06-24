import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { ticket_transaccion } from '../../entities/documentaJP/ticket_transaccion';

@Injectable()
export class TicketTransaccionnService {

    constructor(@InjectRepository(ticket_transaccion) private ticketRepository: Repository<ticket_transaccion>) { }

    async findAll(): Promise<ticket_transaccion[]> {
        return await this.ticketRepository.find({
            take: 10,
        }
        )
    }

    async findById(id: string): Promise<ticket_transaccion> {
        return await this.ticketRepository.createQueryBuilder("ticket_transaccion").
        where("ticket_transaccion.id_transaccion = :id", {id:id})
        .getOne();
    }

}