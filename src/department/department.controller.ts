import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}
  @Post()
  async create(
    @Body() createDepartmentDto: CreateDepartmentDto,
    @Res() res: any,
  ) {
    const depart = await this.departmentService.create(
      createDepartmentDto,
      res,
    );
    return res.json({
      message: 'Tạo phòng thành công',
      depart,
    });
  }

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: any,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    const updateDepart = await this.departmentService.update(
      id,
      updateDepartmentDto,
    );
    return {
      message: 'Cập nhật thông tin thành công',
      updateDepart,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const dele = await this.departmentService.remove(id);
    return {
      message: 'Xóa thành công',
      dele,
    };
  }
}
