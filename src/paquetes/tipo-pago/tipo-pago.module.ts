import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPagoService } from './tipo-pago.service';
import { TipoPagoController } from './tipo-pago.controller';
import { tipopago } from '../../entities/nandutiredpago/tipopago';

@Module({
  imports: [TypeOrmModule.forFeature([tipopago], 'nandutiredpago')],
  providers: [TipoPagoService],
  controllers: [TipoPagoController]
})
export class TipoPagoModule {}
