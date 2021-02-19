import { IsNotEmpty, Length } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty({ message: 'Tên phòng ban không được trống' })
  @Length(5, 30, { message: 'Tên phòng ban từ 5 - 30 kí tự' })
  name: string;

  @IsNotEmpty({ message: 'Số điện thoại không được trống' })
  @Length(10, 10, { message: 'Vui lòng nhập đúng số điện thoại' })
  officephone: string;

  @IsNotEmpty({ message: 'Vui lòng nhập đầy đủ họ tên quản lý' })
  @Length(5, 25, { message: 'Họ tên từ 5 - 25 kí tự' })
  manager: string;
}

// {
//   "name" : "Phongvu99",
//   "officephone" : "0392484728",
//   "manager" : "Nhan vien "
// }

// {
//   "username" : "Phong Ha 01",
//  "password" : "12345678",
//  }
