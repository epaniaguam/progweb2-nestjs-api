import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCurso(): string {
    return 'Curso de NestJS 2024 UPDS';
  }
}
