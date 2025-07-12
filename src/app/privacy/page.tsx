// @ts-nocheck
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Bearly",
  description: "Privacy policy for Bearly",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Site Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto flex-grow px-6 pt-24 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        {/* Introduction */}
        <p className="mb-6 leading-relaxed">
          At Bearly, we value the privacy and protection of our users' personal data. This privacy policy explains what information we collect when you use the Bearly mobile application, how we use this information, and how we protect it.
        </p>

        {/* 1. Information Collected */}
        <h2 className="text-2xl font-semibold mb-4">1. Information Collected</h2>
        <p className="mb-4">When using the Bearly app, we may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Personal Information:</strong> Name, email address, and other information you provide optionally.
          </li>
          <li>
            <strong>Device Information:</strong> Device model, operating system, app version, language preference, and other technical information.
          </li>
          <li>
            <strong>Usage Data:</strong> Your in-app activities, learning habits, and purchase history.
          </li>
          <li>
            <strong>Purchase Information:</strong> Information obtained through payment providers (Google Play / App Store) during in-app purchases.
          </li>
        </ul>
        <p className="italic mb-8">
          Note: Payment information (credit cards, etc.) is obtained directly through Google/Apple, and Bearly cannot access this information.
        </p>

        {/* 2. Use of Information */}
        <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
        <p className="mb-4">The data we collect is used for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>To improve the performance and content of the application,</li>
          <li>To provide personalized content,</li>
          <li>To manage subscriptions and purchase transactions,</li>
          <li>To respond to your feedback,</li>
          <li>To comply with legal obligations.</li>
        </ul>

        {/* 3. Sharing with Third Parties */}
        <h2 className="text-2xl font-semibold mb-4">3. Sharing with Third Parties</h2>
        <p className="mb-4">Your data is not shared with third parties except in the following cases:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>With authorized authorities in cases of legal obligation,</li>
          <li>With service providers used for app analytics and error tracking (e.g., Firebase, Google Analytics).</li>
        </ul>

        {/* 4. Data Storage */}
        <h2 className="text-2xl font-semibold mb-4">4. Data Storage</h2>
        <p className="mb-8 leading-relaxed">
          Collected data is stored only for as long as necessary and in accordance with applicable laws. Necessary security measures are taken to prevent unauthorized access to your data.
        </p>

        {/* 5. User Rights */}
        <h2 className="text-2xl font-semibold mb-4">5. User Rights</h2>
        <p className="mb-4">As a user, you have the following rights:</p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>To learn what data is collected about you,</li>
          <li>To request correction or deletion of your data,</li>
          <li>To object to data processing.</li>
        </ul>
        <p className="mb-8 leading-relaxed">
          To exercise these rights, you can contact us via the email address below. <a href="mailto:bearly384@gmail.com">bearly384@gmail.com</a>
        </p>

        {/* 6. Children's Privacy */}
        <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
        <p className="mb-8 leading-relaxed">
          Our application is not intended for children under 13 years of age.
        </p>

        {/* 7. Changes to Privacy Policy */}
        <h2 className="text-2xl font-semibold mb-4">7. Changes to Privacy Policy</h2>
        <p className="leading-relaxed">
          This privacy policy may be updated from time to time. Changes are announced within the application or on relevant platforms.
        </p>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
