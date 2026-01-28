import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ auth, book }) {
    
    // Inisialisasi form dengan DATA LAMA dari database
    const { data, setData, put, processing, errors } = useForm({
        title: book.title || '',
        author: book.author || '',
        publisher: book.publisher || '',
        year: book.year || '',
        stock: book.stock || ''
    });

    const submit = (e) => {
        e.preventDefault();
        // Gunakan method PUT untuk update
        put(route('books.update', book.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Buku</h2>}
        >
            <Head title="Edit Buku" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        <form onSubmit={submit}>
                            
                            {/* Input Judul */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Judul</label>
                                <input 
                                    type="text" 
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                                {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                            </div>

                            {/* Input Penulis */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Penulis</label>
                                <input 
                                    type="text" 
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                    value={data.author}
                                    onChange={(e) => setData('author', e.target.value)}
                                />
                                {errors.author && <div className="text-red-500 text-sm mt-1">{errors.author}</div>}
                            </div>

                            {/* Input Penerbit */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Penerbit</label>
                                <input 
                                    type="text" 
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                    value={data.publisher}
                                    onChange={(e) => setData('publisher', e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Input Tahun */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Tahun</label>
                                    <input 
                                        type="number" 
                                        className="border rounded w-full py-2 px-3 text-gray-700"
                                        value={data.year}
                                        onChange={(e) => setData('year', e.target.value)}
                                    />
                                </div>

                                {/* Input Stok */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Stok</label>
                                    <input 
                                        type="number" 
                                        className="border rounded w-full py-2 px-3 text-gray-700"
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link href={route('books.index')} className="text-gray-600 underline mr-4">Batal</Link>
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600"
                                >
                                    Update Buku
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}