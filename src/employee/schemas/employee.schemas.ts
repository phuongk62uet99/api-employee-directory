import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Department } from '../../department/schemas/department.schemas';
import * as mongoose from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({ timestamps: true })
export class Employee {
  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop()
  jobtitle: string;

  @Prop()
  cellphone: string;

  @Prop()
  email: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department' })
  department_id: Department;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
