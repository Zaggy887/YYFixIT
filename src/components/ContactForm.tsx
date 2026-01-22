import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Upload } from 'lucide-react';

type FormData = {
  name: string;
  mobile: string;
  email: string;
  postcode: string;
  description: string;
};

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    postcode: '',
    description: '',
  });
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("form-name", "booking");
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("mobile", formData.mobile);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("postcode", formData.postcode);
      formDataToSubmit.append("description", formData.description);

      images.forEach((image) => {
        formDataToSubmit.append("images", image);
      });

      await fetch("/", {
        method: "POST",
        body: formDataToSubmit
      });

      setShowConfirmation(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        postcode: '',
        description: '',
      });
      setImages([]);

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

  return (
    <section
      id="contact"
      className="section bg-white relative"
      ref={sectionRef}
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="fade-in mb-6 text-black text-4xl font-bold">
            Book Your Service Today
          </h2>
          <p className="fade-in text-lg text-gray-700">
            Ready to transform your space? Fill out the form below and we'll get back to you with a free quote.
          </p>
        </div>

        {showConfirmation ? (
          <div className="max-w-md mx-auto text-center bg-[#FFDA66] rounded-xl shadow-lg p-8 animate-fade-in border-2 border-black">
            <div className="mb-6">
              <CheckCircle className="w-24 h-24 text-black mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Thank you for booking!</h3>
            <p className="text-gray-800">We'll contact you shortly with your free quote and available times.</p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <form
              name="booking"
              method="POST"
              onSubmit={handleSubmit}
              className="fade-in bg-[#FFDA66] rounded-xl shadow-lg p-8 border-2 border-black"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="booking" />
              <div hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-black">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-black focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block mb-2 font-medium text-black">
                    Mobile *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-black focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-black">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-black focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="postcode" className="block mb-2 font-medium text-black">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-black focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block mb-2 font-medium text-black">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-black focus:ring-2 focus:ring-black focus:border-black"
                    placeholder="Please describe what you need assembled or set up, approximate number of items, and preferred timing..."
                  />
                </div>

                <div>
                  <label htmlFor="images" className="block mb-2 font-medium text-black">
                    Upload Images (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="images"
                      name="images"
                      onChange={handleImageChange}
                      multiple
                      accept="image/*"
                      className="hidden"
                    />
                    <label
                      htmlFor="images"
                      className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center gap-2 font-medium text-black"
                    >
                      <Upload className="w-5 h-5" />
                      {images.length > 0 ? `${images.length} image(s) selected` : 'Choose images'}
                    </label>
                  </div>
                  {images.length > 0 && (
                    <p className="mt-2 text-sm text-gray-700">
                      {images.map(img => img.name).join(', ')}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn flex items-center justify-center text-[#FFDA66] bg-black hover:bg-gray-900"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 mr-3 border-2 border-[#FFDA66] border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    'Get Free Quote'
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
