import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF7]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="-mt-28 -mb-12 z-10 flex-grow p-4 bg-[#F5F2EC] max-w-5xl w-[90%] mx-auto [box-shadow:2px_2px_4px_0px_#03030226] rounded-lg">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
