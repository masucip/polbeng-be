import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { ProdiModule } from './prodi/prodi.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type :'mysql',
      host : process.env.MYSQL_HOST,
      port : parseInt(process.env.MYSQL_PORT),
      username : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASS,
      database : process.env.MYSQL_DB,
      autoLoadEntities : true,
      synchronize : true
    }),
    MahasiswaModule,
    ProdiModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
