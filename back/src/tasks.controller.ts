import { Controller, Get, Post } from '@nestjs/common';
import Task from "../../common/task"

@Controller()
export class TasksController {
  tasks: Task[] = [];
  constructor() {}

  @Post("/api/tasks")
  addTask(task: Task) {
    this.tasks.push(task)
  }

  @Get("/api/tasks")
  getTasks(): Task[] {
    return this.tasks
  }
}
