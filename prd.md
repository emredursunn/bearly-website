🎯 Amaç (Purpose)

Bu proje, Bearly adlı mobil dil öğrenme uygulamasının tanıtımını yapmak, kullanıcı e-posta onay süreçlerini yönetmek ve şifre sıfırlama yönlendirmelerini sağlamak için üç sayfalık modern ve etkili bir web sitesi oluşturmayı amaçlar.
📄 Sayfa Listesi (Pages)
1. Landing Page (Ana Tanıtım Sayfası)
📌 Amaç:

Uygulamayı tanıtmak, kullanıcıyı App Store ve Google Play’e yönlendirmek.
🧩 İçerik:

    Uygulama logosu (/public/bearly.png)

    Başlık: "Learn Languages Through Stories"

    Alt Başlık: "Fun. Effective. Personalized."

    Uygulama özellikleri:

        AI destekli hikayelerle öğrenim

        Tıklanabilir kelimeler ve seslendirme

        Kişiye özel içerik oluşturma

    Ekran görüntüsü mockup (örnek story ekranı gibi)

    App Store ve Play Store butonları

    Basit ama samimi illüstrasyon veya şekiller

    Footer (hakkında | gizlilik | iletişim)

🎨 Stil:

    Renk Paleti:

        Mor: #9B5DE5

        Siyah: #1A1A1A

        Beyaz: #FFFFFF

    Font: Modern sans-serif (örnek: Inter, Poppins)

    Stil: Eğlenceli ama profesyonel, genç hedef kitleye hitap eden tasarım

    Animasyon: Buton hover, section fade-in, hafif geçiş efektleri

2. Email Confirmation Page (E-posta Onay Sayfası)
📌 Amaç:

Kullanıcı e-posta onay linkine tıkladığında başarılı geri bildirim vermek.
🧩 İçerik:

    Başlık: “Email Verified Successfully!”

    Alt metin: “Your account is now ready. You can start learning!”

    App Store & Play Store butonları

    Küçük illüstrasyon veya ikon (✅ vb.)

3. Password Reset Redirect Page (Şifre Sıfırlama Yönlendirme Sayfası)
📌 Amaç:

Kullanıcı şifre sıfırlama linkine tıkladığında deep link ile uygulamaya yönlendirme işlemini başlatmak.
🧩 İçerik:

    Başlık: “Redirecting to App...”

    Alt metin: “If the app doesn’t open automatically, click below.”

    Buton: Open in App

        href="bearlyapp://reset-password?token=XYZ" (örnek)

    Bilgilendirici metin: “Having trouble? Make sure the app is installed.”

⚠️ Teknik Not:

    Sayfa yüklenir yüklenmez window.location.href = 'bearlyapp://reset-password?token=XYZ' gibi bir yönlendirme yapılacak.

    Token URL parametresiyle alınmalı (?token= ile).

📱 Mobil Uyumluluk (Responsiveness)

Tüm sayfalar mobil ve tablet uyumlu olmalıdır. Özellikle yönlendirme butonları ve store linkleri mobil kullanıcılar için önceliklidir.
🔐 Güvenlik

    Token, URL üzerinden alınırken XSS veya injection saldırılarına karşı arındırılmalı.

    Şifre sıfırlama sayfası kullanıcıya yalnızca yönlendirme amaçlı bilgi göstermeli, işlem doğrudan uygulamada yapılmalı.

🗂️ Dosya Yapısı

/public
  - bearly.png


/src
  /app
    /page.tsx                  ← Landing Page ("/")
    /confirm
      /page.tsx                ← Email Confirmation Page ("/confirm")
    /reset-redirect
      /page.tsx                ← Password Reset Redirect Page ("/reset-redirect")
    /components
    ...
    /styles
      - globals.css

/styles
  - globals.css         // Tailwind veya global stil dosyası

🛠️ Teknolojiler

    Next.js 15 (veya sizin seçtiğiniz sürüm)

    TailwindCSS ile responsive ve modern tasarım

🔗 Store Linkleri (örnek)

    App Store

    Google Play
