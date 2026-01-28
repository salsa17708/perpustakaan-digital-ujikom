<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth; // <--- PENTING: Jangan lupa import ini!

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // LOGIKA PENGECEKAN:
        // 1. Cek apakah user sedang login? (Auth::check())
        // 2. Cek apakah role-nya BUKAN admin?
        if (Auth::check() && Auth::user()->role !== 'admin') {
            // Jika bukan admin, tendang keluar (Error 403 Forbidden)
            abort(403, 'AKSES DITOLAK: Halaman ini khusus Admin.');
        }

        // Jika dia admin, silakan lewat
        return $next($request);
    }
}