import { Briefcase, Plane, Calendar, Users, MapPin, Clock } from "lucide-react";
import { useTranslation } from "../i18n";

interface ServiceProps {
  onNavigate: (section: string) => void;
}

export function Services({ onNavigate }: ServiceProps) {
  const { t } = useTranslation();

  const services = [
    {
      icon: Briefcase,
      titleKey: "services.item.1.title",
      descKey: "services.item.1.desc",
      featureKeys: [
        "services.item.1.feature.1",
        "services.item.1.feature.2",
        "services.item.1.feature.3",
        "services.item.1.feature.4",
      ],
    },
    {
      icon: Plane,
      titleKey: "services.item.2.title",
      descKey: "services.item.2.desc",
      featureKeys: [
        "services.item.2.feature.1",
        "services.item.2.feature.2",
        "services.item.2.feature.3",
        "services.item.2.feature.4",
      ],
    },
    {
      icon: Calendar,
      titleKey: "services.item.3.title",
      descKey: "services.item.3.desc",
      featureKeys: [
        "services.item.3.feature.1",
        "services.item.3.feature.2",
        "services.item.3.feature.3",
        "services.item.3.feature.4",
      ],
    },
    {
      icon: Users,
      titleKey: "services.item.4.title",
      descKey: "services.item.4.desc",
      featureKeys: [
        "services.item.4.feature.1",
        "services.item.4.feature.2",
        "services.item.4.feature.3",
        "services.item.4.feature.4",
      ],
    },
    {
      icon: MapPin,
      titleKey: "services.item.5.title",
      descKey: "services.item.5.desc",
      featureKeys: [
        "services.item.5.feature.1",
        "services.item.5.feature.2",
        "services.item.5.feature.3",
        "services.item.5.feature.4",
      ],
    },
    {
      icon: Clock,
      titleKey: "services.item.6.title",
      descKey: "services.item.6.desc",
      featureKeys: [
        "services.item.6.feature.1",
        "services.item.6.feature.2",
        "services.item.6.feature.3",
        "services.item.6.feature.4",
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              {t("services.title")}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {t("services.lead")}
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
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                  <ul className="space-y-3">
                    {service.featureKeys.map((fKey, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-slate-200 group-hover:bg-slate-900 flex items-center justify-center mr-3 mt-0.5 transition-colors">
                          <div className="h-1.5 w-1.5 rounded-full bg-slate-600 group-hover:bg-white transition-colors"></div>
                        </div>
                        <span className="text-slate-700 text-sm">
                          {t(fKey)}
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
              {t("services.custom.title")}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t("services.custom.lead")}
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-semibold text-lg"
            >
              {t("services.cta")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
