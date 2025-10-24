import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export function ClientSaysSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc.",
            company: "TechStart Inc.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            content: "Working with this team transformed our business. They delivered a stunning web application that exceeded our expectations. The attention to detail and professionalism was outstanding.",
            rating: 5,
            project: "E-commerce Platform"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "CTO, InnovateLabs",
            company: "InnovateLabs",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            content: "The mobile app they developed for us has been a game-changer. User engagement increased by 150% and the code quality is exceptional. Highly recommended!",
            rating: 5,
            project: "Mobile Banking App"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Product Manager, GrowthCo",
            company: "GrowthCo",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            content: "Outstanding service from start to finish. They understood our vision and brought it to life with incredible precision. The support and maintenance have been flawless.",
            rating: 5,
            project: "SaaS Dashboard"
        },
        {
            id: 4,
            name: "David Kim",
            role: "Founder, StartupXYZ",
            company: "StartupXYZ",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            content: "As a startup, we needed a reliable partner who could deliver quality on a tight timeline. They exceeded our expectations and became true partners in our success.",
            rating: 5,
            project: "Project Management Tool"
        },
        {
            id: 5,
            name: "Lisa Thompson",
            role: "Marketing Director, BrandWorks",
            company: "BrandWorks",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            content: "The design and development work they provided helped us rebrand our entire digital presence. The results have been phenomenal and our customers love it.",
            rating: 5,
            project: "Corporate Website Redesign"
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length, isPlaying]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
    };

    const toggleAutoplay = () => {
        setIsPlaying(!isPlaying);
    };

    const currentTestimonialData = testimonials[currentTestimonial];

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#ff8938] text-sm font-medium mb-6">
                        <Quote className="h-4 w-4" />
                        Client Testimonials
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        What Our
                        <span className="block bg-gradient-to-r from-[#ff8938] to-orange-500 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what our clients have to say about
                        their experience working with us and the results we've delivered.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 lg:p-12">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#ff8938] to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <Quote className="h-6 w-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="text-center">
                            {/* Rating */}
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-6 w-6 ${
                                            i < currentTestimonialData.rating
                                                ? 'fill-[#ff8938] text-[#ff8938]'
                                                : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                                "{currentTestimonialData.content}"
                            </blockquote>

                            {/* Project Info */}
                            <div className="inline-block px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-[#ff8938] rounded-full text-sm font-medium mb-6">
                                Project: {currentTestimonialData.project}
                            </div>

                            {/* Client Info */}
                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={currentTestimonialData.image}
                                    alt={currentTestimonialData.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                                />
                                <div className="text-left">
                                    <div className="font-bold text-gray-900 dark:text-white text-lg">
                                        {currentTestimonialData.name}
                                    </div>
                                    <div className="text-[#ff8938] font-medium">
                                        {currentTestimonialData.role}
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                                        {currentTestimonialData.company}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                            {/* Progress Indicators */}
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToTestimonial(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentTestimonial
                                                ? 'bg-[#ff8938] w-8'
                                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Control Buttons */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={toggleAutoplay}
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-[#ff8938] transition-colors duration-200"
                                    aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
                                >
                                    {isPlaying ? (
                                        <Pause className="h-5 w-5" />
                                    ) : (
                                        <Play className="h-5 w-5" />
                                    )}
                                </button>
                                <button
                                    onClick={prevTestimonial}
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-[#ff8938] transition-colors duration-200 hover:scale-110"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-[#ff8938] transition-colors duration-200 hover:scale-110"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Counter */}
                    <div className="text-center mt-6">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {currentTestimonial + 1} of {testimonials.length}
                        </span>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="text-3xl font-bold text-[#ff8938] mb-2">50+</div>
                        <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="text-3xl font-bold text-[#ff8938] mb-2">4.9/5</div>
                        <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="text-3xl font-bold text-[#ff8938] mb-2">100+</div>
                        <div className="text-gray-600 dark:text-gray-400">Projects Done</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="text-3xl font-bold text-[#ff8938] mb-2">98%</div>
                        <div className="text-gray-600 dark:text-gray-400">Client Retention</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
