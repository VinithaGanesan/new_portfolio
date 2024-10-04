import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <div className="fixed z-50 bottom-8 right-4">
        <button
          onClick={handleScrollToTop}
          className="px-4 py-2 text-white transition-transform duration-300 transform rounded-full shadow-lg bg-gradient-to-b from-green-400 to-blue-500 hover:bg-blue-600 hover:scale-105"
          aria-label="Back to top"
        >
          Back ↑
        </button>
      </div>
    )
  );
};

export default BackToTop;
