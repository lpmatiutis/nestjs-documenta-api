import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametroServicioService } from './parametro-servicio.service';
import { ParametroServicioController } from './parametro-servicio.controller';
import { parametro_servicio } from '../../entities/documentaJP/parametro_servicio';

@Module({
  imports: [TypeOrmModule.forFeature([parametro_servicio])],
  providers: [ParametroServicioService],
  controllers: [ParametroServicioController]
})
export class ParametroServicioModule {}
