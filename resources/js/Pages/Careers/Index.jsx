import GuestLayoutNavBar from '@/Layouts/GuestLayoutNavBar';
import { CareerSectionSimple } from '@/Reusable/CareerSection';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <GuestLayoutNavBar>
                <Head title="Welcome" />
                <CareerSectionSimple />

            </GuestLayoutNavBar>
        </>
    );
}
