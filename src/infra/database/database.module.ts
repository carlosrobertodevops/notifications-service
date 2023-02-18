import { Module } from '@nestjs/common';
import { PrismaService } from './typeorm/prisma/prisma.service';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaNotificationsRepository } from './typeorm/prisma/repositories/prisma-notifications-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
