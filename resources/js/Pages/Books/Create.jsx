import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react'; // Pakai useForm

export default function Create({ auth }) {
    // 1. Setup Form (Nama field harus sama dengan di Controller)
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        author: '',
        publisher: '',
        year: '',
        stock: ''
    });

    // 2. Fungsi saat tombol Simpan ditekan
    const submit = (e) => {
        e.preventDefault();
        post(route('books.store')); // Kirim ke rute store
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Buku</h2>}
        >
            <Head title="Tambah Buku" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        <form onSubmit={submit}>
                            {/* Input Judul */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Judul Buku</label>
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
                                {errors.publisher && <div className="text-red-500 text-sm mt-1">{errors.publisher}</div>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Input Tahun */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Tahun Terbit</label>
                                    <input 
                                        type="number" 
                                        className="border rounded w-full py-2 px-3 text-gray-700"
                                        value={data.year}
                                        onChange={(e) => setData('year', e.target.value)}
                                    />
                                    {errors.year && <div className="text-red-500 text-sm mt-1">{errors.year}</div>}
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
                                    {errors.stock && <div className="text-red-500 text-sm mt-1">{errors.stock}</div>}
                                </div>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link href={route('books.index')} className="text-gray-600 underline mr-4">Batal</Link>
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                                >
                                    Simpan Buku
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}