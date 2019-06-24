import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { localidad } from '../../entities/documentaJP/localidad';

@Injectable()
export class LocalidadService {
    constructor(@InjectRepository(localidad) private localidadRepository: Repository<localidad>){}

    async findAll(): Promise<localidad[]> {
        return await this.localidadRepository.find();
    }

    async findById(id: string): Promise<localidad> {
        return await this.localidadRepository.findOne(id);
    }

    async create (localidad: localidad): Promise<localidad> {
        return await this.localidadRepository.save(localidad);
    }

    async update(localidad: localidad): Promise<UpdateResult> {
        return await this.localidadRepository.update(localidad.id_localidad, localidad);
    }

    async delete(id): Promise<DeleteResult>{
        return await this.localidadRepository.delete(id);
    }
}
