import React from "react";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="relative flex flex-col items-center">
        {/* Rotating Coin */}
        <div className="coin-container h-32 w-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 animate-spin-slow shadow-xl border-4 border-yellow-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">💰</span>
          </div>
        </div>

        {/* Loading Message */}
        <h1 className="mt-8 text-2xl font-semibold text-gray-200">
          Organizing your expenses...
        </h1>
        <p className="mt-2 text-gray-400">
          Hang tight! We’re counting your savings. 🚀
        </p>
      </div>
    </div>
  );
}

export default Loading;