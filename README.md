Deal Drop
Deal Drop is a real-time price tracking application built with Next.js. It allows users to monitor prices from any e-commerce site and receive instant alerts when a price drop is detected.

Features
Lightning Fast Extraction: The app extracts product prices in seconds, effectively handling JavaScript and dynamic content.

Reliable Scraping: It works across major e-commerce platforms using built-in anti-bot protection.

Smart Alerts: Users are notified immediately when a product's price falls below their specified target.

Price History: Tracks price changes over time, allowing users to view historical data for their tracked items.

AI-Powered: Utilizes AI and real-time web scraping for accurate data retrieval.

Tech Stack
Framework: Next.js 16

Authentication & Database: Supabase

Web Scraping: Firecrawl

Styling: Tailwind CSS

Email Notifications: Resend

UI Components: Radix UI, Lucide React, and Sonner

Charts: Recharts for price history visualization

Getting Started
Development Server
To start the development server, use one of the following commands:

Bash

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
The application will be accessible at http://localhost:3000.

Environment Configuration
The project requires integration with several services. Ensure you have the following set up:

Supabase: For database management and user authentication.

Firecrawl: For extracting product data from URLs.

Resend: For handling email alerts.

Usage
Authentication: Users must sign in to track products.

Tracking Products: Paste a product URL into the AddProductForm to begin tracking.

Managing Products: View all tracked items on the home page dashboard, where you can see current prices and delete items you no longer wish to follow

