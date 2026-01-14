<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    // Kolom yang boleh diisi (Mass Assignment)
    protected $fillable = [
        'nisn',
        'nama',
        'alamat',
        'nomor_telepon',
    ];

    /**
     * Relasi: Satu Anggota bisa memiliki banyak data Peminjaman (Loans)
     * Digunakan nanti saat melihat riwayat peminjaman siswa.
     */
    public function loans()
    {
        return $this->hasMany(Loan::class);
    }
}