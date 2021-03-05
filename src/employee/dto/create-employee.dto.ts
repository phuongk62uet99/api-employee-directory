import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Department } from '../../department/schemas/department.schemas';

export class CreateEmployeeDto {
  @IsNotEmpty({ message: 'Tên không được bỏ trống' })
  @Length(5, 25, { message: 'Tên từ 5 - 25 kí tự' })
  name: string;

  photo: string;

  @IsNotEmpty({ message: 'Tên công việc không được bỏ trống' })
  @Length(1, 25, { message: 'Tên công việc không được quá 25 kí tự' })
  jobtitle: string;

  @IsNotEmpty({ message: 'Số điện thoại không được để trống' })
  @Length(10, 10, { message: 'Số điện thoại chỉ 10 số' })
  cellphone: string;

  @IsNotEmpty({ message: 'Email không được để trống' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Phòng ban không được trống' })
  department_id: Department;
}

// {
//   "name" : "check 01",
//    "photo" : "Neuww photo ",
//    "jobtitle" : "check job",
//    "cellphone" : "0392483272",
//    "email" : "nguyenvjdkd",
//    "department_id" : {
//      "_id": "602cd9e9b7ee8f2a44d646db",
//     "name": "Nhân sự",
//     "officephone": "0392483273",
//     "manager": "giam doc",
//     "createdAt": "2021-02-17T08:55:05.041Z",
//     "updatedAt": "2021-02-17T08:55:05.041Z",
//     "__v": 0
//     },
// }


