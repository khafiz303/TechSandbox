import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform<string , number>{
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value , 10)
        console.log('pipe');
        
        if(isNaN(val)){
            throw new BadRequestException('Validation failed')
        }
        return val
    }
}