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
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    console.log('createEmployeeDto : ', createEmployeeDto);
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  async findAll() {
    const employees = await this.employeeService.findAll();
    return employees;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: any,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const updateEpl = await this.employeeService.update(id, updateEmployeeDto);
    return {
      message: 'Cap nhat thanh cong',
      updateEpl,
    };
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
