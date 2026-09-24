import React, { useState } from 'react';
import {
  Shield, Cpu, Users, Cloud,
  Send, Bot, Settings, Activity,
  ChevronRight, BarChart2, FolderKanban, FileText, Sparkles, PlusCircle, Bell
} from './icons';
import { BrandMark } from './BrandLogo';

/**
 * Hero product shot: a MacBook + iPhone sitting on a desk, with four floating
 * glass badges around them.
 *
 * Everything is laid out as a percentage of one fixed-aspect stage and sized in
 * `cqw` (container-query width) units, so the whole scene scales as a single
 * picture instead of drifting out of alignment at different widths. The stage
 * proportions and every element's position are taken from the original design:
 *
 *   stage           620 x 358      laptop screen   x 8.9%  y 14%   w 66%   h 75.5%
 *   laptop base     x 0.6% y 89.5% w 81.7% h 9.3%  phone           x 68%   y 27%   w 21.2% h 73%
 */
export const HeroVisual: React.FC = () => {
  const [aiPrompt, setAiPrompt] = useState('');
  const [activeSidebar, setActiveSidebar] = useState('dashboard');

  const prompts = [
    { title: 'Create a new project', icon: <PlusCircle className="w-[1.5cqw] h-[1.5cqw]" /> },
    { title: 'Analyze my data', icon: <BarChart2 className="w-[1.5cqw] h-[1.5cqw]" /> },
    { title: 'Generate a proposal', icon: <FileText className="w-[1.5cqw] h-[1.5cqw]" /> },
    { title: 'Build a workflow', icon: <Sparkles className="w-[1.5cqw] h-[1.5cqw]" /> },
  ];

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', Icon: Activity },
    { id: 'projects', label: 'Projects', Icon: FolderKanban },
    { id: 'analytics', label: 'Analytics', Icon: BarChart2 },
    { id: 'assistant', label: 'AI Assistant', Icon: Bot },
    { id: 'settings', label: 'Settings', Icon: Settings },
  ];

  /* Shared glass-pill styling for the four floating badges. */
  const badge =
    'absolute z-40 flex items-center gap-[1.7cqw] rounded-full px-[2.2cqw] py-[1.5cqw] ' +
    'bg-[#16283E]/80 backdrop-blur-md border border-white/10 ' +
    'shadow-[0_1.5cqw_3cqw_-0.8cqw_rgba(0,0,0,0.65)]';
  const badgeText = 'text-[1.85cqw] font-semibold text-white leading-[1.35] tracking-tight';
  const badgeIcon = 'w-[4.2cqw] h-[4.2cqw] flex-shrink-0 text-[#22C883]';

  return (
    <div className="@container relative w-full max-w-[700px] mx-auto aspect-[620/358] select-none">

      {/* ================= SCENE BACKGROUND =================
          Stands in for the blurred desk photo in the original: a dark wall with
          soft bokeh, a potted plant on the right, and a wooden desk surface.
          A radial mask feathers every edge so the scene melts into the hero
          section instead of reading as a pasted-on card. */}
      <div
        className="absolute -inset-x-[12%] -top-[12%] -bottom-[8%] overflow-hidden pointer-events-none"
        style={{
          WebkitMaskImage:
            'radial-gradient(72% 68% at 50% 48%, #000 38%, rgba(0,0,0,0.5) 72%, transparent 100%)',
          maskImage:
            'radial-gradient(72% 68% at 50% 48%, #000 38%, rgba(0,0,0,0.5) 72%, transparent 100%)',
        }}
      >
        {/* Wall */}
        <div className="absolute inset-0 bg-[radial-gradient(110%_85%_at_74%_10%,#16222F_0%,#0B1421_48%,#060B13_100%)]" />
        {/* Ambient light pools */}
        <div className="absolute -top-[10%] left-[8%] w-[45%] h-[55%] rounded-full bg-sky-400/10 blur-[8cqw]" />
        <div className="absolute top-[18%] -left-[6%] w-[28%] h-[45%] rounded-full bg-emerald-500/10 blur-[7cqw]" />

        {/* Potted plant behind the phone, heavily blurred like the photo */}
        <div className="absolute right-[7%] top-[30%] w-[19%] h-[58%] blur-[1.6cqw] opacity-90">
          <svg viewBox="0 0 120 190" className="w-full h-full" fill="none">
            <g opacity="0.95">
              <ellipse cx="42" cy="46" rx="26" ry="17" transform="rotate(-38 42 46)" fill="#1C5E32" />
              <ellipse cx="78" cy="34" rx="28" ry="18" transform="rotate(24 78 34)" fill="#2A7A41" />
              <ellipse cx="96" cy="70" rx="24" ry="16" transform="rotate(62 96 70)" fill="#1F6935" />
              <ellipse cx="34" cy="86" rx="24" ry="15" transform="rotate(28 34 86)" fill="#17512B" />
              <ellipse cx="66" cy="66" rx="30" ry="20" transform="rotate(-8 66 66)" fill="#27723D" />
              <ellipse cx="60" cy="104" rx="20" ry="13" transform="rotate(-52 60 104)" fill="#1B5E31" />
            </g>
            {/* Ceramic pot */}
            <path d="M34 120 H106 L98 184 H42 Z" fill="#C9C6C0" />
            <path d="M34 120 H106 L104 134 H36 Z" fill="#E4E1DB" />
          </svg>
        </div>

        {/* Desk surface: deep shadow directly under the devices, warming toward
            the viewer, plus a soft highlight where the screens reflect. */}
        <div className="absolute inset-x-0 bottom-0 h-[18%] bg-[linear-gradient(to_bottom,#05080C_0%,#100C0A_20%,#3A2E27_48%,#5A4739_76%,#2C221C_100%)]" />
        <div className="absolute left-[20%] bottom-0 w-[58%] h-[9%] bg-white/6 blur-[2cqw] rounded-[50%]" />
      </div>


      {/* ================= LAPTOP SCREEN ================= */}
      <div className="absolute left-[8.9%] top-[14%] w-[66%] h-[75.5%]">
        {/* Aluminium rim */}
        <div className="w-full h-full rounded-t-[2.4cqw] bg-[linear-gradient(105deg,#8A929C_0%,#464C55_18%,#2B3038_60%,#767D87_100%)] p-[0.35cqw] shadow-[0_2cqw_5cqw_-1cqw_rgba(0,0,0,0.8)]">
          {/* Black bezel */}
          <div className="relative w-full h-full rounded-t-[2.1cqw] bg-[#04080D] px-[1.5cqw] pt-[2cqw] pb-[0.9cqw] flex flex-col">
            {/* Camera */}
            <div className="absolute top-[0.85cqw] left-1/2 -translate-x-1/2 w-[0.42cqw] h-[0.42cqw] rounded-full bg-[#1B2430]" />

            {/* ---------- DASHBOARD UI ---------- */}
            <div className="flex-1 min-h-0 bg-white rounded-[0.55cqw] overflow-hidden flex flex-col text-slate-900">

              {/* Top bar: brand on the left, user chip on the right */}
              <div className="flex items-center justify-between px-[1.4cqw] py-[1cqw] border-b border-slate-100">
                <div className="flex items-center gap-[0.7cqw]">
                  <BrandMark className="w-[1.35cqw] h-[1.6cqw]" />
                  <span className="font-bold text-[1.3cqw] text-slate-900 tracking-tight">TechInstant</span>
                </div>
                <div className="flex items-center gap-[1cqw]">
                  <Bell className="w-[1.4cqw] h-[1.4cqw] text-slate-400" />
                  <div className="flex items-center gap-[0.55cqw] pl-[0.8cqw] border-l border-slate-100">
                    <div className="w-[2cqw] h-[2cqw] rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-[0.85cqw] font-bold text-white">
                      EA
                    </div>
                    <div className="leading-none">
                      <span className="block text-[0.95cqw] font-semibold text-slate-700">Emmanuel</span>
                      <span className="block text-[0.7cqw] text-slate-400 mt-[0.15cqw]">Workspace</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-h-0 flex">
                {/* Sidebar */}
                <div className="w-[22%] flex-shrink-0 border-r border-slate-100 py-[1.1cqw] px-[0.8cqw] space-y-[0.3cqw]">
                  {navItems.map(({ id, label, Icon }) => (
                    <button
                      key={id}
                      onClick={() => setActiveSidebar(id)}
                      className={`w-full flex items-center gap-[0.7cqw] px-[0.8cqw] py-[0.65cqw] rounded-[0.5cqw] text-left text-[1cqw] transition ${
                        activeSidebar === id
                          ? 'bg-emerald-100/80 text-emerald-700 font-semibold'
                          : 'text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-[1.2cqw] h-[1.2cqw] flex-shrink-0" />
                      <span className="truncate">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Content. The extra right gutter keeps the cards clear of the
                    phone that overlaps this side of the screen. */}
                <div className="flex-1 min-w-0 p-[1.4cqw] pr-[4.2cqw] flex flex-col gap-[1.2cqw]">
                  <div>
                    <h4 className="text-[1.8cqw] font-bold text-slate-900 tracking-tight leading-none">
                      Good morning, Emmanuel <span className="not-italic">👋</span>
                    </h4>
                    <p className="text-[1cqw] text-slate-400 mt-[0.5cqw]">
                      Here&apos;s what&apos;s happening with your business today.
                    </p>
                  </div>

                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-[1cqw]">
                    {[
                      { label: 'Total Users', value: '12,482', delta: '+12%' },
                      { label: 'Active Projects', value: '48', delta: '+8%' },
                      { label: 'Revenue', value: '$4,230', delta: '+18%' },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="p-[1cqw] rounded-[0.7cqw] bg-white border border-slate-200/70 shadow-[0_0.15cqw_0.4cqw_rgba(15,23,42,0.04)]"
                      >
                        <span className="block text-[0.9cqw] text-slate-400">{m.label}</span>
                        <span className="block text-[1.9cqw] font-bold text-slate-900 leading-tight mt-[0.3cqw]">
                          {m.value}
                        </span>
                        <span className="block text-[0.9cqw] font-semibold text-emerald-500 mt-[0.2cqw]">
                          {m.delta}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Growth chart */}
                  <div className="flex-1 min-h-0 p-[1.1cqw] rounded-[0.7cqw] bg-white border border-slate-200/70 shadow-[0_0.15cqw_0.4cqw_rgba(15,23,42,0.04)] flex flex-col">
                    <span className="text-[1.15cqw] font-bold text-slate-900">Growth Overview</span>

                    <div className="flex-1 min-h-0 mt-[0.6cqw]">
                      <svg className="w-full h-full" viewBox="0 0 400 110" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="dashboardGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#05DF72" stopOpacity="0.22" />
                            <stop offset="100%" stopColor="#05DF72" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {[18, 46, 74].map((y) => (
                          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#F1F5F9" strokeWidth="1.5" />
                        ))}

                        <path
                          d="M8 86 L52 80 L96 66 L140 78 L184 52 L228 34 L272 46 L316 42 L360 24 L392 8"
                          fill="none"
                          stroke="#22A75B"
                          strokeWidth="1.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          vectorEffect="non-scaling-stroke"
                        />
                        <path
                          d="M8 86 L52 80 L96 66 L140 78 L184 52 L228 34 L272 46 L316 42 L360 24 L392 8 L392 110 L8 110 Z"
                          fill="url(#dashboardGrowthGrad)"
                        />
                        {[[8, 86], [52, 80], [96, 66], [140, 78], [184, 52], [228, 34], [272, 46], [316, 42], [360, 24], [392, 8]].map(
                          ([cx, cy]) => (
                            <circle key={`${cx}`} cx={cx} cy={cy} r="2.2" fill="#22A75B" />
                          )
                        )}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LAPTOP BASE =================
          Wedge-shaped aluminium deck, wider than the screen and flaring toward
          the viewer, with the keyboard well and the front finger groove. */}
      <div
        className="absolute left-[0.6%] top-[89.5%] w-[81.7%] h-[7.6%] z-10"
        style={{ clipPath: 'polygon(10.2% 0%, 90.9% 0%, 100% 55%, 98.6% 100%, 1.4% 100%, 0% 55%)' }}
      >
        {/* Deck seen edge-on: dark keyboard mass at the back, bright front lip */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0F141A_0%,#262D36_12%,#353C45_40%,#757C85_56%,#8E959E_72%,#9FAAB6_88%,#585E66_100%)]" />
        {/* Keyboard well */}
        <div className="absolute left-[11%] top-[6%] w-[78%] h-[32%] bg-[#12171E]/60" />
        {/* Front finger groove */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[4%] w-[20%] h-[26%] rounded-t-[0.5cqw] bg-white/22" />
      </div>
      {/* Contact shadow the laptop casts on the desk */}
      <div className="absolute left-[4%] top-[95.5%] w-[76%] h-[3.5%] bg-black/60 blur-[0.9cqw] rounded-[50%] z-0" />
      {/* Hinge shadow under the screen */}
      <div className="absolute left-[8.9%] top-[88.9%] w-[66%] h-[1.2%] bg-black/80 blur-[0.2cqw] z-20" />


      {/* ================= PHONE ================= */}
      <div className="absolute left-[68%] top-[27%] w-[21.2%] h-[73%] z-30">
        <div className="w-full h-full rounded-[3.3cqw] bg-[linear-gradient(140deg,#3A4049_0%,#0C1016_28%,#0C1016_72%,#39404A_100%)] p-[0.55cqw] shadow-[0_2cqw_5cqw_-0.8cqw_rgba(0,0,0,0.75)]">
          <div className="relative w-full h-full rounded-[2.9cqw] bg-white overflow-hidden flex flex-col text-slate-900">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1.3cqw] rounded-b-[1cqw] bg-[#0C1016] z-10" />

            {/* Phone header */}
            <div className="flex items-center justify-between px-[1.1cqw] pt-[2.2cqw] pb-[0.9cqw]">
              <div className="flex items-center gap-[0.55cqw]">
                <BrandMark className="w-[1.25cqw] h-[1.5cqw]" />
                <span className="font-bold text-[1.2cqw] tracking-tight">TechInstant</span>
              </div>
              <div className="w-[1.9cqw] h-[1.9cqw] rounded-full border border-slate-200 flex items-center justify-center">
                <Sparkles className="w-[1.05cqw] h-[1.05cqw] text-slate-400" />
              </div>
            </div>

            {/* AI assistant intro */}
            <div className="px-[1.1cqw] text-center">
              <div className="w-[2.4cqw] h-[2.4cqw] mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <Bot className="w-[1.3cqw] h-[1.3cqw] text-emerald-500" />
              </div>
              <h5 className="text-[1.75cqw] font-bold mt-[0.7cqw] leading-none">AI Assistant</h5>
              <p className="text-[0.95cqw] text-slate-400 mt-[0.5cqw]">Turn your ideas into real solutions.</p>
            </div>

            {/* Prompt input */}
            <div className="px-[1.1cqw] mt-[1.1cqw]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Ask anything..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-[0.7cqw] py-[0.75cqw] pl-[0.9cqw] pr-[3cqw] text-[0.95cqw] text-slate-800 placeholder-slate-400 outline-none focus:border-emerald-400"
                />
                <button
                  onClick={() => setAiPrompt('Building your workflow...')}
                  aria-label="Send prompt"
                  className="absolute right-[0.4cqw] w-[2.1cqw] h-[2.1cqw] rounded-[0.55cqw] bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition"
                >
                  <Send className="w-[1.1cqw] h-[1.1cqw]" />
                </button>
              </div>
            </div>

            {/* Suggested prompts */}
            <div className="px-[1.1cqw] mt-[1cqw] space-y-[0.6cqw]">
              {prompts.map((p) => (
                <button
                  key={p.title}
                  onClick={() => setAiPrompt(p.title)}
                  className="w-full flex items-center gap-[0.75cqw] px-[0.8cqw] py-[0.75cqw] rounded-[0.6cqw] bg-white border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/60 transition group"
                >
                  <span className="w-[1.9cqw] h-[1.9cqw] flex-shrink-0 rounded-[0.5cqw] bg-[#132132] text-white flex items-center justify-center">
                    {p.icon}
                  </span>
                  <span className="flex-1 text-left text-[0.95cqw] font-medium text-slate-700 truncate">
                    {p.title}
                  </span>
                  <ChevronRight className="w-[1cqw] h-[1cqw] text-slate-300 group-hover:text-emerald-500 transition" />
                </button>
              ))}
            </div>

            {/* Home indicator */}
            <div className="mt-auto mb-[0.9cqw] mx-auto w-[34%] h-[0.35cqw] rounded-full bg-slate-800" />
          </div>
        </div>
      </div>


      {/* ================= FLOATING BADGES ================= */}
      <div className={`${badge} left-[4.5%] top-0 animate-float-slow`}>
        <Cpu className={badgeIcon} strokeWidth={1.8} />
        <span className={badgeText}>AI-Powered<br />Solutions</span>
      </div>

      <div className={`${badge} left-[72%] top-[1%] animate-float-delayed`}>
        <Cloud className={badgeIcon} strokeWidth={1.8} />
        <span className={badgeText}>Scalable<br />SaaS Products</span>
      </div>

      <div className={`${badge} left-0 top-[71%] animate-float-delayed`}>
        <Shield className={badgeIcon} strokeWidth={1.8} />
        <span className={badgeText}>Secure &amp;<br />Reliable</span>
      </div>

      <div className={`${badge} left-[81%] top-[84%] animate-float-slow`}>
        <Users className={badgeIcon} strokeWidth={1.8} />
        <span className={badgeText}>Built for<br />You</span>
      </div>
    </div>
  );
};
