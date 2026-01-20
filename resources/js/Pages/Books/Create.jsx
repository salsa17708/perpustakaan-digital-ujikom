import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '', author: '', stock: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('books.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Buku</h2>}
        >
            <Head title="Tambah Buku" />
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow-sm rounded-lg">
                        <form onSubmit={submit}>
                            <div>
    <InputLabel value="Judul Buku" />
    <TextInput 
        className="mt-1 block w-full" 
        value={data.title}
        onChange={(e) => setData('title', e.target.value)}
    />
</div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Penulis</label>
                                <input type="text" value={data.author} onChange={(e) => setData('author', e.target.value)} className="border rounded w-full py-2 px-3" />
                                <div className="text-red-500 text-sm">{errors.author}</div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Stok</label>
                                <input type="number" value={data.stock} onChange={(e) => setData('stock', e.target.value)} className="border rounded w-full py-2 px-3" />
                                <div className="text-red-500 text-sm">{errors.stock}</div>
                            </div>
<PrimaryButton disabled={processing}>
    Simpan Buku
</PrimaryButton>                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}