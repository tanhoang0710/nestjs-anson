import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controller/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer-account.middleware';
import { NextFunction, Request, Response } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        ValidateCustomerMiddleware,
        ValidateCustomerAccountMiddleware,
        (req: Request, res: Response, next: NextFunction) => {
          console.log('Last middleware');
          next();
        },
      )
      .forRoutes({
        path: 'customers/search/:id',
        method: RequestMethod.GET,
      });

    // ap dung middleware cho tat ca cac route
    // consumer
    //   .apply(ValidateCustomerMiddleware)
    //   .exclude({
    //     path: 'api/customers/create',
    //     method: RequestMethod.POST,
    //   })
    //   .forRoutes(CustomersController);
  }
}
