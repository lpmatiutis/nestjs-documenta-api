import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedOperacionService } from './red-operacion.service';
import { RedOperacionController } from './red-operacion.controller';
import { redoperacion } from '../../entities/nandutiredpago/redoperacion';

@Module({
  imports: [TypeOrmModule.forFeature([redoperacion], 'nandutiredpago')],
  providers: [RedOperacionService],
  controllers: [RedOperacionController]
})
export class RedOperacionModule {}
