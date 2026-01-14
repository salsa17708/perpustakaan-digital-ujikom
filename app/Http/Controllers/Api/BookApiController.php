<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BookApiController extends Controller
{
    /**
     * GET /api/books
     * Mengambil semua data buku
     */
    public function index()
    {
        $books = Book::latest()->get();

        return response()->json([
            'success' => true,
            'message' => 'Daftar Buku',
            'data'    => $books
        ], 200);
    }

    /**
     * GET /api/books/{id}
     * Mengambil detail 1 buku spesifik
     */
    public function show($id)
    {
        $book = Book::find($id);

        if ($book) {
            return response()->json([
                'success' => true,
                'message' => 'Detail Buku Ditemukan',
                'data'    => $book
            ], 200);
        }

        return response()->json([
            'success' => false,
            'message' => 'Buku Tidak Ditemukan',
        ], 404);
    }
}