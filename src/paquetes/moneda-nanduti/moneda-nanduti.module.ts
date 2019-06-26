import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonedaNandutiService } from './moneda-nanduti.service';
import { MonedaNandutiController } from './moneda-nanduti.controller';
import { moneda } from '../../entities/nandutibase/moneda';

@Module({
  imports: [TypeOrmModule.forFeature([moneda], 'nandutibase')],
  providers: [MonedaNandutiService],
  controllers: [MonedaNandutiController]
})
export class MonedaNandutiModule {}
