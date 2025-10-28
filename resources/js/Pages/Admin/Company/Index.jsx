import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function CompanyProfile() {
    const { company } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        name: company?.name || '',
        logo: null, // use null to accept File
        description: company?.description || '',
        facebook: company?.facebook || '',
        instagram: company?.instagram || '',
        contact_no: company?.contact_no || '',
        email: company?.email || '',
        address: company?.address || '',
        g_map_address: company?.g_map_address || '',
    });

    const [preview, setPreview] = useState(company?.logo || null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData('logo', file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(company?.logo || null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('company.update', company.id), {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
            header='Company Profile'
        >
            <Head title="Company Profile" />

            <div className="p-6 bg-base-100 shadow-lg rounded-box max-w-3xl mx-auto mt-6">
                {/* Company Logo */}
                <div className="flex justify-center mb-6">
                    {preview ? (
                        <img
                            src={preview}
                            alt="Company Logo"
                            className="w-24 h-24 rounded-full object-cover border border-base-300 shadow-sm"
                        />
                    ) : (
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-24 rounded-full">
                                <span>No Logo</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="form-control">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Upload Logo</legend>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="file-input file-input-bordered w-full"
                            />
                            <label className="label">
                                <span className="label-text-alt">Max size: 2MB</span>
                            </label>
                            {errors.logo && <p className="text-error text-sm mt-1">{errors.logo}</p>}
                        </fieldset>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="textarea textarea-bordered w-full"
                            rows="3"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Facebook URL</span>
                            </label>
                            <input
                                type="text"
                                name="facebook"
                                value={data.facebook}
                                onChange={(e) => setData('facebook', e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instagram URL</span>
                            </label>
                            <input
                                type="text"
                                name="instagram"
                                value={data.instagram}
                                onChange={(e) => setData('instagram', e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact No.</span>
                            </label>
                            <input
                                type="text"
                                name="contact_no"
                                value={data.contact_no}
                                onChange={(e) => setData('contact_no', e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea
                            name="address"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            className="textarea textarea-bordered w-full"
                            rows="2"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Google Map Address</span>
                        </label>
                        <input
                            type="text"
                            name="g_map_address"
                            value={data.g_map_address}
                            onChange={(e) => setData('g_map_address', e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary"
                        >
                            {processing ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
