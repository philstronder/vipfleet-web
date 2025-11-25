/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

export type Lang = "en" | "pt";

type Translations = Record<string, { en: string; pt: string }>;

const translations: Translations = {
  "nav.home": { en: "Home", pt: "Início" },
  "nav.services": { en: "Services", pt: "Serviços" },
  "nav.fleet": { en: "Fleet", pt: "Frota" },
  "nav.about": { en: "About", pt: "Sobre" },
  "nav.contact": { en: "Contact", pt: "Contato" },
  "nav.book": { en: "Book Now", pt: "Reservar" },

  "home.title": { en: "Executive Transport", pt: "Transporte Executivo" },
  "home.subtitle": { en: "Redefined", pt: "Redefinido" },
  "home.lead": {
    en: "Experience unparalleled luxury and professionalism with our premium chauffeur services.",
    pt: "Experimente luxo e profissionalismo incomparáveis com nossos serviços de chauffeur premium.",
  },
  "home.book": { en: "Book Your Ride", pt: "Reservar sua viagem" },
  "home.viewFleet": { en: "View Fleet", pt: "Ver Frota" },
  "home.viewServices": { en: "View Services", pt: "Ver Serviços" },
  "home.learnMore": { en: "Learn More", pt: "Saiba mais" },

  "home.why.title": {
    en: "Why Choose Vip Fleet?",
    pt: "Por que escolher a Vip Fleet?",
  },
  "home.why.lead": {
    en: "For more than a decade we've been the trusted choice for executives, celebrities, and discerning clients who demand excellence in every journey.",
    pt: "Há mais de uma década somos a escolha confiável para executivos, celebridades e clientes exigentes que buscam excelência em cada viagem.",
  },
  "home.why.item.1": {
    en: "Impeccably maintained luxury vehicles",
    pt: "Veículos de luxo impecavelmente mantidos",
  },
  "home.why.item.2": {
    en: "Professionally trained and vetted drivers",
    pt: "Motoristas profissionalmente treinados e verificados",
  },
  "home.why.item.3": {
    en: "Real-time flight monitoring",
    pt: "Monitoramento de voos em tempo real",
  },
  "home.why.item.4": {
    en: "Complimentary refreshments and amenities",
    pt: "Refeições e comodidades de cortesia",
  },
  "home.why.item.5": {
    en: "Flexible scheduling and route planning",
    pt: "Agendamento flexível e planejamento de rotas",
  },

  "home.feature.1.title": {
    en: "24/7 Availability",
    pt: "Disponibilidade 24/7",
  },
  "home.feature.1.desc": {
    en: "Service available 24 hours for your convenience",
    pt: "Serviço disponível 24 horas para sua conveniência",
  },
  "home.feature.2.title": { en: "Fully Insured", pt: "Totalmente Segurado" },
  "home.feature.2.desc": {
    en: "Full coverage and professional drivers",
    pt: "Cobertura completa e motoristas profissionais",
  },
  "home.feature.3.title": { en: "Premium Fleet", pt: "Frota Premium" },
  "home.feature.3.desc": {
    en: "Luxury vehicles maintained to perfection",
    pt: "Veículos de luxo mantidos à perfeição",
  },
  "home.feature.4.title": {
    en: "Professional Drivers",
    pt: "Motoristas Profissionais",
  },
  "home.feature.4.desc": {
    en: "Experienced, discreet, and courteous service",
    pt: "Serviço experiente, discreto e cortês",
  },
  "home.imageAlt": {
    en: "Luxury vehicle interior",
    pt: "Interior de veículo de luxo",
  },

  "about.title": { en: "About Us", pt: "Sobre Nós" },
  "about.story": {
    en: `Founded in 2016, Vip Fleet emerged from a simple vision: to provide executives and distinguished clients with a transportation experience that matches their standards of excellence.`,
    pt: `Fundada em 2016, a Vip Fleet surgiu com uma visão simples: oferecer a executivos e clientes ilustres uma experiência de transporte que corresponda aos seus padrões de excelência.`,
  },
  "about.lead": {
    en: "Setting the standard for executive transportation with unwavering commitment to excellence since 2016.",
    pt: "Definindo o padrão para transporte executivo com compromisso inabalável com a excelência desde 2016.",
  },
  "about.ourStory.title": { en: "Our Story", pt: "Nossa História" },
  "about.story.p1": {
    en: "Founded in 2016, Vip Fleet emerged from a simple vision: to provide executives and distinguished clients with a transportation experience that matches their standards of excellence.",
    pt: "Fundada em 2016, a Vip Fleet surgiu com uma visão simples: oferecer a executivos e clientes ilustres uma experiência de transporte que corresponda aos seus padrões de excelência.",
  },
  "about.story.p2": {
    en: "What began with a small fleet of three vehicles has grown into the region's most trusted executive transport service, with over 12 luxury vehicles and a team of highly trained professional chauffeurs.",
    pt: "O que começou com uma pequena frota de três veículos cresceu e se tornou o serviço de transporte executivo mais confiável da região, com mais de 12 veículos de luxo e uma equipe de motoristas profissionais altamente treinados.",
  },
  "about.story.p3": {
    en: "Our success is built on the relationships we've cultivated with our clients, many of whom have been with us since day one. We don't just provide transportation—we deliver peace of mind.",
    pt: "Nosso sucesso se baseia nos relacionamentos que cultivamos com nossos clientes, muitos dos quais estão conosco desde o primeiro dia. Não oferecemos apenas transporte — entregamos tranquilidade.",
  },
  "about.stats.years": { en: "Years Experience", pt: "Anos de Experiência" },
  "about.stats.clients": {
    en: "Satisfied Clients",
    pt: "Clientes Satisfeitos",
  },
  "about.stats.ontime": { en: "On-Time Rate", pt: "Taxa de Pontualidade" },
  "about.stats.vehicles": { en: "Luxury Vehicles", pt: "Veículos de Luxo" },
  "about.values.title": { en: "Our Values", pt: "Nossos Valores" },
  "about.value.1.title": { en: "Excellence", pt: "Excelência" },
  "about.value.1.desc": {
    en: "We maintain the highest standards in every aspect of our service delivery.",
    pt: "Mantemos os mais altos padrões em todos os aspectos da entrega de nossos serviços.",
  },
  "about.value.2.title": { en: "Precision", pt: "Precisão" },
  "about.value.2.desc": {
    en: "Punctuality and attention to detail are at the core of everything we do.",
    pt: "Pontualidade e atenção aos detalhes estão no centro de tudo o que fazemos.",
  },
  "about.value.3.title": { en: "Integrity", pt: "Integridade" },
  "about.value.3.desc": {
    en: "We build lasting relationships through trust, transparency, and reliability.",
    pt: "Construímos relacionamentos duradouros por meio da confiança, transparência e confiabilidade.",
  },
  "about.value.4.title": { en: "Innovation", pt: "Inovação" },
  "about.value.4.desc": {
    en: "Continuously improving our services with cutting-edge technology.",
    pt: "Melhorando continuamente nossos serviços com tecnologia de ponta.",
  },
  "about.commitment.title": { en: "Our Commitment", pt: "Nosso Compromisso" },
  "about.commitment.p1": {
    en: "Every member of our team undergoes rigorous training and background checks. Our chauffeurs are not just drivers—they're hospitality professionals dedicated to ensuring your comfort and safety.",
    pt: "Cada membro da nossa equipe passa por treinamento rigoroso e verificações de antecedentes. Nossos motoristas não são apenas condutores — são profissionais de hospitalidade dedicados a garantir seu conforto e segurança.",
  },
  "about.commitment.p2": {
    en: "We invest continuously in our fleet, maintaining each vehicle to manufacturer specifications and beyond. Our vehicles are deep-cleaned and inspected after every journey.",
    pt: "Investimos continuamente em nossa frota, mantendo cada veículo segundo as especificações do fabricante e além. Nossos veículos são limpos profundamente e inspecionados após cada viagem.",
  },
  "about.commitment.p3": {
    en: "Your satisfaction is our measure of success. We're available 24/7 to ensure your transportation needs are met with the professionalism and attention to detail you deserve.",
    pt: "Sua satisfação é nossa medida de sucesso. Estamos disponíveis 24/7 para garantir que suas necessidades de transporte sejam atendidas com profissionalismo e atenção aos detalhes.",
  },
  "about.values.lead": {
    en: "The principles that guide every decision we make and every service we deliver.",
    pt: "Os princípios que guiam cada decisão que tomamos e cada serviço que entregamos.",
  },

  "contact.title": { en: "Contact Us", pt: "Fale Conosco" },
  "contact.requestQuote": { en: "Request a Quote", pt: "Solicitar Orçamento" },
  "contact.fullName": { en: "Full Name *", pt: "Nome Completo *" },
  "contact.email": { en: "Email Address *", pt: "Endereço de e-mail *" },
  "contact.phone": { en: "Phone Number *", pt: "Telefone *" },
  "contact.serviceType": { en: "Service Type *", pt: "Tipo de Serviço *" },
  "contact.selectService": {
    en: "Select a service",
    pt: "Selecione um serviço",
  },
  "contact.submit": { en: "Submit Request", pt: "Enviar Solicitação" },
  "contact.lead": {
    en: "Ready to experience luxury transport? Contact our team or book your ride today.",
    pt: "Pronto para experimentar transporte de luxo? Entre em contato com nossa equipe ou reserve sua viagem hoje.",
  },
  "contact.form.detailsPlaceholder": {
    en: "Please provide any additional information about your transportation needs...",
    pt: "Forneça quaisquer informações adicionais sobre suas necessidades de transporte...",
  },
  "contact.date": { en: "Preferred Date *", pt: "Data Preferida *" },
  "contact.details": { en: "Additional Details", pt: "Detalhes Adicionais" },
  "contact.sending": { en: "Sending", pt: "Enviando" },
  "contact.form.success": { en: "Success!", pt: "Dados enviados com sucesso!" },
  "service.option.corporate": {
    en: "Corporate Transportation",
    pt: "Transporte Corporativo",
  },
  "service.option.airport": {
    en: "Airport Transfer",
    pt: "Traslado Aeroportuário",
  },
  "service.option.events": { en: "Special Events", pt: "Eventos Especiais" },
  "service.option.group": { en: "Group Transport", pt: "Transporte de Grupos" },
  "service.option.tours": { en: "City Tours", pt: "Passeios pela Cidade" },
  "service.option.hourly": { en: "Hourly Hire", pt: "Locação por Hora" },
  "contact.sidebar.title": { en: "Get In Touch", pt: "Fale Conosco" },
  "contact.sidebar.phoneTitle": { en: "Phone", pt: "Telefone" },
  "contact.sidebar.emailTitle": { en: "Email", pt: "E-mail" },
  "contact.sidebar.locationTitle": { en: "Location", pt: "Localização" },
  "contact.sidebar.address": {
    en: "123 Executive Drive\nSuite 500\nNew York, NY 10001",
    pt: "123 Executive Drive\nSuite 500\nNew York, NY 10001",
  },
  "contact.sidebar.hoursTitle": { en: "Hours", pt: "Horário" },
  "contact.sidebar.hoursText": {
    en: "24/7 Service Available\nOffice: Mon-Fri, 8am-6pm",
    pt: "Serviço disponível 24/7\nEscritório: Seg-Sex, 8h-18h",
  },
  "contact.emergency.title": {
    en: "Emergency Bookings",
    pt: "Reservas de Emergência",
  },
  "contact.emergency.text": {
    en: "Need immediate assistance? Our dispatch team is available 24/7.",
    pt: "Precisa de assistência imediata? Nossa equipe de despacho está disponível 24/7.",
  },

  "services.title": { en: "Our Services", pt: "Nossos Serviços" },
  "services.lead": {
    en: "Comprehensive transportation solutions tailored to your needs, delivered with quality and attention to detail.",
    pt: "Soluções de transporte abrangentes, adaptadas às suas necessidades, entregues com qualidade e atenção aos detalhes.",
  },
  "services.item.1.title": {
    en: "Corporate Transportation",
    pt: "Transporte Corporativo",
  },
  "services.item.1.desc": {
    en: "Professional chauffeur services for executives, meetings and corporate events.",
    pt: "Serviços de chauffeur profissionais para executivos, reuniões e eventos corporativos.",
  },
  "services.item.1.feature.1": {
    en: "Door-to-door service",
    pt: "Serviço porta a porta",
  },
  "services.item.1.feature.2": {
    en: "Multiple stops available",
    pt: "Múltiplas paradas disponíveis",
  },
  "services.item.1.feature.3": {
    en: "Corporate billing options",
    pt: "Opções de faturamento corporativo",
  },
  "services.item.1.feature.4": {
    en: "Business-experienced drivers",
    pt: "Motoristas experientes para negócios",
  },

  "services.item.2.title": {
    en: "Airport Transfers",
    pt: "Traslados Aeroportuários",
  },
  "services.item.2.desc": {
    en: "Hassle-free pickup and drop-off with flight monitoring and meet-and-greet service.",
    pt: "Pickup e drop-off sem complicações com monitoramento de voos e serviço de recepção.",
  },
  "services.item.2.feature.1": {
    en: "Real-time flight monitoring",
    pt: "Monitoramento de voo em tempo real",
  },
  "services.item.2.feature.2": {
    en: "Meet-and-greet service",
    pt: "Serviço de recepção",
  },
  "services.item.2.feature.3": {
    en: "Baggage assistance",
    pt: "Assistência com bagagem",
  },
  "services.item.2.feature.4": {
    en: "Courtesy wait time",
    pt: "Tempo de espera de cortesia",
  },

  "services.item.3.title": { en: "Special Events", pt: "Eventos Especiais" },
  "services.item.3.desc": {
    en: "Elegant transportation for weddings, galas, premieres and other prestigious occasions.",
    pt: "Transporte elegante para casamentos, galas, estreias e outras ocasiões de prestígio.",
  },
  "services.item.3.feature.1": {
    en: "Red-carpet service",
    pt: "Serviço tapete vermelho",
  },
  "services.item.3.feature.2": {
    en: "Multiple vehicle options",
    pt: "Múltiplas opções de veículos",
  },
  "services.item.3.feature.3": {
    en: "Event coordination",
    pt: "Coordenação de eventos",
  },
  "services.item.3.feature.4": {
    en: "Premium amenities",
    pt: "Comodidades premium",
  },

  "services.item.4.title": {
    en: "Group Transport",
    pt: "Transporte de Grupos",
  },
  "services.item.4.desc": {
    en: "Coordinated transport solutions for corporate groups, conferences and team events.",
    pt: "Soluções de transporte coordenadas para grupos corporativos, conferências e eventos de equipe.",
  },
  "services.item.4.feature.1": {
    en: "Coordination of multiple vehicles",
    pt: "Coordenação de múltiplos veículos",
  },
  "services.item.4.feature.2": {
    en: "Group rates available",
    pt: "Tarifas para grupos disponíveis",
  },
  "services.item.4.feature.3": {
    en: "Event planning support",
    pt: "Suporte ao planejamento de eventos",
  },
  "services.item.4.feature.4": {
    en: "Flexible scheduling",
    pt: "Agendamento flexível",
  },

  "services.item.5.title": { en: "City Tours", pt: "Passeios pela Cidade" },
  "services.item.5.desc": {
    en: "Personalized luxury tours with experienced drivers who show you the best of the city.",
    pt: "Passeios de luxo personalizados com motoristas experientes que mostram o melhor da cidade.",
  },
  "services.item.5.feature.1": {
    en: "Customizable itineraries",
    pt: "Itinerários personalizáveis",
  },
  "services.item.5.feature.2": {
    en: "Local expertise",
    pt: "Conhecimento local",
  },
  "services.item.5.feature.3": {
    en: "Flexible duration",
    pt: "Duração flexível",
  },
  "services.item.5.feature.4": {
    en: "VIP access options",
    pt: "Opções de acesso VIP",
  },

  "services.item.6.title": { en: "Hourly Hire", pt: "Locação por Hora" },
  "services.item.6.desc": {
    en: "Flexible hourly service for multiple stops, shopping trips or a full day at your disposal.",
    pt: "Serviço flexível por hora para múltiplas paradas, passeios de compras ou um dia inteiro à sua disposição.",
  },
  "services.item.6.feature.1": {
    en: "Minimum 3 hours",
    pt: "Mínimo de 3 horas",
  },
  "services.item.6.feature.2": {
    en: "Wait time included",
    pt: "Tempo de espera incluído",
  },
  "services.item.6.feature.3": {
    en: "Route flexibility",
    pt: "Flexibilidade de rota",
  },
  "services.item.6.feature.4": {
    en: "Dedicated vehicle",
    pt: "Veículo dedicado",
  },
  "services.custom.title": {
    en: "Need a custom solution?",
    pt: "Precisa de uma solução personalizada?",
  },
  "services.custom.lead": {
    en: "We specialize in crafting bespoke transportation experiences. Let us design a service package tailored to your exact needs.",
    pt: "Especializamos em criar experiências de transporte sob medida. Deixe-nos desenhar um pacote de serviço que se ajuste perfeitamente às suas necessidades.",
  },
  "services.cta": { en: "Contact our team", pt: "Contate nossa equipe" },
  "fleet.title": { en: "Our Fleet", pt: "Nossa Frota" },
  "fleet.lead": {
    en: "Explore our selection of luxury vehicles, meticulously maintained and equipped with premium amenities for your comfort.",
    pt: "Experimente a melhor seleção de veículos de luxo, meticulosamente mantidos e equipados com comodidades premium para o seu conforto.",
  },
  "fleet.passengers": { en: "Passengers", pt: "Passageiros" },
  "fleet.luggage": { en: "Luggage", pt: "Bagagens" },

  "fleet.item.1.category": { en: "Executive Sedan", pt: "Sedan Executivo" },
  "fleet.item.1.feature.1": {
    en: "Premium leather interior",
    pt: "Interior em couro premium",
  },
  "fleet.item.1.feature.2": {
    en: "Climate control",
    pt: "Controle de climatização",
  },
  "fleet.item.1.feature.3": {
    en: "WiFi connectivity",
    pt: "Conectividade WiFi",
  },
  "fleet.item.1.feature.4": {
    en: "On-board refreshment bar",
    pt: "Bar de bebidas",
  },

  "fleet.item.2.category": { en: "Luxury Sedan", pt: "Sedan de Luxo" },
  "fleet.item.2.feature.1": {
    en: "Executive seating",
    pt: "Assentos executivos",
  },
  "fleet.item.2.feature.2": {
    en: "Advanced sound system",
    pt: "Sistema de som avançado",
  },
  "fleet.item.2.feature.3": {
    en: "Privacy glass",
    pt: "Vidros de privacidade",
  },
  "fleet.item.2.feature.4": {
    en: "Ambient lighting",
    pt: "Iluminação ambiente",
  },

  "fleet.item.3.category": { en: "Executive Van", pt: "Van Executiva" },
  "fleet.item.3.feature.1": {
    en: "Spacious interior",
    pt: "Interior espaçoso",
  },
  "fleet.item.3.feature.2": {
    en: "Conference-style seating",
    pt: "Configuração para conferência",
  },
  "fleet.item.3.feature.3": {
    en: "Multi-zone climate control",
    pt: "Climatização multi-zona",
  },
  "fleet.item.3.feature.4": {
    en: "Entertainment system",
    pt: "Sistema de entretenimento",
  },

  "fleet.item.4.category": { en: "Luxury SUV", pt: "SUV de Luxo" },
  "fleet.item.4.feature.1": {
    en: "All-condition capability",
    pt: "Capacidade para todas as condições",
  },
  "fleet.item.4.feature.2": { en: "Premium comfort", pt: "Conforto premium" },
  "fleet.item.4.feature.3": { en: "Advanced safety", pt: "Segurança avançada" },
  "fleet.item.4.feature.4": { en: "Panoramic roof", pt: "Teto panorâmico" },

  "fleet.item.5.category": { en: "Premium SUV", pt: "SUV Premium" },
  "fleet.item.5.feature.1": { en: "Spacious luxury", pt: "Luxo espaçoso" },
  "fleet.item.5.feature.2": {
    en: "Advanced technology",
    pt: "Tecnologia avançada",
  },
  "fleet.item.5.feature.3": {
    en: "Theater-style seating",
    pt: "Assentos estilo teatro",
  },
  "fleet.item.5.feature.4": { en: "Premium audio", pt: "Áudio premium" },

  "fleet.item.6.category": {
    en: "Executive Transport",
    pt: "Transporte Executivo",
  },
  "fleet.item.6.feature.1": {
    en: "Group transport",
    pt: "Transporte em grupo",
  },
  "fleet.item.6.feature.2": { en: "Luxurious seating", pt: "Assentos de luxo" },
  "fleet.item.6.feature.3": { en: "WiFi & USB ports", pt: "WiFi e portas USB" },
  "fleet.item.6.feature.4": {
    en: "Ample luggage space",
    pt: "Amplo espaço para bagagem",
  },

  "fleet.includes.title": {
    en: "All Vehicles Include",
    pt: "Todos os Veículos Incluem",
  },
  "fleet.includes.stat.1.value": { en: "100%", pt: "100%" },
  "fleet.includes.stat.1.label": {
    en: "Professional Maintenance",
    pt: "Manutenção Profissional",
  },
  "fleet.includes.stat.2.value": { en: "24/7", pt: "24/7" },
  "fleet.includes.stat.2.label": {
    en: "24/7 Assistance",
    pt: "Assistência 24/7",
  },
  "fleet.includes.stat.3.value": { en: "Full", pt: "Full" },
  "fleet.includes.stat.3.label": {
    en: "Comprehensive Insurance Coverage",
    pt: "Cobertura de Seguro Completa",
  },
};

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "pt") return stored;
    } catch {
      /* ignore */
    }
    return "pt";
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = (key: string) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry.en;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
}
