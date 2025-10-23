import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export function HeroSection() {
    const [currentWork, setCurrentWork] = useState(0);

    const workItems = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A modern online shopping experience with seamless checkout process and real-time inventory management.",
            features: ["Mobile-first design", "Payment integration", "Admin dashboard", "Inventory management"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            overlayTitle: "Shop Dashboard",
            overlaySubtitle: "Sales analytics & insights"
        },
        {
            id: 2,
            title: "SaaS Dashboard",
            description: "Comprehensive business intelligence dashboard with customizable widgets and real-time data visualization.",
            features: ["Real-time analytics", "Custom widgets", "Team collaboration", "Export capabilities"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            overlayTitle: "Analytics Hub",
            overlaySubtitle: "Business intelligence"
        },
        {
            id: 3,
            title: "Mobile Banking App",
            description: "Secure and intuitive banking application with biometric authentication and instant transaction processing.",
            features: ["Biometric login", "Instant transfers", "Bill payments", "Spending insights"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            overlayTitle: "Banking App",
            overlaySubtitle: "Secure transactions"
        },
        {
            id: 4,
            title: "Project Management",
            description: "Collaborative project management tool with task tracking, team messaging, and progress reporting.",
            features: ["Task management", "Team chat", "File sharing", "Progress tracking"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            overlayTitle: "Project Hub",
            overlaySubtitle: "Team collaboration"
        }
    ];

    // Auto-rotate work items
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWork((prev) => (prev + 1) % workItems.length);
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval);
    }, [workItems.length]);

    const nextWork = () => {
        setCurrentWork((prev) => (prev + 1) % workItems.length);
    };

    const prevWork = () => {
        setCurrentWork((prev) => (prev - 1 + workItems.length) % workItems.length);
    };

    const currentItem = workItems[currentWork];

    return (
        <section className="min-h-screen sm:min-h-[60vh] py-8 sm:py-12 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
                {/* Work Description Section - Left Side */}
                <div className="space-y-6 lg:space-y-8">
                    {/* Work Navigation and Title */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <span>Project</span>
                                <span className="text-[#ff8938]">{currentWork + 1}</span>
                                <span>of</span>
                                <span>{workItems.length}</span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={prevWork}
                                    className="btn btn-ghost btn-sm btn-circle hover:bg-[#ff8938] hover:text-white transition-colors"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={nextWork}
                                    className="btn btn-ghost btn-sm btn-circle hover:bg-[#ff8938] hover:text-white transition-colors"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                            {currentItem.title}
                        </h2>
                    </div>

                    {/* Work Description */}
                    <div className="space-y-4">
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {currentItem.description}
                        </p>

                        {/* Work Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {currentItem.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#ff8938] rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-700 dark:text-gray-200 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="space-y-2">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div
                                className="bg-[#ff8938] h-1.5 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${((currentWork + 1) / workItems.length) * 100}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                            <span>Auto-rotating in 6s</span>
                            <span>{currentWork + 1}/{workItems.length}</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Link
                            href="/get-started"
                            className="btn btn-primary px-6 font-semibold flex items-center gap-2"
                        >
                            Start Your Project
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="btn btn-outline px-6 font-semibold"
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>

                {/* Phone Mockup Section - Right Side */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        {/* Phone Mockup */}
                        <div className="mockup-phone transform-gpu h-[50vh] min-h-[500px] sm:min-h-[700px] lg:min-h-[600px] lg:max-h-[700px] w-auto">
                            <div className="mockup-phone-camera outline outline-2 outline-offset-2 outline-gray-400"></div>
                            <div className="mockup-phone-display relative overflow-hidden h-full">
                                <img
                                    alt={currentItem.title}
                                    src={currentItem.image}
                                    className="w-full h-full object-cover transition-opacity duration-500"
                                />
                                {/* Screen Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-between">
                                    {/* Top Overlay */}
                                    <div className="p-4 text-white">

                                        <h3 className="text-lg font-bold">{currentItem.overlayTitle}</h3>
                                        <p className="text-xs opacity-90">{currentItem.overlaySubtitle}</p>
                                    </div>

                                    {/* Bottom Overlay */}
                                    <div className="p-4 text-white">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="text-xs opacity-90">Current Project</div>
                                                <div className="text-sm font-semibold">{currentItem.title}</div>
                                            </div>
                                            <div className="flex gap-1">
                                                {workItems.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                                                            index === currentWork
                                                                ? 'bg-white'
                                                                : 'bg-white/30'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        {/* <div className="absolute -top-2 -right-2 bg-[#ff8938] text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                            Live Demo
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
