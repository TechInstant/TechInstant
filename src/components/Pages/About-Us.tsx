import React from "react";

const team = [
	{
		name: "Ethan Carter",
		role: "CEO",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuC0k9-lST3bmm8nAOQvxVhkE284_y3oAxQx_8DwMSL4canRkJVumwBo1igybU7sU37OzKgRytkHAfaca-nKbu1NeFgw4f8wSdGrSa6-EoE130i_BEPAZV_4mISliVbJ7kK1lX6SRoWISMVWmHv56Z4u6xQ-tz3KR1Jkf4bfI0RhUN4XAkGFkW5HnhS2_Hn40e3f4YY2NKpWC9fBPl5cKoNTFrYw-zzaWM3zOsm015FxH366TvFYlxYBu1LulWRgzAPuvzMzyNPIk_o",
	},
	{
		name: "Sophia Bennett",
		role: "CTO",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCwYlgkLKETiAoeLgG_bxbOdA6SxB8f4GWbc-RIWr8vXCxbQvr5SW-EU2oMoPiUBXzTqY7Jlj88FLn7fcQlZ_F8coTb19eIBgKZZT7m7edls6AHzIrQcEpvT7JybYtKeTEXwAWwFuZE0JDnEgpd8n5duzfHULmSyH7ssmDBeVjPRK_YMpwLrSXECQrlilRCfBmAKpj3TSgvWMICbhdDjqR1HgMoRWmYomS1Qo_6wDQ1Yec-DWoBKVcyLmPgtKNah3YdddE1XYLpexM",
	},
	{
		name: "Liam Harper",
		role: "Head of Engineering",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDP64NJsrRbBWwr6Hj8PTpbcakeVBF0h7OSN6-OFe-E3ugTEVUdPFonC9DcrOdP1FeSYI3S9WnvQe8mioFkCLY3kwsnYNrwqeNUzOYBvr-VMblSK9JAKRGl_n-z76JU0NTWblQcL9y3CDU_Rzr9QtML6qa5Ado5RuEdf0iFlQGPoLoepgSBdfVL8ZVtSxVXCUF5v8Pt_VyAx-jjM0of9JpSQ2dNrbdPAqRr-13tO0bWXwsF4sAkml5F7hTJGV8LZRrvo5_swtFgfZ4",
	},
	{
		name: "Olivia Hayes",
		role: "Head of Product",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDwfXv2ePTKEOnOCOkaXKU6N7TcLTXao4zg2Zq7RDbH7OebRgv5vnaf0xei3bIDJ5MtbsbzthSgnWvz5Ai0XnyBLSdox8vWv3Ltzfx2Y1KkUYjBOg4L9MCULyYZoeMieIEXqMtYehGuTouyBkfvRXIdIbETAJK0TXKtdsHyqz8R_Wh6gSiZoWQDB1i78bi6mo_98NhxNgoiuCUYfsULbzM_wG6-1KY8_EqRiDEM6HirGkSjeGuPnYkA4EUDxUDM0TfJwIHcDLTXcew",
	},
];

