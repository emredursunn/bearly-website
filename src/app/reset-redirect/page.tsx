import { Suspense } from 'react';
import PasswordResetRedirectClient from './PasswordResetRedirectClient';

// Basit bir yükleme durumu bileşeni
function LoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
        <h1 className="text-3xl font-bold text-primary-siyah">Loading...</h1>
    </div>
  )
}

// Bu ana sayfa bileşeni bir Sunucu Bileşenidir (Server Component).
export default function PasswordResetRedirectPage() {
  return (
    // useSearchParams kullanan bileşenimizi Suspense ile sarmalıyoruz.
    // İstemci bileşeni yüklenirken 'fallback' içindeki JSX gösterilir.
    <Suspense fallback={<LoadingFallback />}>
      <PasswordResetRedirectClient />
    </Suspense>
  );
}