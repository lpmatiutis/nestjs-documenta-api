import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { persona } from '../../entities/nandutibase/persona';

@Module({
  imports: [TypeOrmModule.forFeature([persona], 'nandutibase')],
  providers: [PersonaService],
  controllers: [PersonaController]
})
export class PersonaModule {}
