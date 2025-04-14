"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionState("idle");
    setErrorMessage("");

    try {
      // Replace with your actual Web3Forms access key
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY as string;

      const formDataToSend = new FormData();
      formDataToSend.append("access_key", accessKey);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append(
        "subject",
        formData.subject || "Запитване от GOAT Studio уебсайт"
      );
      formDataToSend.append("message", formData.message);
      formDataToSend.append("from_name", "GOAT Studio Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionState("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmissionState("error");
        setErrorMessage(
          "Възникна грешка при изпращането. Моля, опитайте отново."
        );
      }
    } catch (error) {
      setSubmissionState("error");
      setErrorMessage(
        "Възникна грешка при изпращането. Моля, опитайте отново."
      );
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-on-scroll">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-[var(--color-cool-white)]">
        Свържете се с нас
      </h2>

      {submissionState === "success" ? (
        <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">
            Съобщението е изпратено успешно!
          </h3>
          <p className="text-green-600 dark:text-green-400 mb-4">
            Благодарим ви за съобщението! Ще се свържем с вас възможно
            най-скоро.
          </p>
          <button
            onClick={() => setSubmissionState("idle")}
            className="btn btn-primary"
          >
            Изпратете ново съобщение
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 dark:text-[var(--color-silver)]"
              >
                Име <span className="text-[var(--color-racing-red)]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[var(--color-silver)] dark:border-[var(--color-dark-gunmetal)] rounded-md bg-white dark:bg-[var(--color-dark-gunmetal)] text-[var(--color-gunmetal)] dark:text-[var(--color-cool-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-racing-red)]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 dark:text-[var(--color-silver)]"
              >
                Имейл <span className="text-[var(--color-racing-red)]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[var(--color-silver)] dark:border-[var(--color-dark-gunmetal)] rounded-md bg-white dark:bg-[var(--color-dark-gunmetal)] text-[var(--color-gunmetal)] dark:text-[var(--color-cool-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-racing-red)]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1 dark:text-[var(--color-silver)]"
              >
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[var(--color-silver)] dark:border-[var(--color-dark-gunmetal)] rounded-md bg-white dark:bg-[var(--color-dark-gunmetal)] text-[var(--color-gunmetal)] dark:text-[var(--color-cool-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-racing-red)]"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1 dark:text-[var(--color-silver)]"
              >
                Тема
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[var(--color-silver)] dark:border-[var(--color-dark-gunmetal)] rounded-md bg-white dark:bg-[var(--color-dark-gunmetal)] text-[var(--color-gunmetal)] dark:text-[var(--color-cool-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-racing-red)]"
              >
                <option value="">-- Изберете тема --</option>
                <option value="Запитване за затъмняване на стъкла">
                  Запитване за затъмняване на стъкла
                </option>
                <option value="Запитване за полиране на фарове">
                  Запитване за полиране на фарове
                </option>
                <option value="Запитване за тониране на стопове">
                  Запитване за тониране на стопове
                </option>
                <option value="Въпрос за цени">Въпрос за цени</option>
                <option value="Друго">Друго</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1 dark:text-[var(--color-silver)]"
            >
              Съобщение{" "}
              <span className="text-[var(--color-racing-red)]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-[var(--color-silver)] dark:border-[var(--color-dark-gunmetal)] rounded-md bg-white dark:bg-[var(--color-dark-gunmetal)] text-[var(--color-gunmetal)] dark:text-[var(--color-cool-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-racing-red)]"
              required
            ></textarea>
          </div>

          {submissionState === "error" && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center text-red-700 dark:text-red-400">
              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary py-3 px-6 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Изпращане...
              </>
            ) : (
              <>
                Изпратете съобщение
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-xs text-[var(--color-dark-gunmetal)]/60 dark:text-[var(--color-silver)]/60 mt-4">
            * Задължителни полета
          </p>
        </form>
      )}
    </div>
  );
}
