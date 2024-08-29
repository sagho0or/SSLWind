// /pages/404.tsx
import React from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">404 - This page could not be found</h1>
      <p className="mt-2">Sorry, the page you're looking for doesn't exist.</p>
      <button onClick={() => router.push('/')} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go to Home
      </button>
    </div>
  );
}
