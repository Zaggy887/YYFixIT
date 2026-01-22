import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

type FormType = 'company' | 'student';

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formType, setFormType] = useState<FormType>('company');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": formType === 'company' ? "contact" : "student-contact",
          ...formData
        })
      });

      setShowConfirmation(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });

      const formElement = document.querySelector('form');
      if (formElement) {
        formElement.style.display = 'none';
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionStyle = formType === 'student' 
    ? 'section bg-gradient-to-b from-purple-50 to-white relative'
    : 'section bg-gradient-to-b from-sky-100 to-white relative';

  const buttonStyle = formType === 'student'
    ? 'bg-purple-600 hover:bg-purple-700'
    : 'bg-sky-400 hover:bg-sky-500';

  const accentColor = formType === 'student' ? 'text-purple-600' : 'text-sky-400';

  return (
    <section
      id="contact"
      className={sectionStyle}
      ref={sectionRef}
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="fade-in mb-6">
            <span className={accentColor}>Start Your Journey</span> With Us
          </h2>
          <p className="fade-in text-lg text-gray-600">
            Whether you're a company looking for talent or a student seeking opportunities, we're here to help.
          </p>
        </div>

        {/* Form Type Selection */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFormType('company')}
              className={`px-6 py-3 rounded-full transition-all ${
                formType === 'company'
                  ? 'bg-sky-400 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              I'm a Company
            </button>
            <button
              onClick={() => setFormType('student')}
              className={`px-6 py-3 rounded-full transition-all ${
                formType === 'student'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              I'm a Student
            </button>
          </div>
        </div>

        {showConfirmation ? (
          <div className="max-w-md mx-auto text-center bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <div className="mb-6">
              <CheckCircle className={`w-24 h-24 ${accentColor} mx-auto`} />
            </div>
            <h3 className={`text-2xl font-bold ${formType === 'student' ? 'text-purple-800' : 'text-sky-600'} mb-2`}>Thank you!</h3>
            <p className={formType === 'student' ? 'text-purple-700' : 'text-sky-500'}>We'll be in touch with you shortly.</p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <form
              name={formType === 'company' ? "contact" : "student-contact"}
              method="POST"
              onSubmit={handleSubmit}
              className="fade-in bg-white rounded-xl shadow-lg p-8"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value={formType === 'company' ? "contact" : "student-contact"} />
              <div hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block mb-2 font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                      formType === 'student' ? 'focus:ring-purple-500 focus:border-purple-500' : 'focus:ring-sky-400 focus:border-sky-400'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                      formType === 'student' ? 'focus:ring-purple-500 focus:border-purple-500' : 'focus:ring-sky-400 focus:border-sky-400'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                      formType === 'student' ? 'focus:ring-purple-500 focus:border-purple-500' : 'focus:ring-sky-400 focus:border-sky-400'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                      formType === 'student' ? 'focus:ring-purple-500 focus:border-purple-500' : 'focus:ring-sky-400 focus:border-sky-400'
                    }`}
                    placeholder={formType === 'company' 
                      ? "e.g., Employment type (Full-time, Part-time), Role (Accountant, Finance), Industry, Location"
                      : "e.g., University, Course, Year Level, Areas of Interest"
                    }
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn flex items-center justify-center text-white ${buttonStyle}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full" />
                      Processing...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
