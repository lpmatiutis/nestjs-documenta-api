import { Module } from '@nestjs/common';
import { ServicioRcService } from './servicio-rc.service';
import { ServicioRcController } from './servicio-rc.controller';

@Module({
  providers: [ServicioRcService],
  controllers: [ServicioRcController]
})
export class ServicioRcModule {}
