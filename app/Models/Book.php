<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    // Definisikan kolom yang boleh diisi oleh Admin
    protected $fillable = [
        'title',
        'author',
        'publisher',
        'publication_year',
        'stock',
    ];
}
