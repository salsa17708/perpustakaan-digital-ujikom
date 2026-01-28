<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        return Inertia::render('Transactions/Index', [
            // Kita bagi data menjadi dua kelompok
            'activeTransactions' => Transaction::with(['user', 'book'])->where('status', 'borrowed')->latest()->get(),
            'historyTransactions' => Transaction::with(['user', 'book'])->where('status', 'returned')->latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Transactions/Create', [
            'users' => User::all(),
            'books' => Book::where('stock', '>', 0)->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'book_id' => 'required',
            'transaction_date' => 'required|date',
            'due_date' => 'required|date|after_or_equal:transaction_date',
        ]);

        DB::transaction(function () use ($request) {
            Transaction::create($request->all() + ['status' => 'borrowed']);
            Book::find($request->book_id)->decrement('stock');
        });

        return redirect()->route('transactions.index');
    }

    // FUNGSI KHUSUS PENGEMBALIAN
    public function returnBook(Transaction $transaction)
    {
        DB::transaction(function () use ($transaction) {
            // 1. Update status transaksi
            $transaction->update([
                'status' => 'returned',
                'return_date' => now()->format('Y-m-d')
            ]);

            // 2. Kembalikan stok buku (+1)
            $transaction->book->increment('stock');
        });

        return redirect()->route('transactions.index');
    }
}