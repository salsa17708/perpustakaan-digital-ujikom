<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Book; // <--- Jangan lupa import Model Book
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Buat 1 User Admin (Agar Anda bisa login)
        User::factory()->create([
            'name' => 'Admin Perpus',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'), // passwordnya: password
        ]);

        // 2. Buat 10 Data Buku Palsu
        Book::factory(10)->create(); 
    }
}