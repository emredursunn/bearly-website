import { CheckCircle } from 'lucide-react';

export default function EmailConfirmationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-beyaz text-center p-4">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-4xl font-bold text-primary-siyah mb-2">Email Verified Successfully!</h1>
      <p className="text-lg text-gray-600 mb-8">Your account is now ready. You can start learning!</p>
      <div className="flex space-x-4">
        <a href="#" className="bg-primary-siyah text-primary-beyaz px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">App Store</a>
        <a href="#" className="bg-primary-siyah text-primary-beyaz px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">Google Play</a>
      </div>
    </div>
  );
}
