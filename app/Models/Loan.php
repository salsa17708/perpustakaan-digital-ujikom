<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;

    // Kolom yang boleh diisi
    protected $fillable = [
        'user_id',      // ID Petugas yang melayani
        'book_id',      // ID Buku yang dipinjam
        'member_id',    // ID Anggota yang meminjam
        'tanggal_pinjam',
        'tanggal_kembali',
        'status',       // 'dipinjam' atau 'kembali'
    ];

    // Mengubah format tanggal menjadi objek Carbon otomatis
    protected $casts = [
        'tanggal_pinjam' => 'date',
        'tanggal_kembali' => 'date',
    ];

    /**
     * Relasi: Peminjaman ini milik Buku apa?
     */
    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    /**
     * Relasi: Peminjaman ini dilakukan oleh Anggota mana?
     */
    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    /**
     * Relasi: Peminjaman ini dicatat oleh Petugas (User) mana?
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}