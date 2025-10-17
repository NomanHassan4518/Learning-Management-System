import React from "react";
import { useSpinner } from "../Context/SpinnerContext";

const Spinner = () => {
  const { loading } = useSpinner();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
