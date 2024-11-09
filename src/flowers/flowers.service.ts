import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { FlowersCreateDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService {
    constructor(
        private readonly prisma: PrismaService,
        // private readonly configService: ConfigService,  
      ) {}
      
    findall() {
        // console.log(this.configSevice.get<string>('MODE'));
        // console.log(this.configSevice.get<EnumAppMode>('MODE'));
        
        return this.prisma.flower.findMany()

    }
    create(dto : FlowersCreateDto){
        const price = parseFloat(dto.price.toString());
        return this.prisma.flower.create({
            data : {
                name : dto.name ,
                color: dto.color,
                price: price
            }
        })
    }
}

