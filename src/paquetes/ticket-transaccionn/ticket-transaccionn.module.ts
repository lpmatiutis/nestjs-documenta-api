import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketTransaccionnService } from './ticket-transaccionn.service';
import { TicketTransaccionnController } from './ticket-transaccionn.controller';
import { ticket_transaccion } from '../../entities/documentaJP/ticket_transaccion';
@Module({
  imports: [TypeOrmModule.forFeature([ticket_transaccion])],
  providers: [TicketTransaccionnService],
  controllers: [TicketTransaccionnController]
})
export class TicketTransaccionnModule {}
