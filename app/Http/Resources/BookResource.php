<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
   public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'title' => $this->title,
        'author' => $this->author,
        'stock' => $this->stock,
        // Bisa format tanggal di sini agar rapi di frontend
        'created_at' => $this->created_at->format('d M Y'), 
    ];
}
}
