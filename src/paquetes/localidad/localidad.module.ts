import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalidadService } from './localidad.service';
import { LocalidadController } from './localidad.controller';
import { localidad } from '../../entities/documentaJP/localidad';
@Module({
  imports: [TypeOrmModule.forFeature([localidad])],
  providers: [LocalidadService],
  controllers: [LocalidadController]
})
export class LocalidadModule {}
