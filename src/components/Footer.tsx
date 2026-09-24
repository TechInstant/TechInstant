import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Linkedin, Twitter, Youtube, Facebook, Instagram } from './icons';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#05090F] dark:bg-[#05090F] bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">

          {/* Brand & Mission Column */}
          <div className="lg:col-span-3 space-y-5">
            <BrandLogo size="md" />
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Modern technology. Real solutions.<br />A better tomorrow.
            </p>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold text-white font-heading">Products</h4>
            <ul className="space-y-2.5 text-[13px] text-slate-400">
              <li>
                <Link to="/products#twocan" className="hover:text-emerald-400 transition-colors">
                  TwoCan
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="hover:text-emerald-400 transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/products#saas" className="hover:text-emerald-400 transition-colors">
                  SaaS Products
                </Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-emerald-400 transition-colors">
                  TechInstant Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold text-white font-heading">Company</h4>
            <ul className="space-y-2.5 text-[13px] text-slate-400">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#careers" className="hover:text-emerald-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold text-white font-heading">Resources</h4>
            <ul className="space-y-2.5 text-[13px] text-slate-400">
              <li>
                <Link to="/tools" className="hover:text-emerald-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/about#privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about#terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-white font-heading">Stay Connected</h4>
            <p className="text-[13px] text-slate-400 leading-relaxed">
              Get updates, product news and useful tips.
            </p>

            {subscribed ? (
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-100 border border-slate-300 rounded-lg py-2.5 pl-3.5 pr-12 text-[13px] text-slate-900 placeholder-slate-500 outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 w-8 h-8 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center transition"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Social Icons â€” plain white glyphs, as in the brand artwork */}
            <div className="flex items-center gap-4 pt-1">
              {[
                { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
                { href: 'https://x.com', label: 'X', Icon: Twitter },
                { href: 'https://youtube.com', label: 'YouTube', Icon: Youtube },
                { href: 'https://facebook.com', label: 'Facebook', Icon: Facebook },
                { href: 'https://instagram.com', label: 'Instagram', Icon: Instagram },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>Â© {new Date().getFullYear()} TechInstant. All rights reserved.</span>
          <span>Innovating today for a smarter tomorrow.</span>
        </div>
      </div>
    </footer>
  );
};
