import {Body, Controller, Get, Post} from '@nestjs/common';
interface Task {
  description: string;
  finished: boolean;
}
@Controller()
export class TasksController {
  tasks: Task[] = [];

  @Post('/api/tasks')
  addTask(@Body() task: Task) {
    this.tasks.push(task);
    console.log(this.tasks);
    return this.getTasks();
  }

  @Get('/api/tasks')
  getTasks(): Task[] {
    return this.tasks;
  }
}
