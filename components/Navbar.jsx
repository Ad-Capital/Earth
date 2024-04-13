'use client';

import Rounded from "@/constants/RoundedButtons"
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const smoothScroll = (href) => (e) => {
  e.preventDefault();
  const sectionId = href.replace(/^#/, '');
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`mb-0 py-8 sm:px-14 px-6 bg-[#F3F3F3] top-0 w-full z-50 fixed ${isScrolled ? 'shadow-md' : ''}`}>
      <div className={`mx-auto flex justify-between items-center gap-8`}>
        <div className="w-[180px] h-[50px]">
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="w-[60px] h-[60px] object-contain" />
          </Link>
        </div>
        <div className="hidden lg:flex gap-8">
          <NavLink href="#about">About</NavLink>
          <Link href="/roadmap" className="font-bold nav">Roadmap</Link>
          <NavLink href="#FAQ">FAQs</NavLink>
          <NavLink href="#market">Marketplace</NavLink>
          <Link href="/" className="font-bold nav">Store</Link>
        </div>
        <div className="hidden lg:flex">
          <Rounded><p className='text-white font-bold'>Join Community</p></Rounded>
        </div>
        <div className="lg:hidden flex justify-end items-center">
          <div className='flex justify-center items-center'>
            <button
              className="block lg:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <IoMdClose className="h-6 w-6 text-white" />
              ) : (
                <IoMdMenu className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`mobile-menu  bg-slate-50 lg:hidden fixed top-0 left-0 w-full h-full shadow z-50 overflow-y-auto transition-transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="flex flex-col h-full mobile-menu-gradient sm:px-12">
            <div className='flex flex-row w-full px-6 py-8'>
              <div className="w-[180px] h-[50px]">
                <Link href="/">
                  <img src="/roadMapLogo.svg" alt="logo" className="w-[60px] h-[60px] object-contain" />
                </Link>
              </div>
              <div className="flex justify-end w-full">
                <div className='flex justify-center items-center'>
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
              <Link href="/roadmap" className="block pb-5 pl-10 font-bold w-full" onClick={toggleMobileMenu}>
                Roadmap
              </Link>
              <MobileNavItem href="#FAQ" onClick={toggleMobileMenu}>
                FAQs
              </MobileNavItem>
              <MobileNavItem href="#market" onClick={toggleMobileMenu}>
                Marketplace (Coming soon)
              </MobileNavItem>
              <Link href="/About" className="block pb-5 pl-10 font-bold w-full" onClick={toggleMobileMenu}>
                Go to Store
              </Link>
              <div className='p-4'><Rounded><p className='font-bold'>Join the discord community</p></Rounded></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileNavItem = ({ href, children, onClick }) => (
  <a href={href} className="block pb-5 pl-10 font-bold w-full " onClick={(e) => {smoothScroll(href)(e); if(onClick) onClick();}}>
    {children}
  </a>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="font-bold nav" onClick={smoothScroll(href)}>
    {children}
  </a>
);

export default Navbar;
