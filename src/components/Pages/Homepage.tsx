import React from "react";

const Homepage: React.FC = () => (
    <div
        className="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
        <div>
            <div className="@container">
                <div className="@[480px]:p-4">
                    <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuACs8uw4PrvyLC9tAHgg06TzcM-87Y82gLACJYGAR8k_CIMGNy8M2H4jPMHIzWHwZKXkucQv1rXPjjfDG8mCi8FK99w6nRA8Lo-cchMuoKrB35NA1SpB8yLnCgrd2V8gduHg_tcq3KlE3ZChonREVxNNNzQwBX3h3Sm1LMrvAc6kBLQ9LUc9XGWqHTa4Zn0Wd6evtqkfhirmFngohvtpg349Lzh8HOpvKjc7TQuBNN6BHlD6GLggXhpIhEiLXac-qzqpfV5NRnl2ZE")',
                        }}
                    >
                        <div className="flex flex-col gap-2 text-left">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                Innovating the Future of Business
                            </h1>
                            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                We specialize in solution software, enterprise software, and cutting-edge research to drive your business forward.
                            </h2>
                        </div>
                        <div className="flex-wrap gap-3 flex">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#3d99f5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                            >
                                <span className="truncate">Explore Services</span>
                            </button>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e7edf4] text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                            >
                                <span className="truncate">View Case Studies</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                        Our Expertise
                    </h1>
                    <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
                        We offer a range of services tailored to meet the unique needs of your business.
                    </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 flex-col">
                        <div className="text-[#0d141c]" data-icon="PuzzlePiece" data-size="24px" data-weight="regular">
                            {/* PuzzlePiece SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#0d141c] text-base font-bold leading-tight">Solution Software</h2>
                            <p className="text-[#49739c] text-sm font-normal leading-normal">
                                Custom software solutions designed to solve complex business challenges.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 flex-col">
                        <div className="text-[#0d141c]" data-icon="Buildings" data-size="24px" data-weight="regular">
                            {/* Buildings SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#0d141c] text-base font-bold leading-tight">Enterprise Software</h2>
                            <p className="text-[#49739c] text-sm font-normal leading-normal">
                                Scalable and robust enterprise software to streamline operations and enhance productivity.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 flex-col">
                        <div className="text-[#0d141c]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                            {/* MagnifyingGlass SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#0d141c] text-base font-bold leading-tight">Research</h2>
                            <p className="text-[#49739c] text-sm font-normal leading-normal">
                                In-depth research and analysis to inform strategic decisions and drive innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="@container">
                <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                            Ready to Transform Your Business?
                        </h1>
                        <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
                            Get in touch with our team to discuss how we can help you achieve your goals.
                        </p>
                    </div>
                    <div className="flex flex-1 justify-center">
                        <div className="flex justify-center">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#3d99f5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                            >
                                <span className="truncate">Contact Us</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="h-5 bg-slate-50"></div>
        </div>
    </div>
);

export default Homepage;
