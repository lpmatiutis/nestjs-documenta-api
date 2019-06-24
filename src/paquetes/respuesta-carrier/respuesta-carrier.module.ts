import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespuestaCarrierService } from './respuesta-carrier.service';
import { RespuestaCarrierController } from './respuesta-carrier.controller';
import { respuesta_carrier } from '../../entities/documentaJP/respuesta_carrier';

@Module({
  imports: [TypeOrmModule.forFeature([respuesta_carrier])],
  providers: [RespuestaCarrierService],
  controllers: [RespuestaCarrierController]
})
export class RespuestaCarrierModule {}
