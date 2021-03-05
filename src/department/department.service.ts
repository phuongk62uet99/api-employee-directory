import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DepartmentDocument, Department } from './schemas/department.schemas';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name)
    private DepartmentModel: Model<DepartmentDocument>,
  ) {}

  async create(
    createDepartmentDto: CreateDepartmentDto,
    res: any,
  ): Promise<DepartmentDocument> {
    const depart = await this.DepartmentModel.create(createDepartmentDto);
    console.log('Check dep : ', createDepartmentDto);
    return depart;
  }

  async findAll(): Promise<DepartmentDocument[]> {
    return await this.DepartmentModel.find();
  }

  async findOne(id: string): Promise<DepartmentDocument | undefined> {
    return await this.DepartmentModel.findById(id);
  }

  async update(
    id: string,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<DepartmentDocument> {
    const updateDepart = await this.DepartmentModel.findByIdAndUpdate(
      id,
      updateDepartmentDto,
      { new: true },
    );
    return updateDepart;
  }

  async remove(id: string): Promise<DepartmentDocument> {
    const dele = await this.DepartmentModel.findByIdAndDelete(id);
    return dele;
  }
}
