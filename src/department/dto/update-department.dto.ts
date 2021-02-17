import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, Length } from 'class-validator';
import { CreateDepartmentDto } from './create-department.dto';

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
  @IsNotEmpty({ message: 'Tên phòng ban không được trống' })
  @Length(1, 20, { message: 'Tên phòng ban từ 5 - 20 kí tự' })
  name: string;

  @IsNotEmpty({ message: 'Số điện thoại ban không được trống' })
  @Length(10, 10, { message: 'Vui lòng nhập đúng số điện thoại' })
  officephone: string;

  @IsNotEmpty({ message: 'Tên quản lí không được trống' })
  @Length(5, 25, { message: 'Tên từ 5 - 25 kí tự' })
  manager: string;
}
