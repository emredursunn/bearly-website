//ShareStoryRedirectClient.tsx
'use client';
import { useEffect, useState } from 'react';

export default function ShareStoryRedirectClient() {
  const [storyId, setStoryId] = useState<string | null>(null);
  const [storyType, setStoryType] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // URL'den story ID ve type parametrelerini al
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id'); // URL'nin son kısmından ID'yi al
    const type = url.searchParams.get('type');

    if (!type) {
      setError('Story Url is not valid');
      return;
    }
    if (!id) {
      setError('Story Url is not valid');
      return;
    }

    setStoryId(id);
    setStoryType(type || 'default'); // type yoksa default kullan

    // Parametreleri bulduğumuz an otomatik yönlendirmeyi tetikle
    const deepLink = `bearlyapp://story/${id}${type ? `?type=${type}` : ''}`;
    window.location.href = deepLink;
  }, []);

  const handleRedirectClick = () => {
    if (storyId) {
      const deepLink = `bearlyapp://story/${storyId}${storyType ? `?type=${storyType}` : ''}`;
      window.location.href = deepLink;
    }
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
        <h1 className="text-3xl font-bold text-red-600 mb-2">An Error Occurred</h1>
        <p className="text-lg text-gray-600">{error}</p>
      </div>
    );
  }

  // Henüz story ID alınmadıysa loading göster
  if (!storyId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
        <h1 className="text-3xl font-bold text-primary-siyah mb-2">Processing...</h1>
        <p className="text-lg text-gray-600">Please wait while we process your request.</p>
      </div>
    );
  }

  // Story ID başarıyla alındıysa, kullanıcıya manuel tıklama seçeneği sun
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
      <h1 className="text-4xl font-bold text-primary-siyah mb-2">Opening Story...</h1>
      <p className="text-lg text-gray-600 mb-4">If the app doesn't open automatically, click below.</p>
      <button 
        onClick={handleRedirectClick} 
        className="bg-primary-mor text-primary-beyaz px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors mb-4"
      >
        Open Story in App
      </button>
      <p className="text-sm text-gray-500">Having trouble? Make sure the Bearly app is installed on your device.</p>
    </div>
  );
}
