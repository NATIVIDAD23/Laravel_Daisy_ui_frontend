import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Card from '@/Components/Card';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-6 py-12">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Side - Branding */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    <Link href="/" className="transition-transform hover:scale-105">
                        <ApplicationLogo className="h-24 w-24 lg:h-32 lg:w-32 fill-current text-primary" />
                    </Link>

                    <div className="space-y-4 max-w-md">
                        <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Welcome to <span className="">App Name</span>
                        </h1>

                        <p className="text-base lg:text-lg text-base-content/70 leading-relaxed">
                            Streamline your work, manage your team, and stay productive — all in one place.
                        </p>
                    </div>
                </div>

                {/* Right Side - Auth Form Card */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Card
                        bordered
                        shadow={true}
                        hover={true}
                        color="base-100"
                        className="w-full max-w-md p-1 rounded-2xl transition-all duration-300 hover:shadow-xl"
                    >
                        {children}
                    </Card>
                </div>
            </div>
        </div>
    );
}
