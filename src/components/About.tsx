import { Award, Target, Heart, TrendingUp } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our service delivery.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Punctuality and attention to detail are at the core of everything we do.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build lasting relationships through trust, transparency, and reliability.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuously improving our services with cutting-edge technology.',
    },
  ];

  const stats = [
    { number: '12+', label: 'Years Experience' },
    { number: '50K+', label: 'Satisfied Clients' },
    { number: '98%', label: 'On-Time Rate' },
    { number: '45+', label: 'Luxury Vehicles' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Setting the standard for executive transportation with unwavering commitment to excellence since 2012.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2012, Elite Transport emerged from a simple vision: to provide executives and distinguished clients with a transportation experience that matches their standards of excellence.
                </p>
                <p>
                  What began with a small fleet of three vehicles has grown into the region's most trusted executive transport service, with over 45 luxury vehicles and a team of highly trained professional chauffeurs.
                </p>
                <p>
                  Our success is built on the relationships we've cultivated with our clients, many of whom have been with us since day one. We don't just provide transportation—we deliver peace of mind.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-slate-900 overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our team"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every service we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-slate-900 rounded-xl mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Our Commitment
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Every member of our team undergoes rigorous training and background checks. Our chauffeurs are not just drivers—they're hospitality professionals dedicated to ensuring your comfort and safety.
                  </p>
                  <p>
                    We invest continuously in our fleet, maintaining each vehicle to manufacturer specifications and beyond. Our vehicles are deep-cleaned and inspected after every journey.
                  </p>
                  <p>
                    Your satisfaction is our measure of success. We're available 24/7 to ensure your transportation needs are met with the professionalism and attention to detail you deserve.
                  </p>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Commitment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
