import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult, createQueryBuilder } from 'typeorm';
import { red } from '../../entities/nandutiredpago/red';


@Injectable()
export class RedService {
    constructor(@InjectRepository(red, 'nandutiredpago') private redRepository: Repository<red>) { }

    async findAll(): Promise<red[]> {
        return await this.redRepository.find(
            {
                order: { descripcion: "ASC" }
            }
        );
    }

    async findAllActive(): Promise<red[]> {
        return await this.redRepository
        .createQueryBuilder("red")
        .where("red.activo = true")
        .getMany();
    }

    async findById(id: string): Promise<red>{
        return await this.redRepository
        .createQueryBuilder()
        .where("idpersona = :idpersona", {idpersona: id})
        .getOne();
    }
}
