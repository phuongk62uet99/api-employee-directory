import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Tên nhân viên không được trống' })
  @Length(5, 25, { message: 'Tên nhân viên từ 5 - 25 kí tự' })
  username: string;

  @IsNotEmpty({ message: 'Mật khẩu không được trống' })
  @Length(6, 18, { message: 'Mật khẩu từ 6 - 18 kí tự' })
  password: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Chức vụ không được bỏ trống' })
  role: string;

  loginfirst: string;
}

// {
//   "username" : "Phong Ha 01",
//  "password" : "12345678",
//  }

// {
//   "username"  : "NguyenPhuong9999",
//   "password" : "123456789999",
//   "email" :"nguyenphuon99g@gmail.com",
//   "role" : "check ",
//   "loginfirst" : "true",
// }

// -------------
// {
//   "username" : "Phong Ha 01",
//   "password" : "12345678",
// }
