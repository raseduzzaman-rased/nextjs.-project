'use client';
import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
