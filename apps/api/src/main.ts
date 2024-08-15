import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('AutoSpace API | Seven')
    .setDescription(
      `The Autospace API.
      <h1>Looking for the Graphql API?</h1>
      Go to <a href="/graphql" target="_blank">/graphql</a>.
      Or, You may also need to use the <a target="_blank" href="https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:3000/graphql">
      Apollo Explorer<a/> for a greater experience.`,
    )
    .setVersion('0.1')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)

  await app.listen(3000)
}
bootstrap()
