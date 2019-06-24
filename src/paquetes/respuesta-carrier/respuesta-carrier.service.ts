import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { respuesta_carrier } from '../../entities/documentaJP/respuesta_carrier';

@Injectable()
export class RespuestaCarrierService {

    constructor(@InjectRepository(respuesta_carrier) private respuesta_carrierRepository: Repository<respuesta_carrier>) { }

    async findAll(): Promise<respuesta_carrier[]> {
        return await this.respuesta_carrierRepository.find({
                order: {idFacturador: "DESC"}
            },
        )};

    async findById(id: string): Promise<respuesta_carrier> {
        return await this.respuesta_carrierRepository.findOne(id);
    }

    async create(respuesta_carrier: respuesta_carrier): Promise<respuesta_carrier> {
        return await this.respuesta_carrierRepository.save(respuesta_carrier);
    }

    async update(respuesta_carrier: respuesta_carrier): Promise<UpdateResult> {
        return await this.respuesta_carrierRepository.update(respuesta_carrier.id_respuesta_carrier, respuesta_carrier);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.respuesta_carrierRepository.delete(id);
    }
}
