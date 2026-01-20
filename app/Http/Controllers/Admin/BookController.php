<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia; // <--- Wajib ada

class BookController extends Controller
{
    public function index()
    {
        // 1. Ambil data (Sama seperti logika API)
        $books = Book::latest()->get();

        // 2. Kirim ke Frontend (Cara Monolith)
        // 'Books/Index' artinya file ada di resources/js/Pages/Books/Index.jsx
        return Inertia::render('Books/Index', [
            'books' => $books
        ]);
    }

    public function create()
    {
        // Menampilkan halaman Form Tambah Buku
        return Inertia::render('Books/Create');
    }

    public function store(Request $request)
    {
        // 1. Validasi Input
        // Kita pastikan data yang dikirim user sesuai aturan
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'publisher' => 'required|string|max:255',
            'publication_year' => 'required|integer|min:1000|max:' . date('Y'),
            'stock' => 'required|integer|min:0',
            // 'description' => 'nullable|string' // Jika nanti ada deskripsi
        ]);

        // 2. Simpan ke Database
        // Karena nama input form sama dengan nama kolom database, kita bisa langsung pakai create
        Book::create($validated);

        // 3. Redirect (Kembali ke Halaman Utama)
        // Kita pakai 'to_route' supaya lebih singkat, plus kirim pesan sukses (opsional)
        return to_route('books.index')->with('message', 'Buku berhasil ditambahkan!');
    }
}
