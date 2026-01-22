import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#5BB6FF] flex flex-col items-center justify-center z-50">
      <div className="mb-8 text-4xl font-bold text-white">
        <span>ONLY</span>
        <span className="text-[#CDEBFF]">U</span>
        <span>grads</span>
      </div>

      <div className="w-48 h-1 bg-[#48A3EB] rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
