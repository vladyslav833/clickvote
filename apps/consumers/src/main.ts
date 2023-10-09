/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { BullMqTransport } from '@clickvote/nest-libraries';

async function bootstrap() {
  const strategy = new BullMqTransport();
  // some comment
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      strategy,
    }
  );

  await app.listen();

  // Let's make sure everything runs first!
  await strategy.activate();
}

bootstrap();
