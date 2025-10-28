import GuestLayoutNavBar from '@/Layouts/GuestLayoutNavBar';
import { CareerSection } from '@/Reusable/CareerSection';
import { PageHeader } from '@/Reusable/PageHeader';
import { Head, Link } from '@inertiajs/react';

export default function Careers() {
    return (
        <>
            <GuestLayoutNavBar>
                <Head title="Careers" />
                 <PageHeader
                    title="Careers"
                    subtitle="Do you have what it takes to be part of our growing family?"
                    background="gradient"
                    align="center"
                />
                <CareerSection />

            </GuestLayoutNavBar>
        </>
    );
}
