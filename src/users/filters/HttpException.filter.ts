import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(
      '🚀 ~ file: HttpException.filter.ts:5 ~ HttpExceptionFilter ~ exception:',
      exception.getResponse(),
    );
    console.log(
      '🚀 ~ file: HttpException.filter.ts:5 ~ HttpExceptionFilter ~ exception:',
      exception.getStatus(),
    );

    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    response.send({
      status: exception.getStatus(),
      message: exception.getResponse(),
    });
  }
}
