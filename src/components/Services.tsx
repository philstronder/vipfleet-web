import { Briefcase, Plane, Calendar, Users, MapPin, Clock } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Corporate Transportation',
      description: 'Professional chauffeur services for business executives, board meetings, and corporate events.',
      features: [
        'Door-to-door service',
        'Multiple stops available',
        'Corporate billing options',
        'Experienced business drivers',
      ],
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Seamless airport pickup and drop-off with flight tracking and meet-and-greet service.',
      features: [
        'Real-time flight monitoring',
        'Meet and greet service',
        'Luggage assistance',
        'Complimentary wait time',
      ],
    },
    {
      icon: Calendar,
      title: 'Special Events',
      description: 'Elegant transportation for weddings, galas, premieres, and other prestigious occasions.',
      features: [
        'Red carpet service',
        'Multiple vehicle options',
        'Event coordination',
        'Premium amenities',
      ],
    },
    {
      icon: Users,
      title: 'Group Transportation',
      description: 'Coordinated transport solutions for corporate groups, conferences, and team events.',
      features: [
        'Multi-vehicle coordination',
        'Group rates available',
        'Event planning support',
        'Flexible scheduling',
      ],
    },
    {
      icon: MapPin,
      title: 'City Tours',
      description: 'Personalized luxury tours with knowledgeable chauffeurs showcasing the best of the city.',
      features: [
        'Customizable itineraries',
        'Local expertise',
        'Flexible duration',
        'VIP access options',
      ],
    },
    {
      icon: Clock,
      title: 'Hourly Charter',
      description: 'Flexible hourly service for multiple stops, shopping trips, or a full day at your disposal.',
      features: [
        'Minimum 3 hours',
        'Wait time included',
        'Route flexibility',
        'Dedicated vehicle',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive transportation solutions tailored to your needs, delivered with uncompromising quality and attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-6">
                    <div className="inline-flex p-3 bg-slate-100 rounded-lg group-hover:bg-slate-900 transition-colors">
                      <Icon className="h-8 w-8 text-slate-900 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-slate-200 group-hover:bg-slate-900 flex items-center justify-center mr-3 mt-0.5 transition-colors">
                          <div className="h-1.5 w-1.5 rounded-full bg-slate-600 group-hover:bg-white transition-colors"></div>
                        </div>
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We specialize in creating bespoke transportation experiences. Let us design a service package that perfectly fits your requirements.
            </p>
            <button className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
