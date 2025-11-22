import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../i18n";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {t("contact.lead")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border-2 border-slate-200 p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {t("contact.requestQuote")}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-900 mb-2"
                      >
                        {t("contact.fullName")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-900 mb-2"
                      >
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-slate-900 mb-2"
                      >
                        {t("contact.phone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-slate-900 mb-2"
                      >
                        {t("contact.serviceType")}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors"
                      >
                        <option value="">{t("contact.selectService")}</option>
                        <option value="corporate">
                          {t("service.option.corporate")}
                        </option>
                        <option value="airport">
                          {t("service.option.airport")}
                        </option>
                        <option value="events">
                          {t("service.option.events")}
                        </option>
                        <option value="group">
                          {t("service.option.group")}
                        </option>
                        <option value="tours">
                          {t("service.option.tours")}
                        </option>
                        <option value="hourly">
                          {t("service.option.hourly")}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-semibold text-slate-900 mb-2"
                    >
                      {t("contact.date")}
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-900 mb-2"
                    >
                      {t("contact.details")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors resize-none"
                      placeholder={t("contact.form.detailsPlaceholder")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold text-lg"
                  >
                    {t("contact.submit")}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {t("contact.sidebar.title")}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-slate-900 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-slate-900 mb-1">
                        {t("contact.sidebar.phoneTitle")}
                      </div>
                      <div className="text-slate-600">+55 (21) 2255-7555</div>
                      {/* <div className="text-slate-600">+1 (555) 765-4321</div> */}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-slate-900 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-slate-900 mb-1">
                        {t("contact.sidebar.emailTitle")}
                      </div>
                      <div className="text-slate-600">info@vipfleet.com</div>
                      <div className="text-slate-600">
                        bookings@vipfleet.com
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-slate-900 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-slate-900 mb-1">
                        {t("contact.sidebar.locationTitle")}
                      </div>
                      <div className="text-slate-600">
                        {t("contact.sidebar.address")
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </div>
                    </div>
                  </div> */}

                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-slate-900 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-slate-900 mb-1">
                        {t("contact.sidebar.hoursTitle")}
                      </div>
                      <div className="text-slate-600">
                        {t("contact.sidebar.hoursText")
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">
                  {t("contact.emergency.title")}
                </h3>
                <p className="text-slate-300 mb-4">
                  {t("contact.emergency.text")}
                </p>
                <div className="text-2xl font-bold">+55 (21) 98218-5825</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
