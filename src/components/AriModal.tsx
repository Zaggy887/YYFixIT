import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AriModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AriModal = ({ isOpen, onClose }: AriModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setShouldRender(false), 400);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-400 ease-out ${
        isVisible ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-400 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-8 md:p-12">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">Meet Yehuda</h3>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src="/img_20260122_163712.jpg"
                alt="Yehuda Yitzchak Merber (Ari)"
                className="rounded-2xl shadow-2xl w-full object-cover border-4 border-[#FFDA66]"
              />
            </div>

            <div className="md:w-2/3">
              <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Yehuda Yitzchak Merber</h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Yehuda is the founder and driving force behind YY's Fix It & Build It Service. As the one in charge of everything, he ensures every project meets the highest standards of quality and customer satisfaction.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#FFDA66] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-black">Founded:</span> July 2024
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#FFDA66] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-black">Experience:</span> Nearly 10 years in furniture assembly and home setup services
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#FFDA66] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-black">Expertise:</span> From complex flat-pack furniture to complete room transformations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AriModal;
