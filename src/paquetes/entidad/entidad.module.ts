import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntidadService } from './entidad.service';
import { EntidadController } from './entidad.controller';
import { entidad} from '../../entities/documentaJP/entidad';

@Module({
  imports: [TypeOrmModule.forFeature([entidad])],
  providers: [EntidadService],
  controllers: [EntidadController]
})
export class EntidadModule {}
