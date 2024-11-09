import { Body, Controller, Get, Post, Query, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlowersService } from './flowers.service';
// import { AuthGuard } from 'src/conception/guard';
import { LoggingInterceptor } from 'src/conception/interceptor';
import { FlowersCreateDto } from './flowers.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('flowers')
@ApiTags('Flowers')
// @UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  findall(){
    return this.flowersService.findall()
  }


  // @Get('')
  // @UseGuards(AuthGuard)
  // findall(@Query('pageNumber' ,ParseIntPipe) pageNumber : number){
  //   // console.log(pageNumber);
    
    
  //   return this.flowersService.findall()
  // }


  // @UseGuards(AuthGuard)
 
  @Post()
  
  @UsePipes(new ValidationPipe())
  @ApiResponse({status : 201 })
  @ApiBody({
    type : FlowersCreateDto,
    description : 'Json structure for flower object'
  })

  // @UseGuards(AuthGuard)
  create(@Body() dto : FlowersCreateDto){
    return this.flowersService.create(dto)
  }

 
}


