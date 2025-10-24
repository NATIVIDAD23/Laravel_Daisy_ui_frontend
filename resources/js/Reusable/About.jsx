import { Users, Target, Award, Clock, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export function AboutSection() {
    const stats = [
        {
            icon: Users,
            number: "50+",
            label: "Team Members",
            description: "Talented professionals working together"
        },
        {
            icon: Award,
            number: "100+",
            label: "Projects Completed",
            description: "Successful deliveries worldwide"
        },
        {
            icon: Clock,
            number: "5+",
            label: "Years Experience",
            description: "Industry expertise and knowledge"
        },
        {
            icon: Heart,
            number: "98%",
            label: "Client Satisfaction",
            description: "Happy clients and repeat business"
        }
    ];

    const values = [
        {
            icon: Target,
            title: "Innovation",
            description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Heart,
            title: "Passion",
            description: "We love what we do and it shows in every project we deliver to our clients.",
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: Zap,
            title: "Excellence",
            description: "We strive for perfection in every detail, ensuring top-quality results.",
            color: "from-amber-500 to-orange-500"
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "We work closely with our clients as partners to achieve shared success.",
            color: "from-green-500 to-emerald-500"
        }
    ];


    return (
        <section id="about" className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#ff8938] text-sm font-medium mb-6">
                        <Users className="h-4 w-4" />
                        About Our Company
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Building The Future
                        <span className="block bg-gradient-to-r from-[#ff8938] to-orange-500 bg-clip-text text-transparent">
                            Of Digital Innovation
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We are a passionate team of developers, designers, and innovators dedicated to
                        creating exceptional digital experiences that drive business growth and transform ideas into reality.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br from-[#ff8938] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                <stat.icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                {stat.number}
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-white mb-1">
                                {stat.label}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                            Our Story & Mission
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Founded in 2018, we started as a small team with a big vision: to make
                            cutting-edge technology accessible to businesses of all sizes. Today,
                            we've grown into a full-service digital agency serving clients worldwide.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our mission is to empower businesses with innovative software solutions
                            that not only meet their current needs but also scale with their future growth.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Custom software development tailored to your needs",
                                "Agile development methodology for faster delivery",
                                "Continuous support and maintenance services",
                                "Cutting-edge technology stack and best practices"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-[#ff8938] flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/about"
                                className="btn btn-primary px-6 font-semibold flex items-center gap-2"
                            >
                                Learn More About Us
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/team"
                                className="btn btn-outline px-6 font-semibold"
                            >
                                Meet Our Team
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-[#ff8938] to-orange-500 rounded-2xl p-1">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Our team working together"
                                className="w-full h-96 object-cover rounded-2xl"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                            <div className="text-2xl font-bold text-[#ff8938] mb-1">5+</div>
                            <div className="text-gray-600 dark:text-gray-400">Years of Excellence</div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Core Values
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            The principles that guide everything we do and define who we are as a company.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <value.icon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {value.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
