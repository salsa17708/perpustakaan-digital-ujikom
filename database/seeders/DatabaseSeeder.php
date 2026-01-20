<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Buat Akun Admin (Agar selalu ada saat di-reset)
        User::create([
            'name' => 'Admin Perpus',
            'email' => 'admin@sekolah.id',
            'password' => bcrypt('passwordd'), // Password: password
            'role' => 'admin',
        ]);

        // 2. Buat Akun Siswa Contoh (Opsional, biar gampang ngetes nanti)
        User::create([
            'name' => 'Siswa Contoh',
            'email' => 'siswa@sekolah.id',
            'password' => bcrypt('password'),
            'role' => 'user',
        ]);
    }
}