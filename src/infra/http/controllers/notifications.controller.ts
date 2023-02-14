import { Body, Controller, Post } from '@nestjs/common';
//import { Body, Controller, Get, Post } from '@nestjs/common';
//import { PrismaService } from '../../prisma.service';
//import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  //  constructor(private readonly prisma: PrismaService) {}

  // @Get()
  // list() {
  //   return this.prisma.notification.findMany();
  // }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    // await this.prisma.notification.create({
    //   data: {
    //     id: randomUUID(),
    //     content,
    //     category,
    //     recipientId,
    //   },
    // });
    //console.log(body);
  }
}
