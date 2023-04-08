import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { valid } = req.headers;
    console.log(
      '🚀 ~ file: validate-customer-account.middleware.ts:6 ~ ValidateCustomerAccountMiddleware:',
      ValidateCustomerAccountMiddleware,
    );
    if (valid) {
      next();
    } else {
      res.status(401).send({
        error: 'Account is invalid',
      });
    }
  }
}
