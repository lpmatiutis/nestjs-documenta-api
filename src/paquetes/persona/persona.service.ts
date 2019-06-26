import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { persona } from '../../entities/nandutibase/persona';

@Injectable()
export class PersonaService {
    constructor(@InjectRepository(persona, 'nandutibase') private personaRepository: Repository<persona>) { }

    async findAll(): Promise<persona[]> {
        return await this.personaRepository.find();
    }

    async findById(id: string): Promise<persona> {
        return await this.personaRepository.findOne(id);
    }
}
