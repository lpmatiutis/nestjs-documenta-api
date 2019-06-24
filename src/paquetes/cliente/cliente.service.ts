import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { cliente } from '../../entities/nandutiredpago/cliente';

@Injectable()
export class ClienteService {
    constructor(@InjectRepository(cliente, 'nandutiredpago') private clienteRepository: Repository<cliente>) { }

    async findAll(): Promise<cliente[]> {
        return await this.clienteRepository.find()};
}
