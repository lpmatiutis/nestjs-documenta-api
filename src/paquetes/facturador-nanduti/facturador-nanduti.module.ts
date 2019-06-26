import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturadorNandutiService } from './facturador-nanduti.service';
import { FacturadorNandutiController } from './facturador-nanduti.controller';
import { facturador } from '../../entities/nandutiredpago/facturador';


@Module({
  imports: [TypeOrmModule.forFeature([facturador], 'nandutiredpago')],
  providers: [FacturadorNandutiService],
  controllers: [FacturadorNandutiController]
})
export class FacturadorNandutiModule {}
