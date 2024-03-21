'use client';

import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Rounded from "@/constants/RoundedButtons"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-8 sm:px-14 px-4 relative bg-[#F3F3F3]">
      <div className={`mx-auto flex justify-between items-center gap-8`}>
        <div className="w-[180px] h-[50px]">
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="w-[60px] h-[60px] object-contain" />
          </Link>
        </div>
        <div className="lg:hidden flex justify-end items-center">
          <div className='rounded-full buttonGradient h-[60px] w-[60px] flex justify-center items-center'>
            <button
              className="block lg:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <IoMdClose className="h-6 w-6 text-white" />
              ) : (
                <IoMdMenu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`mobile-menu bg-slate-50 bg-opacity-95 lg:hidden fixed top-0 left-0 w-full h-full shadow z-50 overflow-y-auto transition-transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >

          <div className="flex flex-col h-full mobile-menu-gradient">
            <div className='flex flex-row w-full'>
              <div className="w-[180px] h-[50px] py-8 pl-4">
                <Link href="/">
                  <img src="/roadMapLogo.svg" alt="logo" className="w-[60px] h-[60px] object-contain" />
                </Link>
              </div>
              <div className="flex justify-end w-full pt-8 pr-4">
                <div className='rounded-full buttonGradient h-[60px] w-[60px] flex justify-center items-center'>
                  <button
                    className="block lg:hidden"
                    onClick={toggleMobileMenu}
                  >
                    {isMobileMenuOpen ? (
                      <IoMdClose className="h-6 w-6 text-white" />
                    ) : (
                      <IoMdMenu className="h-6 w-6 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-[50px] text-white">
              <MobileNavItem href="#about" onClick={toggleMobileMenu}>
                About
              </MobileNavItem>
              <MobileNavItem href="/roadmap" onClick={toggleMobileMenu}>
                Roadmap
              </MobileNavItem>
              <MobileNavItem href="#FAQ" onClick={toggleMobileMenu}>
                FAQs
              </MobileNavItem>
              <MobileNavItem href="#market" onClick={toggleMobileMenu}>
                Marketplace (Coming soon)
              </MobileNavItem>
              <MobileNavItem href="/About" onClick={toggleMobileMenu}>
                Go to Store
              </MobileNavItem>
              <div className='p-4'><Rounded><p className='font-bold'>Join the discord community</p></Rounded></div>
            </div>
          </div>
        </div>
        {/* Desktop navigation */}
        <div className="hidden lg:flex gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="/roadmap">Roadmap</NavLink>
          <NavLink href="#FAQ">FAQs</NavLink>
          <NavLink href="#market">Marketplace</NavLink>
          <NavLink href="/About">Store</NavLink>
        </div>
        <div className="hidden lg:flex">
          <Rounded><p className='text-white font-bold'>Join Community</p></Rounded>
        </div>
      </div>
    </nav>
  );
};

const MobileNavItem = ({ href, children, onClick }) => (
  <Link href={href}>
    <div className="block pb-5 pl-10 border-b border-gray-300 font-bold w-full nav" onClick={onClick}>
      {children}
    </div>
  </Link>
);

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <div className="font-bold nav">{children}</div>
  </Link>
);

export default Navbar;
