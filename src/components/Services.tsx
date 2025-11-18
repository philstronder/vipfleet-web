import { Briefcase, Plane, Calendar, Users, MapPin, Clock } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Transporte Corporativo",
      description:
        "Serviços de chauffeur profissionais para executivos, reuniões e eventos corporativos.",
      features: [
        "Serviço porta a porta",
        "Múltiplas paradas disponíveis",
        "Opções de faturamento corporativo",
        "Motoristas experientes para negócios",
      ],
    },
    {
      icon: Plane,
      title: "Traslados Aeroportuários",
      description:
        "Pickup e drop-off sem complicações com monitoramento de voos e serviço de recepção.",
      features: [
        "Monitoramento de voo em tempo real",
        "Serviço de recepção",
        "Assistência com bagagem",
        "Tempo de espera de cortesia",
      ],
    },
    {
      icon: Calendar,
      title: "Eventos Especiais",
      description:
        "Transporte elegante para casamentos, galas, estreias e outras ocasiões de prestígio.",
      features: [
        "Serviço tapete vermelho",
        "Múltiplas opções de veículos",
        "Coordenação de eventos",
        "Comodidades premium",
      ],
    },
    {
      icon: Users,
      title: "Transporte de Grupos",
      description:
        "Soluções de transporte coordenadas para grupos corporativos, conferências e eventos de equipe.",
      features: [
        "Coordenação de múltiplos veículos",
        "Tarifas para grupos disponíveis",
        "Suporte ao planejamento de eventos",
        "Agendamento flexível",
      ],
    },
    {
      icon: MapPin,
      title: "Passeios pela Cidade",
      description:
        "Passeios de luxo personalizados com motoristas experientes que mostram o melhor da cidade.",
      features: [
        "Itinerários personalizáveis",
        "Conhecimento local",
        "Duração flexível",
        "Opções de acesso VIP",
      ],
    },
    {
      icon: Clock,
      title: "Locação por Hora",
      description:
        "Serviço flexível por hora para múltiplas paradas, passeios de compras ou um dia inteiro à sua disposição.",
      features: [
        "Mínimo de 3 horas",
        "Tempo de espera incluído",
        "Flexibilidade de rota",
        "Veículo dedicado",
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Soluções de transporte abrangentes, adaptadas às suas
              necessidades, entregues com qualidade e atenção aos detalhes.
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
                        <span className="text-slate-700 text-sm">
                          {feature}
                        </span>
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
              Precisa de uma solução personalizada?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Especializamos em criar experiências de transporte sob medida.
              Deixe-nos desenhar um pacote de serviço que se ajuste
              perfeitamente às suas necessidades.
            </p>
            <button className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-semibold text-lg">
              Contate nossa equipe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
