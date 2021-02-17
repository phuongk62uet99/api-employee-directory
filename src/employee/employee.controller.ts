import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll() {
    const employees = await this.employeeService.findAll();
    return {
      message: 'All Employees',
      employees,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const dele = await this.employeeService.remove(id);
    return {
      message: 'Xoa thanh cong',
      dele,
    };
  }
}
