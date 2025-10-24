import { Code2, Cloud, QrCode, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export function ServicesSection() {
    const services = [
        {
            icon: Code2,
            title: "Software Design and Development",
            description: "We offer full-service software development services for web, mobile and desktop applications that are visually appealing and functional to meet your business system requirements.",
            link: "/services/development"
        },
        {
            icon: Cloud,
            title: "Support and Maintenance",
            description: "We specialize in providing software and application support services to achieve maximum availability, performance, and security.",
            link: "/services/support"
        },
        {
            icon: QrCode,
            title: "Products and Services",
            description: "We provide top-of-the-line products and services at competitive rates to meet all your software and hardware needs.",
            link: "/services/products"
        }
    ];

    return (
        <section className="py-16 lg:py-20 ">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Services We Provide
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        End-to-end software solutions designed to drive your business forward
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#ff8938] transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#ff8938] to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="h-6 w-6 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Learn More Link */}
                            <Link
                                href={service.link}
                                className="inline-flex items-center gap-2 text-[#ff8938] font-semibold group-hover:gap-3 transition-all duration-300"
                            >
                                Learn More
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/get-started"
                        className="btn btn-primary px-8 font-semibold text-lg"
                    >
                        Start Your Project
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
