import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentController } from './department/department.controller';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [UsersModule, LoginModule, EmployeeModule, DepartmentModule],
  controllers: [
    AppController,
    UsersController,
    LoginController,
    EmployeeController,
    DepartmentController,
  ],
  providers: [AppService],
})
export class AppModule {}
