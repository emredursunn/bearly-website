// @ts-nocheck
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "How to Delete Your Account | Bearly",
  description: "Learn how to delete your Bearly account and what happens to your data",
};

export default function DeleteAccountPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Site Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto flex-grow px-6 pt-24 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">How to Delete Your Account</h1>

        {/* Main Description */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
          <p className="text-lg leading-relaxed mb-6">
            To delete your account in the Bearly app, follow the path: <strong>Settings {'>'}</strong> <strong>Delete Account</strong> within the application.
          </p>
        </div>

        {/* Data Storage Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
          <p className="leading-relaxed">
            Your stories, usage data, and email information are permanently deleted. They may be retained in system backups for up to 30 days.
          </p>
        </div>

        {/* Additional Information */}
        <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Important Notes</h3>
          <ul className="list-disc pl-6 space-y-2 text-blue-700">
            <li>Account deletion is permanent and cannot be undone</li>
            <li>All your learning progress will be lost</li>
            <li>Any active subscriptions will be cancelled</li>
            <li>You can create a new account at any time</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mt-8 p-6 bg-green-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-green-800">Need Help?</h3>
          <p className="text-green-700">
            If you have any questions about account deletion or need assistance, please contact our support team.
          </p>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
