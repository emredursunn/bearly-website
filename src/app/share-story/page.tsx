//page.tsx
import { Suspense } from 'react';
import ShareStoryRedirectClient from './ShareStoryRedirectClient';

// Basit bir yükleme durumu bileşeni
function LoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
      <h1 className="text-3xl font-bold text-primary-siyah">Loading...</h1>
    </div>
  );
}

// Bu ana sayfa bileşeni bir Sunucu Bileşenidir (Server Component).
export default function ShareStoryRedirectPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShareStoryRedirectClient />
    </Suspense>
  );
}