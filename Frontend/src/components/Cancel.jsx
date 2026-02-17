import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <div className="bg-white shadow-lg rounded-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          ❌ Payment Cancelled
        </h1>

        <p className="text-gray-600 mb-6">
          Your transaction was cancelled. You can try again anytime.
        </p>

        <Link
          to="/"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Go Back to Shop
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
