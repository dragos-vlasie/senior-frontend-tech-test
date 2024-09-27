import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-[url('/ffern-hero.png')] bg-cover bg-center min-h-52">
      <header className="flex bg-neutral text-neutral-content p-4 max-w-6xl mx-auto">
        <div className="flex-1">
          <Link href="/" className="w-min">
            <img src="/ffern-white.svg" alt="Ffern" className="h-5" />
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
