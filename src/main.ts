import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      transform: true,
      validateCustomDecorators: true,
      skipMissingProperties : false,
      skipNullProperties : false,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );
  const config = new DocumentBuilder()
  .setTitle('Dokumentasi API')
  .setDescription('Dokumentasi API aplikasi')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc-api', app, document);
  await app.listen(3000);
}
bootstrap();
