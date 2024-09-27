import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#EFE7DA] text-neutral-content p-4 text-center  pt-36">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-4 flex justify-evenly">
          <ul className="menu menu-horizontal text-left">
            <li>
              <a href="#" className="hover:text-accent">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Ledger Portal
              </a>
            </li>
          </ul>
          <ul className="text-left">
            <li>
              <a href="#" className="hover:text-accent">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Press
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center space-x-4">
          <a href="#">
            <p> Facebook </p>
          </a>
          <a href="#">
            <p> Instagram </p>
          </a>
          <a href="#">
            <p> Twitter </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
