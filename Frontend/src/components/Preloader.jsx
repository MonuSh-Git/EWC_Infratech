import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
      if (preloader) preloader.style.display = "none";
    }, 2000);
  }, []);

  return (
    <div
      id="preloader"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Spinner Bars */}
        <div className="absolute w-full h-full border-4 border-amber-600 animate-spin rounded-full"></div>
        <div className="absolute w-12 h-12 border-4 border-amber-600 border-t-transparent animate-spin rounded-full"></div>
        <div className="absolute w-8 h-8 border-4 border-amber-600 border-t-transparent animate-spin rounded-full"></div>
      </div>
    </div>
  );
};

export default Preloader;
