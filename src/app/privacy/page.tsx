// @ts-nocheck
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Gizlilik Politikası | Bearly",
  description: "Bearly için gizlilik politikası",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Site Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto flex-grow px-6 pt-24 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Gizlilik Politikası</h1>

        {/* Introduction */}
        <p className="mb-6 leading-relaxed">
          Bearly olarak, kullanıcılarımızın gizliliğini ve kişisel verilerinin korunmasını önemsiyoruz. Bu gizlilik politikası, Bearly mobil uygulamasını kullandığınızda hangi bilgileri topladığımızı, bu bilgileri nasıl kullandığımızı ve koruduğumuzu açıklamaktadır.
        </p>

        {/* 1. Toplanan Bilgiler */}
        <h2 className="text-2xl font-semibold mb-4">1. Toplanan Bilgiler</h2>
        <p className="mb-4">Bearly uygulamasını kullanırken aşağıdaki türde bilgileri toplayabiliriz:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Kişisel Bilgiler:</strong> İsteğe bağlı olarak sağladığınız isim, e-posta adresi vb. bilgiler.
          </li>
          <li>
            <strong>Cihaz Bilgileri:</strong> Cihaz modeli, işletim sistemi, uygulama sürümü, dil tercihi gibi teknik bilgiler.
          </li>
          <li>
            <strong>Kullanım Verileri:</strong> Uygulama içi hareketleriniz, öğrenme alışkanlıklarınız ve satın alma geçmişiniz.
          </li>
          <li>
            <strong>Satın Alma Bilgileri:</strong> Uygulama içi satın alımlar sırasında ödeme sağlayıcıları (Google Play / App Store) aracılığıyla alınan bilgiler.
          </li>
        </ul>
        <p className="italic mb-8">
          Not: Ödeme bilgileri (kredi kartı vb.) doğrudan Google/Apple üzerinden alınır, Bearly bu bilgilere erişemez.
        </p>

        {/* 2. Bilgilerin Kullanımı */}
        <h2 className="text-2xl font-semibold mb-4">2. Bilgilerin Kullanımı</h2>
        <p className="mb-4">Topladığımız veriler aşağıdaki amaçlarla kullanılır:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Uygulamanın performansını ve içeriğini geliştirmek,</li>
          <li>Kişiselleştirilmiş içerikler sunmak,</li>
          <li>Abonelik ve satın alma işlemlerini yönetmek,</li>
          <li>Geri bildirimlerinize yanıt vermek,</li>
          <li>Yasal yükümlülüklere uymak.</li>
        </ul>

        {/* 3. Üçüncü Taraflarla Paylaşım */}
        <h2 className="text-2xl font-semibold mb-4">3. Üçüncü Taraflarla Paylaşım</h2>
        <p className="mb-4">Verileriniz, aşağıdaki durumlar dışında üçüncü kişilerle paylaşılmaz:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Yasal zorunluluk durumlarında yetkili mercilerle,</li>
          <li>Uygulama analitiği ve hata takibi için kullanılan hizmet sağlayıcılarla (örneğin Firebase, Google Analytics).</li>
        </ul>

        {/* 4. Verilerin Saklanması */}
        <h2 className="text-2xl font-semibold mb-4">4. Verilerin Saklanması</h2>
        <p className="mb-8 leading-relaxed">
          Toplanan veriler, yalnızca gerekli olduğu sürece ve yürürlükteki yasalara uygun olarak saklanır. Verilerinize yetkisiz erişimi önlemek için gerekli güvenlik önlemleri alınır.
        </p>

        {/* 5. Kullanıcı Hakları */}
        <h2 className="text-2xl font-semibold mb-4">5. Kullanıcı Hakları</h2>
        <p className="mb-4">Kullanıcı olarak aşağıdaki haklara sahipsiniz:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Hakkınızda hangi verilerin toplandığını öğrenme,</li>
          <li>Verilerinizi düzeltme veya silme talebi,</li>
          <li>Veri işlenmesine itiraz etme.</li>
        </ul>
        <p className="mb-8 leading-relaxed">
          Bu haklardan faydalanmak için bizimle aşağıdaki e-posta adresi üzerinden iletişime geçebilirsiniz.
        </p>

        {/* 6. Çocukların Gizliliği */}
        <h2 className="text-2xl font-semibold mb-4">6. Çocukların Gizliliği</h2>
        <p className="mb-8 leading-relaxed">
          Uygulamamız 13 yaş altındaki çocuklara yönelik değildir. 13 yaşın altındaki kullanıcılardan bilerek kişisel bilgi toplamıyoruz.
        </p>

        {/* 7. Gizlilik Politikasında Değişiklikler */}
        <h2 className="text-2xl font-semibold mb-4">7. Gizlilik Politikasında Değişiklikler</h2>
        <p className="leading-relaxed">
          Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler uygulama içinde veya ilgili platformlarda duyurulur.
        </p>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
