import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async update(id: string, updateUserDto: any): Promise<User> {
    if (!id) {
      throw new Error('User ID is required');
    }
    if (!updateUserDto) {
      throw new Error('User data is required');
    }
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec()
      .then((user) => {
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      })
      .catch((err) => {
        throw new Error(`Error updating user: ${err.message}`);
      });
  }

  async remove(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
