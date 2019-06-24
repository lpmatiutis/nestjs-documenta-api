import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuteoServicioService } from './ruteo-servicio.service';
import { RuteoServicioController } from './ruteo-servicio.controller';
import { ruteo_servicio } from '../../entities/documentaJP/ruteo_servicio';

@Module({
  imports: [TypeOrmModule.forFeature([ruteo_servicio])],
  providers: [RuteoServicioService],
  controllers: [RuteoServicioController]
})
export class RuteoServicioModule {}
