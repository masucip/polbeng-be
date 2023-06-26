import { Injectable } from '@nestjs/common';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mahasiswa } from './entities/mahasiswa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MahasiswaService {
  constructor(
    @InjectRepository(Mahasiswa) private mahasiswaRepo : Repository<Mahasiswa>
  ){

  }
  create(createMahasiswaDto: CreateMahasiswaDto) {
    return this.mahasiswaRepo.save(createMahasiswaDto);
  }

  findAll() {
    return this.mahasiswaRepo.find();
  }

  findOne(id: number) {
    return this.mahasiswaRepo.findOne({where:{id_mahasiswa:id}});
  }

  update(id: number, updateMahasiswaDto: UpdateMahasiswaDto) {
    updateMahasiswaDto.id_mahasiswa = id
    return this.mahasiswaRepo.save(updateMahasiswaDto);
  }

  remove(id: number) {
    return this.mahasiswaRepo.delete({id_mahasiswa:id});
  }
}
