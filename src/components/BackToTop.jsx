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
      <div className="fixed bottom-8 right-4 z-50">
        <button
          onClick={handleScrollToTop}
          className="bg-gradient-to-b from-green-400 to-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105 px-4 py-2"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    )
  );
};

export default BackToTop;
