import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMahasiswaDto {
    // @ApiProperty()
    @IsOptional()
    id_mahasiswa: number;

    @ApiProperty()
    @IsString()
    @MinLength(8,{message:'NIM minimal 8 karakter'})
    @MaxLength(20)
    nim: string;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    nama: string;

    @ApiProperty()
    @MaxLength(4,{message:'Tahun angkatan maksimal 4 karakter'})
    tahun_angkatan: string;
}
