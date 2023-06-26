import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mahasiswa {
    @PrimaryGeneratedColumn()
    id_mahasiswa: number;

    @Column()
    nim: string;

    @Column()
    nama: string;

    @Column()
    tahun_angkatan: string;
}
