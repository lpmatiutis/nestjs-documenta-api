import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';
import { servicio } from '../../entities/nandutiredpago/servicio';

@Module({
  imports: [TypeOrmModule.forFeature([servicio], 'nandutiredpago')],
  providers: [ServicioService],
  controllers: [ServicioController]
})
export class ServicioModule {}
