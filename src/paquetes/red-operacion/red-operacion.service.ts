import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { redoperacion } from '../../entities/nandutiredpago/redoperacion';

@Injectable()
export class RedOperacionService {
    constructor(@InjectRepository(redoperacion, 'nandutiredpago') private redOperacionRepository: Repository<redoperacion>) { }

    async findAll(): Promise<redoperacion[]> {
        return await this.redOperacionRepository.find();
    }
}
