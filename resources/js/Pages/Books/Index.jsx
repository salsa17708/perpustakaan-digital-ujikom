import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react'; // Pastikan ada 'router'

export default function Index({ auth, books }) {
    
    // FUNGSI MENGHAPUS BUKU
    const handleDelete = (id, title) => {
        // Konfirmasi javascript bawaan browser
        if (confirm(`Apakah Anda yakin ingin menghapus buku "${title}"?`)) {
            // Kirim request DELETE ke backend
            router.delete(route('books.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manajemen Buku</h2>}
        >
            <Head title="Daftar Buku" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        {/* Tombol Tambah (Biru) */}
                        <div className="mb-4 flex justify-end">
                            <Link 
                                href={route('books.create')} 
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                + Tambah Buku
                            </Link>
                        </div>

                        <table className="min-w-full border border-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left border-b text-gray-700 font-bold">Judul</th>
                                    <th className="px-4 py-2 text-left border-b text-gray-700 font-bold">Penulis</th>
                                    <th className="px-4 py-2 text-left border-b text-gray-700 font-bold">Penerbit</th>
                                    <th className="px-4 py-2 text-center border-b text-gray-700 font-bold">Tahun</th>
                                    <th className="px-4 py-2 text-center border-b text-gray-700 font-bold">Stok</th>
                                    <th className="px-4 py-2 text-center border-b text-gray-700 font-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.length === 0 ? (
                                    <tr><td colSpan="6" className="px-4 py-6 text-center text-gray-500">Data Kosong</td></tr>
                                ) : (
                                    books.map((book) => (
                                        <tr key={book.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 border-b">{book.title}</td>
                                            <td className="px-4 py-3 border-b">{book.author}</td>
                                            <td className="px-4 py-3 border-b">{book.publisher}</td>
                                            <td className="px-4 py-3 border-b text-center">{book.year}</td>
                                            <td className="px-4 py-3 border-b text-center">{book.stock}</td>
                                            <td className="px-4 py-3 border-b text-center">
                                                
                                                {/* TOMBOL EDIT (Biru) */}
                                                <Link 
                                                    href={route('books.edit', book.id)} 
                                                    className="text-blue-600 hover:text-blue-800 font-medium mr-3"
                                                >
                                                    Edit
                                                </Link> 

                                                <span className="text-gray-300">|</span>

                                                {/* TOMBOL HAPUS (Merah) */}
                                                <button 
                                                    onClick={() => handleDelete(book.id, book.title)}
                                                    className="text-red-600 hover:text-red-800 font-medium ml-3"
                                                >
                                                    Hapus
                                                </button>

                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}