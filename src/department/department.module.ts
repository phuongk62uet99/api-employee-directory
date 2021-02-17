import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { Department, DepartmentSchema } from './schemas/department.schemas';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService],
  imports: [
    MongooseModule.forFeature([
      { name: Department.name, schema: DepartmentSchema },
    ]),
  ],
})
export class DepartmentModule {}
