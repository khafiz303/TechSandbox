import { Resolver ,Query } from '@nestjs/graphql';
import { FlowersGraphqlService } from './flowers-graphql.service';
import { FlowersService } from '../flowers/flowers.service';
import { FlowerModel } from './flower.model';

@Resolver()
export class FlowersGraphqlResolver {
  constructor(private readonly flowersService: FlowersService ) {}

  @Query(()=> [FlowerModel] , {name : 'flowers'})
  findAll(){
    return this.flowersService.findall()

  }
}

