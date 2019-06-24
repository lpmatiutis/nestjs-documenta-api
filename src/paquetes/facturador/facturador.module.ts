import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturadorService } from './facturador.service';
import { FacturadorController } from './facturador.controller';
import { facturador } from '../../entities/documentaJP/facturador';

@Module({
  imports: [TypeOrmModule.forFeature([facturador])],
  providers: [FacturadorService],
  controllers: [FacturadorController]
})
export class FacturadorModule {}
