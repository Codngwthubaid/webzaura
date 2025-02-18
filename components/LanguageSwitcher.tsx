"use client";
import { useState } from "react";
import Link from "next/link";

export const LanguageSwitcher = ({ lang }: { lang: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi" },
  ];

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        {languages.find((l) => l.code === lang)?.name || "Select Language"}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <Link
                  href={`/${language.code}`}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)} // Close dropdown on selection
                >
                  {language.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};