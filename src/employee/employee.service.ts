import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Promise } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, EmployeeDocument } from './schemas/employee.schemas';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private EmployeeModel: Model<EmployeeDocument>,
  ) {}

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<
    | {
        message: string;
        create: EmployeeDocument;
      }
    | { message: string }
  > {
    // const [checkEmail, checkPhone] = await Promise.all([
    //   this.EmployeeModel.findOne({
    //     email: createEmployeeDto.email,
    //   }),
    //   this.EmployeeModel.findOne({
    //     cellphone: createEmployeeDto.cellphone,
    //   }),
    // ]);
    // if (checkEmail)
    //   throw new HttpException('Email is exist', HttpStatus.BAD_REQUEST);
    // if (checkPhone)
    //   throw new HttpException('Phone is exist', HttpStatus.BAD_REQUEST);

    console.log('createEmployeeDto : ', createEmployeeDto);

    const create = await this.EmployeeModel.create(createEmployeeDto);
    return {
      message: 'Tạo thành công',
      create,
    };
  }

  async findAll(): Promise<EmployeeDocument[]> {
    const employees = await this.EmployeeModel.find().populate('department_id');
    return employees;
  }

  async findOne(id: string): Promise<EmployeeDocument> {
    const updateOne = await this.EmployeeModel.findById(id);
    return updateOne;
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeDocument> {
    const updateDepart = await this.EmployeeModel.findByIdAndUpdate(
      id,
      updateEmployeeDto,
      { new: true },
    );
    return updateDepart;
  }

  async remove(id: string): Promise<EmployeeDocument> {
    const dele = await this.EmployeeModel.findByIdAndDelete(id);
    return dele;
  }
}
