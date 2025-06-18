'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PasswordResetRedirectPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      const deepLink = `bearlyapp://reset-password?token=${token}`;
      window.location.href = deepLink;
    }
  }, [token]);

  const handleRedirectClick = () => {
    if (token) {
        const deepLink = `bearlyapp://reset-password?token=${token}`;
        window.location.href = deepLink;
    }
  };

  if (!token) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
            <h1 className="text-3xl font-bold text-primary-siyah mb-2">Invalid Reset Link</h1>
            <p className="text-lg text-gray-600">The password reset link is missing a token.</p>
        </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
      <h1 className="text-4xl font-bold text-primary-siyah mb-2">Redirecting to App...</h1>
      <p className="text-lg text-gray-600 mb-4">If the app doesn’t open automatically, click below.</p>
      <button onClick={handleRedirectClick} className="bg-primary-mor text-primary-beyaz px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors mb-4">
        Open in App
      </button>
      <p className="text-sm text-gray-500">Having trouble? Make sure the Bearly app is installed on your device.</p>
    </div>
  );
}
