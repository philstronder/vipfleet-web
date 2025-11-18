import { ArrowRight, Clock, Shield, Star, Users } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service for your convenience',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete coverage and professional drivers',
    },
    {
      icon: Star,
      title: 'Premium Fleet',
      description: 'Luxury vehicles maintained to perfection',
    },
    {
      icon: Users,
      title: 'Professional Chauffeurs',
      description: 'Experienced, discreet, and courteous service',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Executive Transport
              <span className="block text-slate-300 mt-2">Redefined</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
              Experience unparalleled luxury and professionalism with our premium chauffeur services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="group px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg flex items-center justify-center"
              >
                Book Your Ride
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('fleet')}
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all font-semibold text-lg"
              >
                View Fleet
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl bg-slate-50 hover:bg-slate-900 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-4">
                    <Icon className="h-12 w-12 text-slate-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Elite Transport?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                For over a decade, we've been the trusted choice for executives, celebrities, and discerning clients who demand excellence in every journey.
              </p>
              <ul className="space-y-4">
                {[
                  'Impeccably maintained luxury vehicles',
                  'Professionally trained and vetted chauffeurs',
                  'Real-time flight tracking and monitoring',
                  'Complimentary refreshments and amenities',
                  'Flexible scheduling and route planning',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-slate-900 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('about')}
                className="mt-8 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold"
              >
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-slate-900 overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury vehicle interior"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
