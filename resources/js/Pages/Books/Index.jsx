import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, books }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manajemen Buku</h2>}
        >
            <Head title="Daftar Buku" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        <div className="mb-4 flex justify-end">
                            <Link href={route('books.create')} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                + Tambah Buku
                            </Link>
                        </div>

                        <table className="min-w-full border border-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left border-b text-gray-700">title</th>
                                    <th className="px-4 py-2 text-left border-b text-gray-700">author</th>
                                    <th className="px-4 py-2 text-left border-b text-gray-700">stock</th>
                                    <th className="px-4 py-2 text-left border-b text-gray-700">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Menggunakan data.map karena data dibungkus Resource */}
                                {books.length === 0 ? (
                                    <tr><td colSpan="4" className="px-4 py-6 text-center text-gray-500">Data Kosong</td></tr>
                                ) : (
                                    books.map((book) => (
                                        <tr key={book.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 border-b">{book.title}</td>
                                            <td className="px-4 py-3 border-b">{book.author}</td>
                                            <td className="px-4 py-3 border-b">{book.stock}</td>
                                            <td className="px-4 py-3 border-b text-blue-600">Edit | Hapus</td>
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