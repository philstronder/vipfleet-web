import { Award, Target, Heart, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description:
        "Mantemos os mais altos padrões em todos os aspectos da entrega de nossos serviços.",
    },
    {
      icon: Target,
      title: "Precisão",
      description:
        "Pontualidade e atenção aos detalhes estão no centro de tudo o que fazemos.",
    },
    {
      icon: Heart,
      title: "Integridade",
      description:
        "Construímos relacionamentos duradouros por meio da confiança, transparência e confiabilidade.",
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description:
        "Melhorando continuamente nossos serviços com tecnologia de ponta.",
    },
  ];

  const stats = [
    { number: "12+", label: "Anos de Experiência" },
    { number: "50K+", label: "Clientes Satisfeitos" },
    { number: "98%", label: "Taxa de Pontualidade" },
    { number: "45+", label: "Veículos de Luxo" },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Sobre Nós</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Definindo o padrão para transporte executivo com compromisso
              inabalável com a excelência desde 2012.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Fundada em 2012, a Vip Fleet surgiu com uma visão simples:
                  oferecer a executivos e clientes ilustres uma experiência de
                  transporte que corresponda aos seus padrões de excelência.
                </p>
                <p>
                  O que começou com uma pequena frota de três veículos cresceu e
                  se tornou o serviço de transporte executivo mais confiável da
                  região, com mais de 45 veículos de luxo e uma equipe de
                  motoristas profissionais altamente treinados.
                </p>
                <p>
                  Nosso sucesso se baseia nos relacionamentos que cultivamos com
                  nossos clientes, muitos dos quais estão conosco desde o
                  primeiro dia. Não oferecemos apenas transporte — entregamos
                  tranquilidade.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-slate-900 overflow-hidden shadow-2xl">
                  <img
                  src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Nossa equipe"
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
              Nossos Valores
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão que tomamos e cada serviço
              que entregamos.
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
                  Nosso Compromisso
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Cada membro da nossa equipe passa por treinamento rigoroso e
                    verificações de antecedentes. Nossos motoristas não são
                    apenas condutores — são profissionais de hospitalidade
                    dedicados a garantir seu conforto e segurança.
                  </p>
                  <p>
                    Investimos continuamente em nossa frota, mantendo cada
                    veículo segundo as especificações do fabricante e além.
                    Nossos veículos são limpos profundamente e inspecionados
                    após cada viagem.
                  </p>
                  <p>
                    Sua satisfação é nossa medida de sucesso. Estamos
                    disponíveis 24/7 para garantir que suas necessidades de
                    transporte sejam atendidas com profissionalismo e atenção
                    aos detalhes.
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
