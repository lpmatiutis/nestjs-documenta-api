import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { ruteo_servicio } from '../../entities/documentaJP/ruteo_servicio';

@Injectable()
export class RuteoServicioService {
    constructor(@InjectRepository(ruteo_servicio) private ruteo_servicioRepository: Repository<ruteo_servicio>) { }

    async findAll(): Promise<ruteo_servicio[]> {
        return await this.ruteo_servicioRepository.find({
                order: {idFacturador: "DESC"}
            },
        )};

    async findById(id: string): Promise<ruteo_servicio> {
        return await this.ruteo_servicioRepository.findOne(id);
    }

    async create(ruteo_servicio: ruteo_servicio): Promise<ruteo_servicio> {
        console.log('ruteo_servicio aqui: ' + JSON.stringify(ruteo_servicio));
        return await this.ruteo_servicioRepository.save(ruteo_servicio);
    }

    async update(ruteo_servicio: ruteo_servicio): Promise<ruteo_servicio> {
        return await this.ruteo_servicioRepository.save(ruteo_servicio);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.ruteo_servicioRepository.delete(id);
    }
}

