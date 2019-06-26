import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioOperacionService } from './servicio-operacion.service';
import { ServicioOperacionController } from './servicio-operacion.controller';
import { serviciooperacion } from '../../entities/nandutiredpago/serviciooperacion';

@Module({
  imports: [TypeOrmModule.forFeature([serviciooperacion], 'nandutiredpago')],
  providers: [ServicioOperacionService],
  controllers: [ServicioOperacionController]
})
export class ServicioOperacionModule {}
