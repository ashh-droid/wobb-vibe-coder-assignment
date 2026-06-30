import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-black transition"
          >
            Influencer Finder
          </Link>

          <div className="flex gap-4 text-sm text-gray-600">
            <Link to="/" className="hover:text-black">
              Search
            </Link>
            <Link to="/shortlist" className="hover:text-black">
              Shortlist
            </Link>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-5xl mx-auto p-6">
        {title && (
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
        )}

        {children}
      </main>
    </div>
  );
}