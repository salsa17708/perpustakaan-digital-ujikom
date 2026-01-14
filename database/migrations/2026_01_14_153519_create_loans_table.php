<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete(); // Relasi ke User (Petugas/Peminjam)
            $table->foreignId('book_id')->constrained('books')->cascadeOnDelete(); // Relasi ke Buku
            $table->foreignId('member_id')->constrained('members')->cascadeOnDelete(); // Relasi ke Anggota
            $table->date('tanggal_pinjam');
            $table->date('tanggal_kembali')->nullable(); // Nullable karena awal pinjam belum kembali
            $table->enum('status', ['dipinjam', 'kembali'])->default('dipinjam');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