const AboutUs: React.FC = () => (
	<div
		className="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden"
		style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
	>
		<div>
			{/* Header */}
			<div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
				<div className="text-[#0d141c] flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
					<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
						<path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
					</svg>
				</div>
				<h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
					About Us
				</h2>
			</div>
			{/* Hero Section */}
			<div>
				<div className="p-4">
					<div
						className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center"
						style={{
							backgroundImage:
								'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFOIqqX-k9yd1ppE6XDPDam4Tqn0HKHx6AXwgKhlxQHx07Z7MMzxJ1pcvV0loZRC71fscecY4gRUo7VbByD9NfIF7X2vOYju3n-juLSNeSZufW09TGQJA0jrNmfujY97CkWvy2RLV6IaLOPvMytMgXAb9a4xOvlnuv0IwA5lDV--LiMUJ55UTpHdp8Ka9u5XoHWNqK-1ARd-UYyzHj-Ph0gjvnfl3UnLacI3dHGAcqa6BHaojlzLmfAtF_9KYafjxe7GiNdDJTlhw")',
						}}
					>
						<div className="flex flex-col gap-2 text-center">
							<h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:font-black md:leading-tight md:tracking-[-0.033em]">
								Our Story
							</h1>
							<h2 className="text-white text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal">
								Founded in 2018, we've been at the forefront of technological innovation, driving progress and shaping the future of digital solutions. Our journey is marked by a commitment to excellence, a passion for problem-solving, and a relentless pursuit of innovation.
							</h2>
						</div>
					</div>
				</div>
			</div>
			{/* Mission */}
			<h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Mission</h2>
			<p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
				To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and success. We strive to be a trusted partner, delivering exceptional value and fostering long-term relationships.
			</p>
			{/* Vision */}
			<h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Vision</h2>
			<p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
				To be a global leader in technology innovation, recognized for our expertise, integrity, and commitment to client satisfaction. We envision a future where technology seamlessly integrates with business strategy to achieve remarkable outcomes.
			</p>
			{/* Values */}
			<h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Values</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
				<div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 items-center">
					<div className="text-[#0d141c]" data-icon="Users" data-size="24px" data-weight="regular">
						<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
							<path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
						</svg>
					</div>
					<h2 className="text-[#0d141c] text-base font-bold leading-tight">Collaboration</h2>
				</div>
				<div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 items-center">
					<div className="text-[#0d141c]" data-icon="ShieldCheck" data-size="24px" data-weight="regular">
						<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
							<path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
						</svg>
					</div>
					<h2 className="text-[#0d141c] text-base font-bold leading-tight">Integrity</h2>
				</div>
				<div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 items-center">
					<div className="text-[#0d141c]" data-icon="Lightbulb" data-size="24px" data-weight="regular">
						<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
							<path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
						</svg>
					</div>
					<h2 className="text-[#0d141c] text-base font-bold leading-tight">Innovation</h2>
				</div>
				<div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 items-center">
					<div className="text-[#0d141c]" data-icon="Handshake" data-size="24px" data-weight="regular">
						<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
							<path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"></path>
						</svg>
					</div>
					<h2 className="text-[#0d141c] text-base font-bold leading-tight">Partnership</h2>
				</div>
			</div>
			{/* Team */}
			<h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet Our Team</h2>
			<div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				<div className="flex items-stretch p-4 gap-3">
					{team.map((member) => (
						<div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40" key={member.name}>
							<div
								className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
								style={{ backgroundImage: `url("${member.image}")` }}
							></div>
							<div>
								<p className="text-[#0d141c] text-base font-medium leading-normal">{member.name}</p>
								<p className="text-[#49739c] text-sm font-normal leading-normal">{member.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Testimonial */}
			<h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Client Testimonials</h2>
			<div className="p-4">
				<div
					className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-lg pt-[132px]"
					style={{
						backgroundImage:
							'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDboO11dIWgvyZfZ60hwsurNKdEu1BJ51C5Dna3FoRhi55syNZ1fpun_t90keoqSz735qMN2bKXMiQbQk6phVzI6Gz8QM4DvPZYsyVV7PWCtygT4NjmOcROZJ-MT3ikLbxnBFdDm6IYhAeopL6og5vaVoJigVfOKoAQSYHHPpqq6bulUvDlFugYxntkGPwbUdHzw2YUxTyAtdi5cQ78Olssef7z9reZsbNT5d5cenZoEeYOB4PDxr3hQmUKiNjbZkkZZF04F330NlM")',
					}}
				>
					<div className="flex w-full items-end justify-between gap-4 p-4">
						<div className="flex max-w-[440px] flex-1 flex-col gap-1">
							<p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">Exceptional Service</p>
							<p className="text-white text-base font-medium leading-normal">
								Their innovative solutions transformed our business operations, leading to significant improvements in efficiency and productivity. We highly recommend their services.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* Bottom Navigation */}
		<div>
			<div className="flex gap-2 border-t border-[#e7edf4] bg-slate-50 px-4 pb-3 pt-2">
				<a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]" href="#">
					<div className="text-[#49739c] flex h-8 items-center justify-center" data-icon="House" data-size="24px" data-weight="regular">
						<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
							<path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
						</svg>
					</div>
					<p className="text-[#49739c] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
				</a>
				<a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]" href="#">
					<div className="text-[#49739c] flex h-8 items-center justify-center" data-icon="Gear" data-size="24px" data-weight="regular">
						<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
							<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
						</svg>
					</div>
					<p className="text-[#49739c] text-xs font-medium leading-normal tracking-[0.015em]">Services</p>
				</a>
				<a className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#0d141c]" href="#">
					<div className="text-[#0d141c] flex h-8 items-center justify-center" data-icon="Info" data-size="24px" data-weight="fill">
						<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
							<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"></path>
						</svg>
					</div>
					<p className="text-[#0d141c] text-xs font-medium leading-normal tracking-[0.015em]">About</p>
				</a>
				<a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]" href="#">
					<div className="text-[#49739c] flex h-8 items-center justify-center" data-icon="Envelope" data-size="24px" data-weight="regular">
						<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
							<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
						</svg>
					</div>
					<p className="text-[#49739c] text-xs font-medium leading-normal tracking-[0.015em]">Contact</p>
				</a>
			</div>
			<div className="h-5 bg-slate-50"></div>
		</div>
	</div>
);

export default AboutUs;
