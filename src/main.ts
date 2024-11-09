import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app=  await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')

    const config = new DocumentBuilder()
    .setTitle('Flowers Api')
    .setDescription('The flowers API description')
    .setVersion('1.0')
    .addTag('flowers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(4200)
  console.log('HTTP app is listening port 4200');

  const microServiceApp = await NestFactory.createMicroservice<MicroserviceOptions>
  (AppModule , {
    transport : Transport.TCP ,
    options : {
      host : 'localhost',
      port : 8877
    }

  });

  await microServiceApp.listen();
  console.log('MicroService is listening port 8778');
  
}
bootstrap();
