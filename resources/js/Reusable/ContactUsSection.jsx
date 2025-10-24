import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export function ContactSection() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => {
                setFormSubmitted(true);
                reset();
                setTimeout(() => setFormSubmitted(false), 5000);
            }
        });
    };

    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            subtitle: "Mon-Fri from 8am to 6pm",
            link: "tel:+15551234567",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Mail,
            title: "Email Us",
            details: "hello@mybrand.com",
            subtitle: "We'll respond within 24 hours",
            link: "mailto:hello@mybrand.com",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "123 Business Ave",
            subtitle: "San Francisco, CA 94107",
            link: "https://maps.google.com",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Clock,
            title: "Working Hours",
            details: "Mon - Fri: 9:00 - 18:00",
            subtitle: "Weekend: Emergency Support",
            link: null,
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="contact" className="py-16 lg:py-24 max-w-7xl mx-auto">
            <div>
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's Start Your
                        <span className="block bg-gradient-to-r from-[#ff8938] to-orange-500 bg-clip-text text-transparent">
                            Project Today
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Ready to bring your ideas to life? Contact us for a free consultation and let's create something amazing together.
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactMethods.map((method, index) => (
                        <div
                            key={index}
                            className="group text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-105"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <method.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                                {method.title}
                            </h3>
                            {method.link ? (
                                <Link
                                    href={method.link}
                                    className="text-gray-900 dark:text-white hover:text-[#ff8938] font-medium text-base block mb-1 transition-colors duration-200"
                                >
                                    {method.details}
                                </Link>
                            ) : (
                                <p className="text-gray-900 dark:text-white font-medium text-base mb-1">
                                    {method.details}
                                </p>
                            )}
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {method.subtitle}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Send us a Message
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Fill out the form and our team will get back to you within 24 hours. We're excited to hear about your project!
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4">
                            {[
                                "Free initial consultation",
                                "Detailed project assessment",
                                "Customized solution proposal",
                                "Transparent pricing"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-[#ff8938] flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="text-2xl font-bold text-[#ff8938] mb-1">24h</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Response</div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="text-2xl font-bold text-[#ff8938] mb-1">100+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Done</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 lg:p-10">
                        {formSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Message Sent!
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setFormSubmitted(false)}
                                    className="btn btn-ghost text-[#ff8938] hover:bg-orange-50 dark:hover:bg-orange-900/20"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#ff8938] to-orange-500 rounded-2xl flex items-center justify-center">
                                        <Send className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            Contact Form
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            We'd love to hear from you
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Your Name *"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#ff8938] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                                                required
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Your Email *"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#ff8938] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                                                required
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#ff8938] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                value={data.subject}
                                                onChange={(e) => setData('subject', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#ff8938] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                                            />
                                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us about your project... *"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#ff8938] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 resize-none"
                                            required
                                        />
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-gradient-to-r from-[#ff8938] to-orange-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-orange-500 hover:to-[#ff8938] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                                    >
                                        {processing ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="h-5 w-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
