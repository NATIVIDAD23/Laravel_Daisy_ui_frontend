import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export function CareerSectionSimple() {
    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            type: "Full-time",
            location: "Remote",
            salary: "$100,000 - $130,000",
            department: "Engineering"
        },
        {
            id: 2,
            title: "UI/UX Designer",
            type: "Full-time",
            location: "San Francisco, CA",
            salary: "$90,000 - $120,000",
            department: "Design"
        },
        {
            id: 3,
            title: "Backend Engineer",
            type: "Full-time",
            location: "Remote",
            salary: "$110,000 - $140,000",
            department: "Engineering"
        }
    ];

    return (
        <section id="careers" className="py-16 lg:py-20 bg-white dark:bg-gray-900">
            <div className="">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Join Our Team
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        We're always looking for talented people to join our growing team.
                    </p>
                </div>

                {/* Job Listings */}
                <div className="space-y-4 mb-8">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#ff8938] transition-colors duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Briefcase className="h-4 w-4" />
                                            {job.type}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {job.salary}
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href={`/careers/${job.id}`}
                                    className="btn btn-primary px-6 font-semibold flex items-center gap-2"
                                >
                                    Apply Now
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/careers"
                        className="btn btn-outline border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#ff8938] hover:text-[#ff8938] px-8 font-semibold"
                    >
                        View All Positions
                    </Link>
                </div>
            </div>
        </section>
    );
}
