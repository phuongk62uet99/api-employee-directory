import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee, EmployeeSchema } from './schemas/employee.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  exports: [EmployeeService, EmployeeModule],
})
export class EmployeeModule {}
