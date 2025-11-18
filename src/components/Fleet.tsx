import { Users, Briefcase, Star } from 'lucide-react';

export function Fleet() {
  const vehicles = [
    {
      name: 'Mercedes-Benz S-Class',
      category: 'Sedan Executivo',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      passengers: '3',
      luggage: '3',
      features: [
        'Interior em couro premium',
        'Controle de climatização',
        'Conectividade WiFi',
        'Bar de bebidas',
      ],
    },
    {
      name: 'BMW 7 Series',
      category: 'Sedan de Luxo',
      image: 'https://images.pexels.com/photos/219622/pexels-photo-219622.jpeg?auto=compress&cs=tinysrgb&w=800',
      passengers: '3',
      luggage: '3',
      features: [
        'Assentos executivos',
        'Sistema de som avançado',
        'Vidros de privacidade',
        'Iluminação ambiente',
      ],
    },
    {
      name: 'Mercedes-Benz V-Class',
      category: 'Van Executiva',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
      passengers: '6',
      luggage: '6',
      features: [
        'Interior espaçoso',
        'Configuração para conferência',
        'Climatização multi-zona',
        'Sistema de entretenimento',
      ],
    },
    {
      name: 'Range Rover',
      category: 'SUV de Luxo',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      passengers: '4',
      luggage: '4',
      features: [
        'Capacidade para todas as condições',
        'Conforto premium',
        'Segurança avançada',
        'Teto panorâmico',
      ],
    },
    {
      name: 'Cadillac Escalade',
      category: 'SUV Premium',
      image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      passengers: '6',
      luggage: '5',
      features: [
        'Luxo espaçoso',
        'Tecnologia avançada',
        'Assentos estilo teatro',
        'Áudio premium',
      ],
    },
    {
      name: 'Mercedes-Benz Sprinter',
      category: 'Transporte Executivo',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      passengers: '14',
      luggage: '10',
      features: [
        'Transporte em grupo',
        'Assentos de luxo',
        'WiFi e portas USB',
        'Amplo espaço para bagagem',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Nossa Frota</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Experimente a melhor seleção de veículos de luxo, meticulosamente mantidos e equipados com comodidades premium para o seu conforto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg">
                      {vehicle.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center space-x-6 mb-6 pb-6 border-b border-slate-200">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-slate-400 mr-2" />
                      <span className="text-slate-600">{vehicle.passengers} Passageiros</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-slate-400 mr-2" />
                      <span className="text-slate-600">{vehicle.luggage} Bagagens</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Star className="h-5 w-5 text-slate-900 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Todos os Veículos Incluem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-slate-300">Manutenção Profissional</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-slate-300">Assistência 24/7</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Full</div>
                <div className="text-slate-300">Cobertura de Seguro Completa</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
