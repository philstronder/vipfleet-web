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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const endpoint =
        "https://formsubmit.co/ajax/f4c38cf81794ef2cb17f5da9a3282ca22";
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        message: formData.message,
        _subject: "New contact request from vipfleet website",
        _captcha: "false",
      } as Record<string, string>;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        const msg =
          errData?.message || `Request failed with status ${res.status}`;
        setErrorMessage(msg);
      } else {
        setSuccessMessage(
          t("contact.form.success") || "Message sent. We'll contact you soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setErrorMessage(message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
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

                  {successMessage && (
                    <div className="p-4 rounded-lg bg-green-50 text-green-800">
                      {successMessage}
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-4 rounded-lg bg-red-50 text-red-800">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg transition-colors font-semibold text-lg ${
                      isSubmitting
                        ? "bg-slate-400 text-white cursor-not-allowed"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isSubmitting
                      ? t("contact.sending") || "Sending..."
                      : t("contact.submit")}
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
