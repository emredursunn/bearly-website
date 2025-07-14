// @ts-nocheck
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Delete My Story | Bearly",
  description: "Learn how to delete your stories and data in Bearly app",
};

export default function DeleteMyStoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Site Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto flex-grow px-6 pt-24 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Delete My Story</h1>

        {/* App Reference */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bearly App - Story Deletion</h2>
          <p className="text-lg leading-relaxed">
            This page explains how to delete your stories and associated data in the <strong>Bearly</strong> mobile application.
          </p>
        </div>

        {/* How to Delete Stories */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">How to Delete Your Stories</h2>
          <p className="mb-4 text-blue-700">
            To delete a story you created in the Bearly app, follow these steps:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-blue-700">
            <li>Open the Bearly app on your device</li>
            <li>Navigate to the story you want to delete</li>
            <li>Tap the menu icon (⋮) in the top-right corner of the story</li>
            <li>Select "Delete Story" from the menu options</li>
            <li>Confirm the deletion when prompted</li>
          </ol>
        </div>

        {/* Data Types and Storage */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Types and Storage</h2>
          
          <h3 className="text-xl font-semibold mb-3">Deleted Data:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Story content and text</li>
            <li>Story title and description</li>
            <li>Learning progress associated with the story</li>
            <li>Personal notes and annotations</li>
            <li>Story preferences and settings</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Data Retention:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Deleted stories are permanently removed from our active databases</li>
            <li>Story data may be retained in system backups for up to 30 days</li>
            <li>Usage analytics data (anonymized) may be retained for up to 90 days for service improvement</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Data Not Affected:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your account information and profile</li>
            <li>Other stories you have created</li>
            <li>App preferences and settings</li>
            <li>Subscription and payment information</li>
          </ul>
        </div>

        {/* Additional Information */}
        <div className="bg-orange-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-800">Important Notes</h2>
          <ul className="list-disc pl-6 space-y-2 text-orange-700">
            <li>Story deletion is permanent and cannot be undone</li>
            <li>Deleting a story will also remove all associated learning progress</li>
            <li>If you have shared the story with others, they will no longer be able to access it</li>
            <li>You can create new stories at any time</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bg-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Need Help?</h2>
          <p className="text-green-700 mb-4">
            If you have any questions about deleting your stories or need assistance, please contact our support team.
          </p>
          <p className="text-green-700">
            Email: <a href="mailto:bearly384@gmail.com" className="underline hover:text-green-800">bearly384@gmail.com</a>
          </p>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
