import React from 'react';
import { 
  Cpu, Smartphone, Cloud, BarChart3, Lightbulb, Users, 
  ArrowRight, CheckCircle2, ShieldCheck
} from '../icons';

interface SolutionsPageProps {
  onOpenContact: (projectType?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenContact }) => {
  const solutions = [
    {
      id: 'ai',
      title: 'AI & Intelligent Automation',
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      tagline: 'Move from repetitive busywork to autonomous business systems.',
      problem: 'Organizations waste hundreds of hours manually processing documents, triaging emails, answering customer questions, and updating disparate software tools.',
      solution: 'We architect and deploy custom AI agents, LLM orchestration pipelines, and deterministic automation bots that execute tasks 24/7 with zero fatigue.',
      whatWeBuild: [
        'Custom Multi-Agent AI Workflows',
        'Document Intelligence & OCR Extraction',
        'Customer Support & Conversational AI',
        'Automated ETL & Database Sync Pipelines'
      ],
      techStack: ['Python', 'LangChain', 'OpenAI/Claude', 'PostgreSQL pgvector', 'FastAPI', 'Redis']
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile Applications',
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      tagline: 'High-speed, scalable applications engineered for conversion and joy.',
      problem: 'Slow, buggy, or poorly designed web and mobile applications cause high churn, frustrates users, and damages brand reputation.',
      solution: 'We build modern, responsive web apps and cross-platform iOS & Android solutions using reactive frameworks, clean state management, and offline-first persistence.',
      whatWeBuild: [
        'Full-Stack SaaS Web Platforms',
        'Native & Cross-Platform Mobile Apps (React Native / Flutter)',
        'Progressive Web Apps (PWAs)',
        'Interactive Dashboards & Portals'
      ],
      techStack: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Node.js']
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure & DevOps',
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      tagline: 'Reliable, highly available cloud systems that scale automatically with demand.',
      problem: 'Downtime, unoptimized server costs, and fragile deployment pipelines drain engineering productivity and hurt bottom lines.',
      solution: 'We design resilient cloud architectures on AWS and GCP with automated CI/CD pipelines, container orchestration, and auto-scaling.',
      whatWeBuild: [
        'Kubernetes / Container Orchestration',
        'Automated CI/CD Deployment Pipelines',
        'Serverless APIs & Edge Compute',
        'Cloud Cost Optimization & Security Hardening'
      ],
      techStack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
    },
    {
      id: 'data',
      title: 'Data Engineering & Analytics',
      icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
      tagline: 'Transform raw data into real-time visual dashboards and predictive insights.',
      problem: 'Disorganized databases and missing analytics prevent leadership from knowing what is truly working and where revenue leaks occur.',
      solution: 'We build unified data pipelines and intuitive executive dashboards that turn millions of data points into instant strategic clarity.',
      whatWeBuild: [
        'Real-Time Telemetry & Metric Dashboards',
        'Data Warehousing & Transformation (ELT/ETL)',
        'User Behavior & Conversion Funnel Tracking',
        'Predictive Forecasting Models'
      ],
      techStack: ['Snowflake', 'BigQuery', 'Apache Kafka', 'ClickHouse', 'PostgreSQL', 'Grafana']
    },
    {
      id: 'strategy',
      title: 'Product Strategy & Discovery',
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      tagline: 'Validate product hypotheses before writing costly code.',
      problem: 'Building software without validating market demand leads to expensive redesigns and abandoned MVPs.',
      solution: 'We work closely with founders and executive stakeholders to define user personas, map UX wireframes, and establish prioritized technical roadmaps.',
      whatWeBuild: [
        'Rapid Clickable Interactive Prototypes',
        'MVP Scoping & Feature Prioritization',
        'Technical Architecture Feasibility Audits',
        'Go-to-Market Launch Strategy'
      ],
      techStack: ['Figma', 'System Design Specs', 'User Journey Mapping', 'KPI Frameworks']
    },
    {
      id: 'consulting',
      title: 'IT Consulting & Digital Transformation',
      icon: <Users className="w-6 h-6 text-teal-400" />,
      tagline: 'Senior technical leadership to guide your digital modernization.',
      problem: 'Non-technical organizations often struggle to evaluate software vendors, legacy migrations, and complex architectural trade-offs.',
      solution: 'We provide experienced fractional CTO consulting, security audits, and code reviews to ensure your engineering decisions are future-proof.',
      whatWeBuild: [
        'Legacy Codebase & Cloud Modernization',
        'Security & Compliance Readiness (SOC2 / GDPR)',
        'Technical Due Diligence & Code Reviews',
        'Fractional CTO & Architecture Guidance'
      ],
      techStack: ['Security Auditing', 'Architecture Blueprints', 'Cloud Governance', 'Vendor Assessment']
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          End-to-End Delivery
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mt-3">
          Technology Solutions Built Around Your Goals
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
          From AI-powered automation to enterprise software engineering, we design and build bespoke digital solutions that solve real business problems.
        </p>
      </div>

      {/* Solutions Cards List */}
      <div className="space-y-12">
        {solutions.map((s, idx) => (
          <div
            key={s.id}
            id={s.id}
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md hover:border-emerald-500/40 transition-all duration-200"
          >
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              
              <div className="max-w-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {s.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                      {s.title}
                    </h2>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Domain Area 0{idx + 1}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                  {s.tagline}
                </p>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-rose-500 block mb-1">The Challenge</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-[10px] uppercase font-bold text-emerald-500 block mb-1">Our Approach</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{s.solution}</p>
                  </div>
                </div>

                {/* What We Build */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">What We Deliver</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.whatWeBuild.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenContact(s.title)}
                    className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-lg shadow-emerald-500/20"
                  >
                    <span>Request Proposal for {s.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Stack Badge */}
              <div className="w-full lg:w-72 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-xs space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block pb-1 border-b border-slate-200 dark:border-slate-800">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {s.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Production-Grade SLA</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
