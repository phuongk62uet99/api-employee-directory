import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto, res: any): Promise<UserDocument> {
    console.log('Check Service : ', createUserDto);

    const user = await this.UserModel.create(createUserDto);
    return user;
  }

  async findAll(): Promise<UserDocument[]> {
    return this.UserModel.find();
  }

  async remove(id: string) {
    return this.UserModel.findByIdAndDelete(id);
  }
}
