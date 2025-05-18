import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Register } from './dto/register-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(createUserDto: Register): Promise<User> {
    return this.UserModel.create(createUserDto);
  }

  async findByUsername(name : string) {
    return this.UserModel.findOne({name})
    
  }

  findAll() {
    return this.UserModel.find().exec();
  }

  findOne(id: string) {
    return this.UserModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserModel.findByIdAndUpdate(id,updateUserDto);
  }

  remove(id: string) {
    return this.UserModel.findByIdAndDelete(id);
  }
}
