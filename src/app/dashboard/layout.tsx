"use client";
import Link from "next/link";
import {useState} from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex min-h-screen">
      <aside className={`w-64 bg-gray-800 text-white ${isOpen ? 'block' : 'hidden'} sm:block`}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link href="/admin" legacyBehavior>
                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                  Dashboard
                </a>
              </Link>
            </li>
            <li>
              <Link href="/admin/users" legacyBehavior>
                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                  Users
                </a>
              </Link>
            </li>
            <li>
              <Link href="/admin/settings" legacyBehavior>
                <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                  Settings
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <button
          onClick={toggleMenu}
          className="sm:hidden p-4 text-white bg-gray-800"
        >
          Toggle Menu
        </button>
        {children}
      </main>
    </div>
  )
}
