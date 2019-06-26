import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantillaServicioService } from './plantilla-servicio.service';
import { PlantillaServicioController } from './plantilla-servicio.controller';
import { tipoplantillaservicio } from '../../entities/nandutiredpago/tipoplantillaservicio';

@Module({
  imports: [TypeOrmModule.forFeature([tipoplantillaservicio], 'nandutiredpago')],
  providers: [PlantillaServicioService],
  controllers: [PlantillaServicioController]
})
export class PlantillaServicioModule {}
