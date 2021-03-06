import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../model/customer.entity';
import { Customer } from '../model/customer.interface';


@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
      ) {}

      create(details: Customer): Promise<CustomerEntity>{
          return this.customerRepository.save(details);
      }
    
      findAll(): Promise<CustomerEntity[]> {
        return this.customerRepository.find();
      }
    
      findOne(id: string): Promise<CustomerEntity> {
        return this.customerRepository.findOne(id);
      }
}
