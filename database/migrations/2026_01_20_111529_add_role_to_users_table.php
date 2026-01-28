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
        Schema::table('users', function (Blueprint $table) {
        // 'admin' untuk petugas, 'user' untuk siswa [cite: 105, 106]
        $table->string('role')->default('user')->after('email');
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Kebalikan dari up(): Menghapus kolom 'role'
            $table->dropColumn('role');
        });
    }
};
