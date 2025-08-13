import React from "react";

const portfolioItems = [
	{
		category: "Solution Software",
		title: "Streamlining Operations for a Logistics Company",
		description:
			"A custom software solution to optimize delivery routes and improve efficiency.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuAoHfIu21bU_xkcXReLirHFeZDr1vK82FWOZmxnY4graYrzuaLm8QA4eh0cJkAr2K5cVgKVHSKYPYwk6eLNZ0YokLFGIii-55rnKnoN9NfYxUFrNKojygKm390C-qqzkdlt9WW1WWzSUG4GtdodRO0Li1wJC1yReDxF_oaFVAxGpHnoLfSD5G__o-KPiHMX8pvabtILd7zNFrNJkq4UG4FPRG1A-pO7gmZmP2VkvvgZS-MHXOCgeONgdMwZdFOEg6UT4aqax3f06DI",
	},
	{
		category: "Enterprise Software",
		title: "Enhancing Customer Engagement for a Retail Chain",
		description: "A CRM system to personalize customer interactions and boost loyalty.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuAsX0OZtj2-U6pSJ0jxS8HKB9WhkHEkOHHOIG5OJKRPwGgxd3HeCzVlQVi92rJY0udm5L1YIIqPJUNqkpTu_bSxQG8ry_-5pXjkBjsHWnkXW3LoaZhMRLDSmUtWPslmN6FC1SgpYIxEPM7TOjZ7PI86Vt5iWuwEIAEdGULkujcx2SyP_qHL9G8A3kPlCTK5Phe996OZl3VRTP7tne_5ye-CFIe2ve2brNPstsuMYdxhuA2Umv0S3po4LQt8N3woCpCdAOP0-iv2Y5Q",
	},
	{
		category: "Solution Software",
		title: "Improving Data Analysis for a Healthcare Provider",
		description:
			"A data analytics platform to identify trends and improve patient outcomes.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBl2kF0nVuAkk9dZH5EldUty9eVk6_Lz7apIJMtsDL6lNFAT_0Kacb8ER7t_u-Ri1OnU9i73m14h10BkxF7Wz3Uctf_LB0-S4yFwy1DEAsTlYqMN87zhIfvysZiWy4GNMaf-8QdwNqGqooLjnSJIKluiVrWIR2lSL_MNFviNpEepv4z3vRrUa3hKGFrtBz3QzqsBdyvI8KhovW3blcUn9CAeeqMQM99QvC1gkJSdpJODJY8x-Q0VkH_qiuAlTbnQij3dVMLPjtsT54",
	},
];

const categories = ["All", "Solution Software", "Enterprise Software"];

const Portfolio: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

	const filteredItems =
		selectedCategory === "All"
			? portfolioItems
			: portfolioItems.filter((item) => item.category === selectedCategory);

	return (
		<div
			className="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden"
			style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
		>
			<div>
				{/* Header */}
				<div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
					<div
						className="text-[#0d141c] flex size-12 shrink-0 items-center"
						data-icon="ArrowLeft"
						data-size="24px"
						data-weight="regular"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							fill="currentColor"
							viewBox="0 0 256 256"
						>
							<path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
						</svg>
					</div>
					<h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
						Portfolio
					</h2>
				</div>
				<h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
					Our Work
				</h2>
				{/* Category Filters */}
				<div className="flex gap-3 p-3 overflow-x-hidden">
					{categories.map((cat) => (
						<button
							key={cat}
							className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 ${
								selectedCategory === cat
									? "bg-[#49739c] text-white"
									: "bg-[#e7edf4] text-[#0d141c]"
							} text-sm font-medium leading-normal`}
							onClick={() => setSelectedCategory(cat)}
						>
							{cat}
						</button>
					))}
				</div>
				{/* Portfolio Items */}
				{filteredItems.map((item, idx) => (
					<div className="p-4" key={idx}>
						<div className="flex items-stretch justify-between gap-4 rounded-lg flex-col md:flex-row">
							<div className="flex flex-[2_2_0px] flex-col gap-4">
								<div className="flex flex-col gap-1">
									<p className="text-[#49739c] text-sm font-normal leading-normal">
										{item.category}
									</p>
									<p className="text-[#0d141c] text-base font-bold leading-tight">
										{item.title}
									</p>
									<p className="text-[#49739c] text-sm font-normal leading-normal">
										{item.description}
									</p>
								</div>
								<button
									className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e7edf4] text-[#0d141c] text-sm font-medium leading-normal w-fit"
								>
									<span className="truncate">Read More</span>
								</button>
							</div>
							<div
								className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 mt-4 md:mt-0"
								style={{ backgroundImage: `url("${item.image}")` }}
							></div>
						</div>
					</div>
				))}
			</div>
			{/* Bottom Navigation */}
			<div>
				<div className="flex gap-2 border-t border-[#e7edf4] bg-slate-50 px-4 pb-3 pt-2">
					<a
						className="flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]"
						href="#"
					>
						<div
							className="text-[#49739c] flex h-8 items-center justify-center"
							data-icon="House"
							data-size="24px"
							data-weight="regular"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								fill="currentColor"
								viewBox="0 0 256 256"
							>
								<path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
							</svg>
						</div>
						<p className="text-[#49739c] text-xs font-medium leading-normal tracking-[0.015em]">
							Home
						</p>
					</a>
					<a
						className="flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]"
						href="#"
					>
						<div
							className="text-[#49739c] flex h-8 items-center justify-center"
							data-icon="PuzzlePiece"
							data-size="24px"
							data-weight="regular"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								fill="currentColor"
								viewBox="0 0 256 256"
							>
								<path d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"></path>
							</svg>
						</div>
						<p className="text-[#49739c] text-xs font-medium leading-normal tracking-[0.015em]">
							Services
						</p>
					</a>
					<a
						className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#0d141c]"
						href="#"
					>
						<div
							className="text-[#0d141c] flex h-8 items-center justify-center"
							data-icon="Briefcase"
							data-size="24px"
							data-weight="fill"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								fill="currentColor"
								viewBox="0 0 256 256"
							>
								<path d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"></path>
							</svg>
						</div>
						<p className="text-[#0d141c] text-xs font-medium leading-normal tracking-[0.015em]">
							Portfolio
						</p>
					</a>
					<a
						className="flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]"
						href="/contact"
					>
						<div
							className="text-[#49739c] flex h-8 items-center justify-center"
							data-icon="Envelope"
							data-size="24px"
							data-weight="regular"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								fill="currentColor"
								viewBox="0 0 256 256"
							>
								<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
							</svg>
						</div>
						<p className="text-[#49739c] text-xs font-medium leading-normal tracking-[0.015em]">
							Contact
						</p>
					</a>
				</div>
				<div className="h-5 bg-slate-50"></div>
			</div>
		</div>
	);
};

export default Portfolio;
