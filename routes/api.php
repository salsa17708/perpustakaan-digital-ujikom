<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// Pastikan baris ini ada! Jangan lupa import controller-nya
use App\Http\Controllers\Api\BookApiController;

// Opsi 1: Tanpa V1
Route::get('/books', [BookApiController::class, 'index']);

// Opsi 2: Dengan V1 (Pilih salah satu saja)
// Route::prefix('v1')->group(function () {
//    Route::get('/books', [BookApiController::class, 'index']);
// });