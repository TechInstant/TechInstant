import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Play, Heart, Sparkles, Box, Wrench, Cpu, Smartphone, 
  Cloud, BarChart3, Lightbulb, Users, ShieldCheck, Clock, Layers
} from '../icons';
import { HeroVisual } from '../HeroVisual';
import { Typewriter } from '../Typewriter';

interface HomepageProps {
  onOpenVideo: () => void;
  onOpenContact: (projectType?: string) => void;
}

export const Homepage: React.FC<HomepageProps> = ({ onOpenVideo, onOpenContact }) => {
  return (
    <div className="relative overflow-hidden pt-20 transition-colors duration-200">
      
      {/* =========================================================================
          HERO SECTION (2-Column Side-by-Side Matching UI Screenshot)
         ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center pt-8 pb-14 px-4 sm:px-6 lg:px-8 bg-[#070B14] text-white overflow-hidden">
        {/* Ambient background glow & subtle grid */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Text & CTAs (5 cols) */}
            <div className="lg:col-span-5 space-y-5 text-left">
              
              {/* Badge: Your Ideas. Our Technology. */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Your Ideas. Our Technology.</span>
              </div>

              {/* Main Headline — narrated one character at a time */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.08]">
                <Typewriter
                  lines={[
                    { text: 'Build Smarter.' },
                    { text: 'Grow Faster.', className: 'text-[#05DF72]' },
                  ]}
                />
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
                TechInstant is a technology company building modern SaaS products, AI solutions and digital services to help individuals, businesses and organizations solve real problems and achieve more.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/products"
                  className="px-6 py-3 rounded-full bg-[#05DF72] hover:bg-[#04BE60] text-slate-950 font-bold text-sm flex items-center gap-2 transition shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={onOpenVideo}
                  className="px-6 py-3 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/90 text-white font-semibold text-sm flex items-center gap-2 transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-white" />
                  <span>Watch Our Story</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Laptop & Mobile Mockup (7 cols) */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          OUR PRODUCTS SECTION (Clean White / Dark Grid)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A101D] text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#05DF72]">
                OUR PRODUCTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
                Innovative Products for<br />Real-World Needs
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We build products that make life easier, work faster, and open new opportunities.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#05DF72] hover:bg-[#04BE60] text-slate-950 font-bold text-xs sm:text-sm self-start sm:self-auto transition shadow-sm"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Products Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. TwoCan */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F43F5E] flex items-center justify-center mb-5 text-white shadow-md shadow-rose-500/20">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  TwoCan
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Guided conversations, money plans and relationship tools for couples — whether you&apos;re single, dating, or married.
                </p>
              </div>
              <Link
                to="/products#twocan"
                className="mt-6 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1.5 transition group-hover:translate-x-0.5"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 2. AI Solutions */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#A855F7] flex items-center justify-center mb-5 text-white shadow-md shadow-purple-500/20">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  AI Solutions
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Custom AI solutions, automation, and intelligent systems to boost productivity and solve complex problems.
                </p>
              </div>
              <Link
                to="/ai-services"
                className="mt-6 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1.5 transition group-hover:translate-x-0.5"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3. SaaS Products */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#10B981] flex items-center justify-center mb-5 text-white shadow-md shadow-emerald-500/20">
                  <Box className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  SaaS Products
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Powerful, scalable software products for businesses, creators and organizations.
                </p>
              </div>
              <Link
                to="/products#saas"
                className="mt-6 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1.5 transition group-hover:translate-x-0.5"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4. TechInstant Tools */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6] flex items-center justify-center mb-5 text-white shadow-md shadow-blue-500/20">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  TechInstant Tools
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  A collection of free, useful digital tools for everyday tasks and productivity.
                </p>
              </div>
              <Link
                to="/tools"
                className="mt-6 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1.5 transition group-hover:translate-x-0.5"
              >
                <span>Explore tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          OUR SOLUTIONS SECTION (Soft Tint Background, 2 Columns Layout)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] dark:bg-[#070B14] text-slate-900 dark:text-slate-100 transition-colors duration-200 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Header Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#05DF72]">
                OUR SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white leading-tight">
                End-to-End Digital Solutions for Your Goals
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                From AI-powered automation to custom software development, we deliver solutions that help you work smarter and grow faster.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenContact()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#05DF72] hover:bg-[#04BE60] text-slate-950 font-bold text-xs sm:text-sm transition shadow-sm"
                >
                  <span>Get a Custom Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Solutions Grid (8 cols) - 2 columns x 3 rows with green circular icon badges */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* 1. AI & Automation */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-[#05DF72] flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white font-heading">
                    AI & Automation
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Streamline workflows and save time with intelligent systems.
                  </p>
                </div>
              </div>

              {/* 2. Web & Mobile Apps */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-[#05DF72] flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white font-heading">
                    Web & Mobile Apps
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Modern applications for web, iOS and Android.
                  </p>
                </div>
              </div>

              {/* 3. Cloud Solutions */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-[#05DF72] flex items-center justify-center shrink-0">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white font-heading">
                    Cloud Solutions
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Secure, scalable and always available.
                  </p>
                </div>
              </div>

              {/* 4. Data & Analytics */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-[#05DF72] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white font-heading">
                    Data & Analytics
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Turn your data into better decisions.
                  </p>
                </div>
              </div>

              {/* 5. Product Strategy */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-[#05DF72] flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white font-heading">
                    Product Strategy
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Validate, build and scale your ideas.
                  </p>
                </div>
              </div>

              {/* 6. IT Consulting */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-[#05DF72] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white font-heading">
                    IT Consulting
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Expert guidance for your digital transformation.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          MIDDLE CALL TO ACTION BANNER ("LET'S BUILD TOGETHER")
         ========================================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#051C14] via-[#093527] to-[#041710] text-white overflow-hidden">
        {/* Subtle luminous wave overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <path d="M0,150 C300,50 600,250 1200,100 L1200,300 L0,300 Z" fill="rgba(5, 223, 114, 0.1)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#05DF72]">
              LET&apos;S BUILD TOGETHER
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-tight">
              Ready to Turn Your Ideas<br /> Into Real Solutions?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              Partner with TechInstant and get the right technology, expert support and a team that cares about your success.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
            <button
              onClick={() => onOpenContact()}
              className="px-7 py-3 rounded-full bg-[#05DF72] hover:bg-[#04BE60] text-slate-950 font-bold text-sm flex items-center gap-2 transition shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400">
              Or contact us at <a href="mailto:hello@techinstant.com" className="text-emerald-400 hover:underline">hello@techinstant.com</a>
            </span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          TRUSTED STATS BAR (Matches Screenshot)
         ========================================================================= */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A101D] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-sm space-y-1">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white">
                Trusted by Individuals,<br /> Businesses and Organizations
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                We&apos;re proud to be part of your journey.
              </p>
            </div>

            {/* 4 Stats Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <Box className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">10+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Products & Services</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">5K+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Happy Users</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">98%</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Client Satisfaction</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">24/7</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          TESTIMONIALS SECTION (Matches Screenshot)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#070B14] text-slate-900 dark:text-slate-100 transition-colors">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#05DF72]">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
                What Our Users Say
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Real stories from people who use TechInstant.
              </p>
            </div>

            <Link
              to="/about#reviews"
              className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>View more reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Blessing A. */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-emerald-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-rose-500/20 text-rose-500 font-bold flex items-center justify-center shrink-0 text-sm overflow-hidden">
                  <span className="font-bold">BA</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  &ldquo;TwoCan has been a blessing for my relationship. The guided conversations really help us stay connected, even from different countries.&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">Blessing A.</h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">TwoCan User</span>
                </div>
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>

            {/* 2. David K. */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-emerald-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-500/20 text-blue-500 font-bold flex items-center justify-center shrink-0 text-sm overflow-hidden">
                  <span className="font-bold">DK</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  &ldquo;The AI tools have saved me so much time. I use the summarizer and writing assistant every day for my work.&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">David K.</h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">SaaS Customer</span>
                </div>
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>

            {/* 3. Sarah M. */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-emerald-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 text-emerald-500 font-bold flex items-center justify-center shrink-0 text-sm overflow-hidden">
                  <span className="font-bold">SM</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  &ldquo;TechInstant&apos;s solutions are exactly what our organization needed. Professional, reliable and easy to use.&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">Sarah M.</h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Business Client</span>
                </div>
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
