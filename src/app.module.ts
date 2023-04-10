import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      password: '123456',
      username: 'root',
      database: 'nestjs_anson',
      port: 3306,
      synchronize: true,
      entities,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
