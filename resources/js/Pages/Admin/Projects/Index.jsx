import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Project() {
    return (
        <AuthenticatedLayout
            header='Projects'
        >
            <Head title="Projects" />

            
        </AuthenticatedLayout>
    );
}
