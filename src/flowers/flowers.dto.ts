import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class FlowersCreateDto {

    @IsString({
        message : 'имя не строка'
    })
    @ApiProperty({
        example : 'Max',
        required : true
    })
    name : string

    @IsString()
    @ApiProperty({
        example : 'Red',
        required : true
    })
    color : string

    @IsString()
    @ApiProperty({
        example : '3',
        required : true
    })
    price : string

}

export type TFlowersUpdateDto = Partial<FlowersCreateDto>
// при обновление делать поля не обязательными на основе создание

