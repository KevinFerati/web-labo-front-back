import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: TasksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [AppService],
    }).compile();

    appController = app.get<TasksController>(TasksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getTasks()).toBe('Hello World!');
    });
  });
});
