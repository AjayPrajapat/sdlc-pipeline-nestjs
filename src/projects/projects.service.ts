import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

  async create(createProjectDto: any): Promise<Project> {
    const createdProject = new this.projectModel(createProjectDto);
    return createdProject.save();
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().populate('owner').exec();
  }

  async findOne(id: string): Promise<Project> {
    return this.projectModel.findById(id).populate('owner').exec();
  }

  async update(id: string, updateProjectDto: any): Promise<Project> {
    return this.projectModel.findByIdAndUpdate(id, updateProjectDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.projectModel.findByIdAndDelete(id).exec();
  }
}
