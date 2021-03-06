import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntidadModule } from './paquetes/entidad/entidad.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketTransaccionnModule } from './paquetes/ticket-transaccionn/ticket-transaccionn.module';
import { LocalidadModule } from './paquetes/localidad/localidad.module';
import { FacturadorModule } from './paquetes/facturador/facturador.module';
import { ParametroServicioModule } from './paquetes/parametro-servicio/parametro-servicio.module';
import { RespuestaCarrierModule } from './paquetes/respuesta-carrier/respuesta-carrier.module';
import { RuteoServicioModule } from './paquetes/ruteo-servicio/ruteo-servicio.module';
import { ServicioCarrierModule } from './paquetes/servicio-carrier/servicio-carrier.module';
import { ServicioRcModule } from './paquetes/servicio-rc/servicio-rc.module';
import { TipoOperacionModule } from './paquetes/tipo-operacion/tipo-operacion.module';
import { ClienteModule } from './paquetes/cliente/cliente.module';
import { PlantillaServicioModule } from './paquetes/plantilla-servicio/plantilla-servicio.module';
import { RedModule } from './paquetes/red/red.module';
import { TipoPagoModule } from './paquetes/tipo-pago/tipo-pago.module';
import { MonedaNandutiModule } from './paquetes/moneda-nanduti/moneda-nanduti.module';
import { ServicioOperacionModule } from './paquetes/servicio-operacion/servicio-operacion.module';
import { RedOperacionModule } from './paquetes/red-operacion/red-operacion.module';
import { PersonaModule } from './paquetes/persona/persona.module';
import { ServicioModule } from './paquetes/servicio/servicio.module';
import { FacturadorNandutiModule } from './paquetes/facturador-nanduti/facturador-nanduti.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        name: 'default',
        type: 'postgres',
        host: '192.168.30.80',
        port: 5432,
        username: 'redcobrosjp',
        password: 'redcobrosjp',
        database: 'documenta',
        schema: 'redcobrosjp',
        synchronize: false,
        logging: false,
        entities: [
            'src/entities/documentaJP/**/*.ts'

        ],
        cli: {
            entitiesDir: 'src/entities',
            migrationsDir: 'src/migration',
            subscribersDir: 'src/subscriber'
        },
    }),
    TypeOrmModule.forRoot(
      {
        name: 'nandutiredpago',
        type: 'postgres',
        host: '192.168.30.80',
        port: 5432,
        username: 'postgres',
        password: 'sql$',
        database: 'nanduti',
        schema: 'reddepago',
        synchronize: false,
        logging: false,
        entities: [
            'src/entities/nandutiredpago/**/*.ts'
        ],
        cli: {
            entitiesDir: 'src/entities',
            migrationsDir: 'src/migration',
            subscribersDir: 'src/subscriber'
        }
    }
    ),
    TypeOrmModule.forRoot(
      {
        name: 'nandutibase',
        type: 'postgres',
        host: '192.168.30.80',
        port: 5432,
        username: 'postgres',
        password: 'sql$',
        database: 'nanduti',
        schema: 'base',
        synchronize: false,
        logging: false,
        entities: [
            'src/entities/nandutibase/**/*.ts'

        ],
        cli: {
            entitiesDir: 'src/entities',
            migrationsDir: 'src/migration',
            subscribersDir: 'src/subscriber'
        },
    }),
    EntidadModule,
    TicketTransaccionnModule,
    LocalidadModule,
    FacturadorModule,
    ParametroServicioModule,
    RespuestaCarrierModule,
    RuteoServicioModule,
    ServicioCarrierModule,
    ServicioRcModule,
    TipoOperacionModule,
    ClienteModule,
    PlantillaServicioModule,
    RedModule,
    TipoPagoModule,
    MonedaNandutiModule,
    ServicioOperacionModule,
    RedOperacionModule,
    PersonaModule,
    ServicioModule,
    FacturadorNandutiModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
