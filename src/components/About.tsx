import { Award, Target, Heart, TrendingUp } from "lucide-react";
import { useTranslation } from "../i18n";

export function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Award,
      titleKey: "about.value.1.title",
      descKey: "about.value.1.desc",
    },
    {
      icon: Target,
      titleKey: "about.value.2.title",
      descKey: "about.value.2.desc",
    },
    {
      icon: Heart,
      titleKey: "about.value.3.title",
      descKey: "about.value.3.desc",
    },
    {
      icon: TrendingUp,
      titleKey: "about.value.4.title",
      descKey: "about.value.4.desc",
    },
  ];

  const stats = [
    { number: "12+", labelKey: "about.stats.years" },
    { number: "50K+", labelKey: "about.stats.clients" },
    { number: "98%", labelKey: "about.stats.ontime" },
    { number: "45+", labelKey: "about.stats.vehicles" },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">{t("about.title")}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">{t("about.lead")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t("about.ourStory.title")}</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-slate-900 overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={t("about.ourStory.title")}
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
                <div className="text-5xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("about.values.title")}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t("about.values.lead")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-slate-900 rounded-xl mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t(value.titleKey)}</h3>
                  <p className="text-slate-600 leading-relaxed">{t(value.descKey)}</p>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t("about.commitment.title")}</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>{t("about.commitment.p1")}</p>
                  <p>{t("about.commitment.p2")}</p>
                  <p>{t("about.commitment.p3")}</p>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={t("about.commitment.title")}
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
