import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, Sun, Moon, Monitor, ChevronDown, Menu, X, ArrowRight, 
  Heart, Sparkles, Box, Wrench, Smartphone, Cloud, BarChart3, 
  Compass, Users, BookOpen, HelpCircle, FileCode2
} from './icons';
import { BrandLogo } from './BrandLogo';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenContact: (projectType?: string) => void;
  onOpenAuth: () => void;
}

type MenuId = 'products' | 'solutions' | 'resources';

/* Panel shell shared by every dropdown. The outer element carries the `pt-2`
   gap so the pointer never crosses a dead zone between trigger and panel. */
const menuPanel =
  'absolute top-full pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150';
const menuCard =
  'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl';

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenContact,
  onOpenAuth
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  /* Only one nav menu can ever be open, so panels can't overlap each other. */
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const { theme, setTheme, isDark } = useTheme();
  const location = useLocation();

  const navRef = useRef<HTMLElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  /* Opening is immediate; closing waits a beat so moving the pointer between
     the trigger and its panel — or across to a neighbouring trigger — doesn't
     make the menu flicker shut. */
  const openNow = (id: MenuId) => {
    cancelClose();
    setOpenMenu(id);
  };

  const closeSoon = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const closeNow = () => {
    cancelClose();
    setOpenMenu(null);
  };

  useEffect(() => () => cancelClose(), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    closeNow();
    setThemeDropdownOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeNow();
      }
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeNow();
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070B12]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-1 font-medium text-sm text-slate-600 dark:text-slate-300"
        >
          <Link
            to="/"
            className={`relative px-3.5 py-2 transition-colors ${
              isActive('/') 
                ? 'text-[#05DF72] font-semibold' 
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Home</span>
            {isActive('/') && (
              <span className="absolute -bottom-2 left-3 right-3 h-0.5 bg-[#05DF72] rounded-full"></span>
            )}
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openNow('products')}
            onMouseLeave={closeSoon}
          >
            <button
              onClick={() => setOpenMenu(openMenu === 'products' ? null : 'products')}
              aria-expanded={openMenu === 'products'}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors ${
                location.pathname.startsWith('/products') || openMenu === 'products'
                  ? 'text-emerald-500 dark:text-emerald-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === 'products' ? 'rotate-180 text-emerald-400' : ''}`} />
            </button>

            {openMenu === 'products' && (
              <div className={`${menuPanel} left-0`}>
              <div className={`${menuCard} w-80 p-2`}>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                  TechInstant Ecosystem
                </div>

                <Link
                  to="/products#twocan"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500 shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-sm">TwoCan</span>
                      <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-500 border border-rose-500/20">Featured</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Guided relationship & money conversations for couples.</p>
                  </div>
                </Link>

                <Link
                  to="/products#saas"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                    <Box className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-sm">SaaS Products</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Scalable cloud applications for businesses and creators.</p>
                  </div>
                </Link>

                <Link
                  to="/ai-services"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-sm">AI Solutions</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Intelligent agents, document AI and workflows.</p>
                  </div>
                </Link>

                <Link
                  to="/tools"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-sm">TechInstant Tools</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Free online utilities for everyday productivity.</p>
                  </div>
                </Link>

                <div className="p-2 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                  <Link
                    to="/products"
                    className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition"
                  >
                    <span>View All Products Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openNow('solutions')}
            onMouseLeave={closeSoon}
          >
            <button
              onClick={() => setOpenMenu(openMenu === 'solutions' ? null : 'solutions')}
              aria-expanded={openMenu === 'solutions'}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors ${
                location.pathname.startsWith('/solutions') || openMenu === 'solutions'
                  ? 'text-emerald-500 dark:text-emerald-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === 'solutions' ? 'rotate-180 text-emerald-400' : ''}`} />
            </button>

            {openMenu === 'solutions' && (
              <div className={`${menuPanel} left-1/2 -translate-x-1/2`}>
              <div className={`${menuCard} w-[480px] p-3 grid grid-cols-2 gap-2`}>
                <div className="col-span-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                  Engineering & Digital Services
                </div>

                <Link
                  to="/solutions#ai"
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-xs">AI & Automation</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Streamline workflows with smart systems.</p>
                  </div>
                </Link>

                <Link
                  to="/solutions#web-mobile"
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-xs">Web & Mobile Apps</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">High-performance web, iOS, & Android.</p>
                  </div>
                </Link>

                <Link
                  to="/solutions#cloud"
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500 shrink-0">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-xs">Cloud Solutions</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Scalable, secure cloud infrastructure.</p>
                  </div>
                </Link>

                <Link
                  to="/solutions#data"
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-xs">Data & Analytics</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Turn metrics into actionable insights.</p>
                  </div>
                </Link>

                <Link
                  to="/solutions#strategy"
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-xs">Product Strategy</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Validate and scale digital products.</p>
                  </div>
                </Link>

                <Link
                  to="/solutions#consulting"
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
                >
                  <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-500 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 text-xs">IT Consulting</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Expert transformation guidance.</p>
                  </div>
                </Link>

                <div className="col-span-2 p-1 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                  <Link
                    to="/solutions"
                    className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition"
                  >
                    <span>Explore All Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              </div>
            )}
          </div>

          <Link
            to="/ai-services"
            className={`px-3.5 py-2 rounded-full transition-colors ${
              isActive('/ai-services') 
                ? 'text-emerald-500 dark:text-emerald-400 font-semibold' 
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            AI Services
          </Link>

          <Link
            to="/about"
            className={`px-3.5 py-2 rounded-full transition-colors ${
              isActive('/about') 
                ? 'text-emerald-500 dark:text-emerald-400 font-semibold' 
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            About
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openNow('resources')}
            onMouseLeave={closeSoon}
          >
            <button
              onClick={() => setOpenMenu(openMenu === 'resources' ? null : 'resources')}
              aria-expanded={openMenu === 'resources'}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors ${
                openMenu === 'resources'
                  ? 'text-emerald-500 dark:text-emerald-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Resources</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === 'resources' ? 'rotate-180 text-emerald-400' : ''}`} />
            </button>

            {openMenu === 'resources' && (
              <div className={`${menuPanel} right-0`}>
              <div className={`${menuCard} w-64 p-2`}>
                <Link
                  to="/tools"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <FileCode2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Free Tools Suite</span>
                </Link>
                <a
                  href="#documentation"
                  onClick={(e) => { e.preventDefault(); onOpenSearch(); }}
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Documentation</span>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Help & Support</span>
                </Link>
              </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Action Icons & Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition"
            title="Search (Ctrl+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Theme Selector with 1-click toggle and dropdown */}
          <div className="relative" ref={themeRef}>
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              onContextMenu={(e) => { e.preventDefault(); setThemeDropdownOpen(!themeDropdownOpen); }}
              className="p-2 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-800/80 transition"
              title={`Theme: ${theme.toUpperCase()} (Click to toggle)`}
            >
              {isDark ? (
                <Moon className="w-4 h-4 text-emerald-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </button>
          </div>

          {/* Sign In Button */}
          <button
            onClick={onOpenAuth}
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-white transition"
          >
            Sign In
          </button>

          {/* Get Started Button */}
          <button
            onClick={() => onOpenContact()}
            className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-tight shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
          >
            <span>Get Started</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white/95 dark:bg-[#070B12]/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-y-auto z-40 animate-in slide-in-from-top duration-200">
          <div className="space-y-4">
            <Link
              to="/"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-500"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-500"
            >
              Products Directory
            </Link>
            <Link
              to="/solutions"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-500"
            >
              Solutions & Services
            </Link>
            <Link
              to="/ai-services"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-500"
            >
              AI Services
            </Link>
            <Link
              to="/about"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-500"
            >
              About TechInstant
            </Link>
            <Link
              to="/tools"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-500"
            >
              Free Tools
            </Link>
            <Link
              to="/contact"
              className="block text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-500"
            >
              Contact Us
            </Link>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Theme</span>
              <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <button 
                  onClick={() => setTheme('light')} 
                  className={`p-2 rounded-lg text-xs ${theme === 'light' ? 'bg-white dark:bg-slate-700 shadow text-emerald-500' : 'text-slate-400'}`}
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setTheme('dark')} 
                  className={`p-2 rounded-lg text-xs ${theme === 'dark' ? 'bg-white dark:bg-slate-700 shadow text-emerald-400' : 'text-slate-400'}`}
                >
                  <Moon className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setTheme('system')} 
                  className={`p-2 rounded-lg text-xs ${theme === 'system' ? 'bg-white dark:bg-slate-700 shadow text-emerald-400' : 'text-slate-400'}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
              className="w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Sign In
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20"
            >
              Get Started — Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
