<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Book; // <--- Jangan lupa import Model Book
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Buat Akun Admin (Agar selalu ada saat di-reset)
        User::create([
            'name' => 'Admin Perpus',
            'email' => 'admin@sekolah.id',
            'password' => bcrypt('password'), // Password: password
            'role' => 'admin',
        ]);

        // 2. Buat Akun Siswa Contoh (Opsional, biar gampang ngetes nanti)
        User::create([
            'name' => 'Siswa Contoh',
            'email' => 'siswa@sekolah.id',
            'password' => bcrypt('murid123'),
            'role' => 'user',
        ]);

        // 2. Buat 10 Data Buku Palsu
        Book::factory(10)->create(); 
    }
}