import { useState, useRef } from 'react';
import { CheckCircle, ArrowRight, Gift, Users } from 'lucide-react';

type ReferralType = 'company' | 'student';

interface ReferralFormData {
  referrerName: string;
  referrerEmail: string;
  referralName: string;
  referralEmail: string;
  referralPhone?: string;
  message: string;
  isAnonymous?: boolean;
}

const ReferralForm = () => {
  const [referralType, setReferralType] = useState<ReferralType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<ReferralFormData>({
    referrerName: '',
    referrerEmail: '',
    referralName: '',
    referralEmail: '',
    referralPhone: '',
    message: '',
    isAnonymous: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleReferralTypeSelect = (type: ReferralType) => {
    setReferralType(type);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resetForm = () => {
    setShowConfirmation(false);
    setReferralType(null);
    setFormData({
      referrerName: '',
      referrerEmail: '',
      referralName: '',
      referralEmail: '',
      referralPhone: '',
      message: '',
      isAnonymous: false,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formName = `referral-${referralType}`;

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": formName,
          ...formData
        }).toString()
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setShowConfirmation(true);
      setFormData({
        referrerName: '',
        referrerEmail: '',
        referralName: '',
        referralEmail: '',
        referralPhone: '',
        message: '',
        isAnonymous: false,
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getAccentColor = (type: 'text' | 'bg' | 'border' | 'hover') => {
    if (referralType === 'student') {
      switch (type) {
        case 'text': return 'text-purple-600';
        case 'bg': return 'bg-purple-600';
        case 'border': return 'border-purple-600';
        case 'hover': return 'hover:bg-purple-700';
      }
    }
    return type === 'text' ? 'text-sky-400' : 
           type === 'bg' ? 'bg-sky-400' : 
           type === 'border' ? 'border-sky-400' : 
           'hover:bg-sky-500';
  };

  return (
    <div className="max-w-4xl mx-auto">
      {showConfirmation ? (
        <div className="text-center bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <div className="mb-6">
            <CheckCircle className={`w-24 h-24 ${referralType === 'student' ? 'text-purple-600' : 'text-sky-400'} mx-auto`} />
          </div>
          <h3 className={`text-2xl font-bold ${referralType === 'student' ? 'text-purple-800' : 'text-sky-600'} mb-2`}>Thank you!</h3>
          <p className={referralType === 'student' ? 'text-purple-700' : 'text-sky-500'}>We'll be in touch with you shortly.</p>
          
          <button
            onClick={resetForm}
            className={`inline-flex items-center justify-center px-6 py-3 ${referralType === 'student' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-sky-400 hover:bg-sky-500'} text-white rounded-full transition-colors mt-6`}
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Submit Another Referral
          </button>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Company Referral Card */}
            <div
              className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
                referralType === 'company' 
                  ? 'bg-sky-50 border-2 border-sky-400' 
                  : 'bg-white hover:bg-sky-50 border border-gray-200'
              }`}
              onClick={() => handleReferralTypeSelect('company')}
            >
              <div className="flex items-center mb-4">
                <Gift className={`w-8 h-8 ${referralType === 'company' ? 'text-sky-400' : 'text-gray-400'}`} />
                <h3 className="text-xl font-semibold ml-3">Refer a Company</h3>
              </div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-sky-400">$1000</div>
                <p className="text-gray-600">Reward per successful hire</p>
              </div>
              
              <p className="text-gray-600 text-sm">
                Know a company looking for top student talent? Help them find exceptional graduates while earning rewards.
              </p>
            </div>

            {/* Student Referral Card */}
            <div
              className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
                referralType === 'student' 
                  ? 'bg-purple-50 border-2 border-purple-600' 
                  : 'bg-white hover:bg-purple-50 border border-gray-200'
              }`}
              onClick={() => handleReferralTypeSelect('student')}
            >
              <div className="flex items-center mb-4">
                <Users className={`w-8 h-8 ${referralType === 'student' ? 'text-purple-600' : 'text-gray-400'}`} />
                <h3 className="text-xl font-semibold ml-3">Refer a Student</h3>
              </div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-purple-600">$250</div>
                <p className="text-gray-600">Reward per successful hire</p>
              </div>
              
              <p className="text-gray-600 text-sm">
                Know a talented student seeking opportunities? Help them kickstart their career journey.
              </p>
            </div>
          </div>

          {referralType && (
            <div ref={formRef} className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 border border-gray-200">
              <h3 className={`text-2xl font-bold text-center mb-8 ${getAccentColor('text')}`}>
                {referralType === 'company' ? 'Company Referral Form' : 'Student Referral Form'}
              </h3>

              <form
                name={`referral-${referralType}`}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value={`referral-${referralType}`} />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Your Information</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium text-gray-600">Your Name *</label>
                      <input
                        type="text"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                          referralType === 'student' 
                            ? 'focus:ring-purple-500 focus:border-purple-500' 
                            : 'focus:ring-sky-400 focus:border-sky-400'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-600">Your Email *</label>
                      <input
                        type="email"
                        name="referrerEmail"
                        value={formData.referrerEmail}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                          referralType === 'student' 
                            ? 'focus:ring-purple-500 focus:border-purple-500' 
                            : 'focus:ring-sky-400 focus:border-sky-400'
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="isAnonymous"
                        checked={formData.isAnonymous}
                        onChange={handleChange}
                        className={`form-checkbox h-5 w-5 rounded border-gray-300 ${
                          referralType === 'student' 
                            ? 'text-purple-600 focus:ring-purple-500' 
                            : 'text-sky-400 focus:ring-sky-400'
                        }`}
                      />
                      <span className="ml-2 text-gray-600">Keep my referral anonymous</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">
                    {referralType === 'company' ? 'Company Information' : 'Student Information'}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium text-gray-600">
                        {referralType === 'company' ? 'Company Name *' : 'Student Name *'}
                      </label>
                      <input
                        type="text"
                        name="referralName"
                        value={formData.referralName}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                          referralType === 'student' 
                            ? 'focus:ring-purple-500 focus:border-purple-500' 
                            : 'focus:ring-sky-400 focus:border-sky-400'
                        }`}
                        placeholder={`Enter ${referralType === 'company' ? 'company' : 'student'} name`}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-600">
                        {referralType === 'company' ? 'Company Email *' : 'Student Email *'}
                      </label>
                      <input
                        type="email"
                        name="referralEmail"
                        value={formData.referralEmail}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                          referralType === 'student' 
                            ? 'focus:ring-purple-500 focus:border-purple-500' 
                            : 'focus:ring-sky-400 focus:border-sky-400'
                        }`}
                        placeholder={`Enter ${referralType === 'company' ? 'company' : 'student'} email`}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-600">
                        {referralType === 'company' ? 'Company Phone' : 'Student Phone'}
                      </label>
                      <input
                        type="tel"
                        name="referralPhone"
                        value={formData.referralPhone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                          referralType === 'student' 
                            ? 'focus:ring-purple-500 focus:border-purple-500' 
                            : 'focus:ring-sky-400 focus:border-sky-400'
                        }`}
                        placeholder="Enter phone number (optional)"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 font-medium text-gray-600">Additional Information</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 ${
                          referralType === 'student' 
                            ? 'focus:ring-purple-500 focus:border-purple-500' 
                            : 'focus:ring-sky-400 focus:border-sky-400'
                        }`}
                        placeholder={referralType === 'company'
                          ? "Tell us about the company (e.g., industry, size, location)"
                          : "Tell us about the student (e.g., university, major, graduation year)"}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${getAccentColor('bg')} ${getAccentColor('hover')} text-white py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full" />
                        Processing...
                      </>
                    ) : (
                      'Submit Referral'
                    )}
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    * Terms and conditions apply. Rewards are paid on the condition of successful placement and after completion of probation period.
                  </p>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReferralForm;