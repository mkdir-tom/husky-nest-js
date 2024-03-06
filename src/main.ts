import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { setupSwagger } from "./swagger"
import { AppModule } from './modules/app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const port = config.get('port')
  const swaggerEnable = config.get('swaggerEnable')

  if (swaggerEnable === '1') {
    setupSwagger(app)
  }

  await app.listen(port)
}

bootstrap()
