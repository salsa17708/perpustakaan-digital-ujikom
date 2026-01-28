<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'judul' => fake()->sentence(3), // Buat judul acak 3 kata
        'penulis' => fake()->name(),    // Buat nama orang acak
        'penerbit' => fake()->company(), // Buat nama perusahaan acak
        'tahun_terbit' => fake()->year(), // Buat tahun acak
        'stok' => fake()->numberBetween(0, 50), // Angka 0 s/d 50
    ];
}
}
