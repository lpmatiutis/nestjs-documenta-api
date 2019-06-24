import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { cliente } from '../../entities/nandutiredpago/cliente';

@Module({
  imports: [TypeOrmModule.forFeature([cliente], 'nandutiredpago')],
  providers: [ClienteService],
  controllers: [ClienteController]
})
export class ClienteModule {}
