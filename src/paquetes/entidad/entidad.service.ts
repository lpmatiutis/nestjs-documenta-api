import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { entidad} from '../../entities/documentaJP/entidad';

@Injectable()
export class EntidadService {
    constructor(@InjectRepository(entidad) private entidadRepository: Repository<entidad>) { }

    async findAll(): Promise<entidad[]> {
        console.log('esto' + this.getLastId());
        return await this.entidadRepository.find({
                order: {nombre: "DESC"}
            },
        )};

    async findById(id: string): Promise<entidad> {
        return await this.entidadRepository.findOne(id);
    }

    async create(entidad: entidad): Promise<entidad> {
        console.log('entidad aqui: ' + JSON.stringify(entidad));
        return await this.entidadRepository.save(entidad);
    }

    async update(entidad: entidad): Promise<UpdateResult> {
        return await this.entidadRepository.update(entidad.id_entidad, entidad);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.entidadRepository.delete(id);
    }

    async getLastId(){
        const query= this.entidadRepository.createQueryBuilder("entidad")
        .select("MAX(id_entidad)", "max");
        //.from(entidad, "entidad")
        //.groupBy("id_localidad")
        //.getOne();
        return query.getRawOne();
    
}

}
