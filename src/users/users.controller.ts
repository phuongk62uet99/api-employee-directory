import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: any) {
    console.log('Check : ', createUserDto);

    const user = await this.usersService.create(createUserDto, res);
    return res.json({
      message: 'Tạo tài khoản thành công',
      user,
    });
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.usersService.remove(id);
    return {
      message: 'Xóa thành công',
    };
  }
}
