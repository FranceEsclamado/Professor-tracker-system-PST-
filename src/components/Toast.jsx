import React, { useEffect } from "react";

const Toast = ({ message, type = "success" }) => {
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className="fixed top-5 right-5 z-50 animate-fade-in">
      <div className={`${colors[type]} text-white px-5 py-3 rounded-xl shadow-lg`}>
        {message}
      </div>
    </div>
  );
};

export default Toast;