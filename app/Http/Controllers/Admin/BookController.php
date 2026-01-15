<?php

namespace App\Http\Controllers;

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
        // Validasi & Simpan Data (Logic sama persis kayak API)
        $validated = $request->validate([
            'title' => 'required',
            'author' => 'required',
            'stock' => 'required|integer',
        ]);

        Book::create($validated);

        // Bedanya disini: Kalau API return JSON, kalau Monolith kita Redirect
        return redirect()->route('books.index')->with('message', 'Buku berhasil ditambahkan!');
    }
}
