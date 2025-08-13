import React from "react";

const insights = [
  {
    title: "The Future of Enterprise Software",
    description:
      "Explore the latest trends and innovations shaping enterprise software, from AI-driven solutions to cloud-native architectures.",
    author: "Alex Turner",
    date: "2023-08-15",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrVwciFccaYTTsIz4yexyZNoWqO8WA8KFKTo_NOQxeUfVCZS_RnoBQvWtMU_ZrMvVICXRQuAkD0UkOCjDcfjbV9j6pmjKIU2Hxnh0Sa963mA0xKu7EkvFZIpfgk8NnGmCC6SErLwQIpJ0apwLicV_3t3iR7mqTzyvCsyfR3PrN7ikVM2vcDRybha73vevLwTy1cTSSc84tEtcnJEZywoI5Q5bPQkZn1heSryRk9Ve-8gGzFCjNS2GscJA6xxBcUkJeSxudXDn9Ky0",
  },
];

const recentPosts = [
  {
    title: "Optimizing Software Solutions",
    author: "Sarah Chen",
    date: "2023-08-10",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTzjXLJ9Im_SPnzyWzP5UeNHheGFsMzseQjh1Pq5v5cepYiiGnY2bFIOLJsURBseLeQtFSfIBFU4DaGYvdV4DW7u3OS--9LaLs18_QAhZxN_Wb3pE4VXLMAYJrz_UHSMoS0tBfsnPDLccxRywkBj6zcDGVWr8Y5s4TMhGQRUgk40YUyCpI3rq7J03cmZ67djP-__mD58Ql7GP1tppStHleGWaUe2_nS2fnUbrLcdq7ujzGVjm5km1Bwex1uoP4m8kGEXvQwWkwLjg",
  },
  {
    title: "The Role of AI in Research",
    author: "David Lee",
    date: "2023-08-05",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWI27g9fM6_fRSOSg3gFYr0xhtvRuGjEJu7xrD3QAGrGUPcV04kHU51mj0ZPCA0m7qSdtMV_Yr4ZCtrHoFbxknAn7LUa4Z08QBNae6aMGZ9Igdl_0YJbFovU0xKxwErEtz9HKa9GjzW8nS0X3RhgEYp1vYV6g9k75iCccklcffb472VnY2ZDwbUKx1BhXZlmhv2t5ZIruByDxc7YEuOsyZB98oPBglydc5c_ZKPlxKXxgNgwcoLTZQYGwjGWDwuz_asfgzcUxaG8k",
  },
  {
    title: "Cloud-Native Architectures",
    author: "Emily White",
    date: "2023-07-30",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjAZSkd4btHsPU8pUtgdBLbYFih20OhCJ_D9xgyfDmuYApdH3U8sOiH0raCXq9IgFZlr2JywnNXQX_0nthLCOukXzoV8PkHKBm1JughGU4WeFN6ezkNWwP46NTtHdIJmrv_s2Om-YqgVpaW4S4ShuV2mUZDzbtCLbWcMijwGWDpI68LFTdt_75UHHN_CphBVkvWc2SRSw-O38XbPo8aQiJMrfLmzH13enoBd5h6SD1-juXsgKJ1StGlWPXLD8wsJPG8znpdgeXfCw",
  },
];

const categories = [
  "Enterprise Software",
  "Solution Software",
  "Research",
];

const TechInsight: React.FC = () => {
  return (
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
          <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Tech Insights
          </h2>
        </div>
        <h2 className="text-[#0d141c] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Latest Insights
        </h2>
        <div className="p-4">
          <div className="flex flex-col items-stretch justify-start rounded-lg xl:flex-row xl:items-start">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{
                backgroundImage: `url("${insights[0].image}")`,
              }}
            ></div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
              <p className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">
                {insights[0].title}
              </p>
              <div className="flex items-end gap-3 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[#49739c] text-base font-normal leading-normal">
                    {insights[0].description}
                  </p>
                  <p className="text-[#49739c] text-base font-normal leading-normal">
                    By {insights[0].author} · {insights[0].date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Recent Posts
        </h2>
        {recentPosts.map((post, idx) => (
          <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2" key={idx}>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              style={{ backgroundImage: `url("${post.image}")` }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">
                {post.title}
              </p>
              <p className="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">
                By {post.author} · {post.date}
              </p>
            </div>
          </div>
        ))}
        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Categories
        </h2>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf4] pl-4 pr-4"
            >
              <p className="text-[#0d141c] text-sm font-medium leading-normal">
                {cat}
              </p>
            </div>
          ))}
        </div>
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div
                className="text-[#49739c] flex border-none bg-[#e7edf4] items-center justify-center pl-4 rounded-l-lg border-r-0"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search articles"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none h-full placeholder:text-[#49739c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value=""
                readOnly
              />
            </div>
          </label>
        </div>
      </div>
      <div>
        <div className="flex gap-2 border-t border-[#e7edf4] bg-slate-50 px-4 pb-3 pt-2">
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]" href="#">
            <div className="text-[#49739c] flex h-8 items-center justify-center" data-icon="House" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
              </svg>
            </div>
            <p className="text-[#49739c] text-xs font-medium leading-normal tracking-[0.015em]">
              Home
            </p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#0d141c]" href="#">
            <div className="text-[#0d141c] flex h-8 items-center justify-center" data-icon="PresentationChart" data-size="24px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,144a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
              </svg>
            </div>
            <p className="text-[#0d141c] text-xs font-medium leading-normal tracking-[0.015em]">
              Insights
            </p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]" href="#">
            <div className="text-[#49739c] flex h-8 items-center justify-center" data-icon="PuzzlePiece" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"></path>
              </svg>
            </div>
            <p className="text-[#49739c] text-xs font-medium leading-normal tracking-[0.015em]">
              Services
            </p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#49739c]" href="#">
            <div className="text-[#49739c] flex h-8 items-center justify-center" data-icon="Envelope" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
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

export default TechInsight;
