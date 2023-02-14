import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './http/controllers/notifications.controller';
import { PrismaService } from './database/prisma/prisma.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "List of notifications!"', () => {
      expect(appController.list()).toBeTruthy();
    });
  });
});
