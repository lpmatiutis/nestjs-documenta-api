import { Module } from '@nestjs/common';
import { ServicioCarrierService } from './servicio-carrier.service';
import { ServicioCarrierController } from './servicio-carrier.controller';

@Module({
  providers: [ServicioCarrierService],
  controllers: [ServicioCarrierController]
})
export class ServicioCarrierModule {}
