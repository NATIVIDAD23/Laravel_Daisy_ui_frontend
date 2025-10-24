import GuestLayoutNavBar from '@/Layouts/GuestLayoutNavBar';
import { CareerSection } from '@/Reusable/CareerSection';
import { Head, Link } from '@inertiajs/react';

export default function Careers() {
    return (
        <>
            <GuestLayoutNavBar>
                <Head title="Careers" />
                <CareerSection />

            </GuestLayoutNavBar>
        </>
    );
}
