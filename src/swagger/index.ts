import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'

export const setupSwagger = (app: INestApplication): void => {
  const configOpenApi = new DocumentBuilder()
    .setTitle('Web api example')
    .setDescription('The Web API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addServer('')
    .addServer('/api')
    .build()

  const document = SwaggerModule.createDocument(app, configOpenApi)
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
}