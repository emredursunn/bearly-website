'use client';

import { useEffect, useState } from 'react';
// useSearchParams'i artık kullanmıyoruz çünkü işe yaramıyor.
// import { useSearchParams } from 'next/navigation';

export default function PasswordResetRedirectClient() {
  // Token'ı bir state içinde tutacağız.
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Bu useEffect yalnızca bileşen ilk yüklendiğinde bir kez çalışacak.
    // window nesnesine eriştiğimiz için client-side'da çalışması garantidir.
    
    const hash = window.location.hash;
    if (hash) {
      // Fragment'ı (#) kaldırıp bir URLSearchParams nesnesine dönüştürüyoruz.
      // Örnek hash: #access_token=...&expires_in=...
      // `substring(1)` ile '#' karakterini atlıyoruz.
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get('access_token');

      // Supabase'in bir hata iletmesi durumunda bunu da yakalayabiliriz.
      const errorDescription = params.get('error_description');

      if (errorDescription) {
        setError(decodeURIComponent(errorDescription));
        return;
      }
      
      if (accessToken) {
        setToken(accessToken);
        // Token'ı bulduğumuz an otomatik yönlendirmeyi tetikliyoruz.
        const deepLink = `bearlyapp://auth/reset-password?token=${accessToken}`;
        window.location.href = deepLink;
      }
    }
  }, []); // Boş dependency array, sadece bir kez çalışmasını sağlar.

  const handleRedirectClick = () => {
    if (token) {
      const deepLink = `bearlyapp://auth/reset-password?token=${token}`;
      window.location.href = deepLink;
    }
  };

  if (error) {
     return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
            <h1 className="text-3xl font-bold text-red-600 mb-2">An Error Occurred</h1>
            <p className="text-lg text-gray-600">{error}</p>
        </div>
    )
  }

  // Henüz token state'e set edilmediyse veya URL'de hiç token yoksa
  // bu fallback arayüzünü gösteriyoruz.
  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
        <h1 className="text-3xl font-bold text-primary-siyah mb-2">Processing...</h1>
        <p className="text-lg text-gray-600">Please wait while we process your request.</p>
        {/* Opsiyonel olarak, kullanıcıya bir süre sonra hata mesajı gösterilebilir */}
      </div>
    );
  }

  // Token başarıyla alındıysa, kullanıcıya manuel tıklama seçeneği sunulur.
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