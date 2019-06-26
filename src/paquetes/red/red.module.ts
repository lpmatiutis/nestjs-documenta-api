import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedService } from './red.service';
import { RedController } from './red.controller';
import { red } from '../../entities/nandutiredpago/red';

@Module({
  imports: [TypeOrmModule.forFeature([red], 'nandutiredpago')],
  providers: [RedService],
  controllers: [RedController]
})
export class RedModule {}
