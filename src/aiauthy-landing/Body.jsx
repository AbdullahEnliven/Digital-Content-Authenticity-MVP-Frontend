import svgPaths from "./svg-ra44q13dsm";

function Group() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9996 18.3329">
          <g id="Group">
            <path d={svgPaths.p3f4c3940} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66663" />
            <path d={svgPaths.p8362d40} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66663" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group />
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[35.997px]" data-name="Background">
      <div className="-translate-y-1/2 absolute left-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(15,23,36,0.04)] size-[36px] top-1/2" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
      </div>
      <IconifyIcon />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[15px] whitespace-nowrap">
        <p className="leading-[18px]">Text Analysis</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12.005px] items-center relative shrink-0 w-full" data-name="Container">
      <Background />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e2e8f0] h-[7.993px] rounded-[999px] shrink-0 w-[186.462px]" data-name="Background" />
      <div className="bg-gradient-to-r from-[#fecaca] h-[7.993px] rounded-[999px] shrink-0 to-[#fca5a5] w-full" data-name="Gradient" />
      <div className="bg-gradient-to-r from-[#fecaca] h-[8.004px] rounded-[999px] shrink-0 to-[#fca5a5] w-[164.27px]" data-name="Gradient" />
      <div className="bg-[#e2e8f0] h-[8.004px] rounded-[999px] shrink-0 w-[102.109px]" data-name="Background" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">AI probability</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">92%</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-gradient-to-b from-[#fef2f2] relative rounded-[14px] shrink-0 to-[#fee2e2] w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16.003px] pr-[16.002px] py-[12px] relative size-full">
          <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Overlay+Shadow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.8),inset_0px_0px_0px_1px_rgba(239,68,68,0.15)]" />
          </div>
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.75)] content-stretch flex flex-col gap-[18px] items-start p-[20px] relative rounded-[24px] w-[262px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bottom-0 left-0 pointer-events-none rounded-[24px] shadow-[0px_24px_48px_-12px_rgba(15,23,36,0.15)] top-0 w-[262px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.08)]" />
      </div>
      <Container2 />
      <Container4 />
      <Background1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[16.002px] relative shrink-0 w-[15.992px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9921 16.0021">
        <g clipPath="url(#clip0_1_615)" id="SVG">
          <path d={svgPaths.p7eec340} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33267" />
        </g>
        <defs>
          <clipPath id="clip0_1_615">
            <rect fill="white" height="16.0021" width="15.9921" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconifyIcon1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg1 />
    </div>
  );
}

function Background2() {
  return (
    <div className="content-stretch flex h-[27.999px] items-center justify-center relative rounded-[8px] shrink-0 w-[27.998px]" style={{ backgroundImage: "linear-gradient(134.999deg, rgb(255, 251, 235) 0%, rgb(254, 243, 199) 100%)" }} data-name="Background">
      <div className="-translate-y-1/2 absolute left-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_0px_rgba(15,23,36,0.04)] size-[28px] top-1/2" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
      </div>
      <IconifyIcon1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Likely AI-generated</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[12.004px] items-center left-[13.99px] px-[4px] right-[14px] top-[14.01px]" data-name="Container">
      <Background2 />
      <Container8 />
    </div>
  );
}

function AiDetectionPreview() {
  return (
    <div className="absolute h-[249.993px] left-0 right-0 top-[8px]" data-name="AI detection preview">
      <div className="absolute inset-0 overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[32px] border-b border-[#e2e8f0] bg-white/95">
          <div className="flex h-full items-center gap-[6px] px-[10px]">
            <div className="size-[6px] rounded-full bg-[#fda4af]" />
            <div className="size-[6px] rounded-full bg-[#fde68a]" />
            <div className="size-[6px] rounded-full bg-[#86efac]" />
            <div className="ml-[8px] h-[10px] w-[78px] rounded-full bg-[#e2e8f0]" />
          </div>
        </div>
        <div className="absolute left-[14px] top-[46px] w-[92px] rounded-[14px] border border-[#e2e8f0] bg-white px-[10px] py-[10px] shadow-[0px_8px_20px_0px_rgba(15,23,36,0.08)]">
          <div className="mb-[8px] h-[8px] w-[54px] rounded-full bg-[#f1f5f9]" />
          <div className="space-y-[6px]">
            <div className="h-[6px] w-full rounded-full bg-[#dbeafe]" />
            <div className="h-[6px] w-[72%] rounded-full bg-[#bfdbfe]" />
            <div className="h-[6px] w-[84%] rounded-full bg-[#dbeafe]" />
          </div>
          <div className="mt-[10px] rounded-[10px] bg-[#eff6ff] px-[8px] py-[6px]">
            <div className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#2563eb]">Flagged</div>
            <div className="mt-[3px] text-[9px] font-semibold leading-[1.25] text-[#0f172a]">Repeated phrasing pattern</div>
          </div>
        </div>
        <div className="absolute left-[118px] right-[14px] top-[48px] rounded-[16px] border border-[#e2e8f0] bg-white/92 px-[12px] py-[12px] shadow-[0px_12px_24px_0px_rgba(15,23,36,0.06)]">
          <div className="flex items-center justify-between">
            <div className="h-[10px] w-[82px] rounded-full bg-[#e2e8f0]" />
            <div className="rounded-full bg-[#eff6ff] px-[8px] py-[4px] text-[8px] font-bold uppercase tracking-[0.12em] text-[#2563eb]">
              Analysis
            </div>
          </div>
          <div className="mt-[12px] space-y-[8px]">
            <div className="h-[7px] w-full rounded-full bg-[#f1f5f9]" />
            <div className="h-[7px] w-[88%] rounded-full bg-[#f1f5f9]" />
            <div className="h-[7px] w-[94%] rounded-full bg-[#f1f5f9]" />
            <div className="h-[7px] w-[72%] rounded-full bg-[#f1f5f9]" />
          </div>
          <div className="mt-[14px] grid grid-cols-3 gap-[8px]">
            <div className="rounded-[12px] bg-[#f8fafc] px-[8px] py-[8px]">
              <div className="text-[7px] font-bold uppercase tracking-[0.1em] text-[#64748b]">Pattern</div>
              <div className="mt-[3px] text-[10px] font-bold text-[#0f172a]">High</div>
            </div>
            <div className="rounded-[12px] bg-[#f8fafc] px-[8px] py-[8px]">
              <div className="text-[7px] font-bold uppercase tracking-[0.1em] text-[#64748b]">Human</div>
              <div className="mt-[3px] text-[10px] font-bold text-[#0f172a]">Low</div>
            </div>
            <div className="rounded-[12px] bg-[#ecfdf5] px-[8px] py-[8px]">
              <div className="text-[7px] font-bold uppercase tracking-[0.1em] text-[#059669]">Score</div>
              <div className="mt-[3px] text-[10px] font-bold text-[#065f46]">92%</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[18px] left-[118px] right-[14px] rounded-[14px] border border-[#fecaca] bg-[linear-gradient(180deg,#fff1f2_0%,#ffe4e6_100%)] px-[12px] py-[10px] shadow-[0px_10px_20px_0px_rgba(239,68,68,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#b91c1c]">AI probability</div>
              <div className="mt-[2px] text-[14px] font-extrabold text-[#7f1d1d]">92%</div>
            </div>
            <div className="h-[8px] w-[72px] overflow-hidden rounded-full bg-white/80">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#fb7185] to-[#ef4444]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(15,23,36,0.85)] content-stretch flex flex-col items-start left-[11.99px] px-[12px] py-[6px] rounded-[999px] top-[12px]" data-name="Overlay+OverlayBlur">
      <div className="absolute inset-0 pointer-events-none rounded-[999px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.1)]" />
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Scanning...</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[212.001px] left-[14px] overflow-clip right-[14.01px] rounded-tl-[18px] rounded-tr-[18px] top-[56px]" data-name="Background">
      <AiDetectionPreview />
      <OverlayOverlayBlur1 />
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div className="h-[248px] overflow-clip relative rounded-[24px] shadow-[0px_24px_48px_-12px_rgba(15,23,36,0.15)] w-[242px]" data-name="Overlay+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.75)] inset-0 pointer-events-none rounded-[24px]" />
      <Container7 />
      <Background3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.08)]" />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9995 19.9995">
        <g clipPath="url(#clip0_1_608)" id="SVG">
          <path d={svgPaths.pe154500} id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66663" />
        </g>
        <defs>
          <clipPath id="clip0_1_608">
            <rect fill="white" height="19.9995" width="19.9995" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconifyIcon2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg2 />
    </div>
  );
}

function Background4() {
  return (
    <div className="content-stretch flex h-[36.008px] items-center justify-center relative rounded-[12px] shrink-0 w-[35.998px]" style={{ backgroundImage: "linear-gradient(134.992deg, rgb(250, 245, 255) 0%, rgb(243, 232, 255) 100%)" }} data-name="Background">
      <div className="-translate-y-1/2 absolute left-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(15,23,36,0.04)] size-[36px] top-1/2" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
      </div>
      <IconifyIcon2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[15px] whitespace-nowrap">
        <p className="leading-[18px]">Audio Check</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[11.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[53.995px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#cbd5e1] h-[17.998px] rounded-[999px] shrink-0 w-[6.003px]" data-name="Background" />
      <div className="bg-[#cbd5e1] h-[28.003px] rounded-[999px] shrink-0 w-[6.003px]" data-name="Background" />
      <div className="bg-[#cbd5e1] h-[40px] rounded-[999px] shrink-0 w-[5.992px]" data-name="Background" />
      <div className="bg-[#fca5a5] h-[22.001px] rounded-[999px] shrink-0 w-[5.993px]" data-name="Background" />
      <div className="bg-[#ef4444] h-[46.002px] rounded-[999px] shadow-[0px_0px_8px_0px_rgba(239,68,68,0.4)] shrink-0 w-[5.993px]" data-name="Background+Shadow" />
      <div className="bg-[#f87171] h-[29.994px] rounded-[999px] shrink-0 w-[6.003px]" data-name="Background" />
      <div className="bg-[#cbd5e1] h-[17.998px] rounded-[999px] shrink-0 w-[6.003px]" data-name="Background" />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-gradient-to-b from-[#fef2f2] relative rounded-[14px] shrink-0 to-[#fee2e2] w-full" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[14px] py-[12px] relative size-full">
          <div className="absolute inset-[0_0_-0.01px_0] pointer-events-none rounded-[14px]" data-name="Overlay+Shadow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.8),inset_0px_0px_0px_1px_rgba(239,68,68,0.15)]" />
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Neural synthesis detected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverlayOverlayBlur2() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.75)] content-stretch flex flex-col gap-[18px] items-start p-[20px] relative rounded-[24px] w-[284px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bottom-0 pointer-events-none right-0 rounded-[24px] shadow-[0px_24px_48px_-12px_rgba(15,23,36,0.15)] top-0 w-[284px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.08)]" />
      </div>
      <Container9 />
      <Container11 />
      <Background5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Group">
      <div className="absolute inset-[-8.33%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6681 9.33423">
          <g id="Group">
            <path d={svgPaths.p3fa14d58} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33346" />
            <path d={svgPaths.p1eb76300} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33346" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16.002px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function IconifyIcon3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg3 />
    </div>
  );
}

function Background6() {
  return (
    <div className="content-stretch flex h-[27.998px] items-center justify-center relative rounded-[8px] shrink-0 w-[27.999px]" style={{ backgroundImage: "linear-gradient(135.001deg, rgb(236, 253, 245) 0%, rgb(209, 250, 229) 100%)" }} data-name="Background">
      <div className="-translate-y-1/2 absolute left-0 pointer-events-none rounded-[8px] shadow-[0px_4px_8px_0px_rgba(15,23,36,0.04)] size-[28px] top-1/2" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
      </div>
      <IconifyIcon3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[15px] whitespace-nowrap">
        <p className="leading-[18px]">Video Scan</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[11.995px] items-center left-[16px] right-[16px] top-[16.01px]" data-name="Container">
      <Background6 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Frame analysis</p>
      </div>
    </div>
  );
}

function Strong() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Strong">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">100%</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] pt-[5.994px] right-[16px] top-[54.01px]" data-name="Container">
      <Container15 />
      <Strong />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.001px] items-start justify-center left-[16px] overflow-clip pointer-events-none right-[16px] rounded-[999px] top-[87.01px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#f1f5f9] inset-0 rounded-[999px]" />
      <div className="flex-[1_0_0] min-h-px relative rounded-[999px] w-full" data-name="Gradient+Shadow">
        <div aria-hidden="true" className="absolute bg-gradient-to-r from-[#34d399] inset-0 rounded-[999px] to-[#10b981]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.4)]" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.35%_8.35%_8.32%_8.29%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4996 16.4937">
          <g id="Group">
            <path d={svgPaths.p3b8304e0} id="Vector" stroke="var(--stroke-0, #047857)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49955" />
            <path d={svgPaths.p7405d00} id="Vector_2" stroke="var(--stroke-0, #047857)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49955" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[17.995px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function IconifyIcon4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[17.995px]" data-name="Container">
      <IconifyIcon4 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Authentic</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#ecfdf5] gap-[10.008px] items-center left-[16px] px-[16px] py-[12px] right-[15.99px] rounded-[14px] to-[#d1fae5] top-[113px]" data-name="Background">
      <div className="absolute inset-[0_0.01px_-0.01px_0] pointer-events-none rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.8),inset_0px_0px_0px_1px_rgba(16,185,129,0.15)]" />
      </div>
      <Container16 />
      <Container17 />
    </div>
  );
}

function OverlayOverlayBlur3() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.75)] h-[171px] relative rounded-[24px] w-[242px]" data-name="Overlay+OverlayBlur">
      <div className="absolute bottom-0 pointer-events-none right-0 rounded-[24px] shadow-[0px_24px_48px_-12px_rgba(15,23,36,0.15)] top-0 w-[242px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.08)]" />
      </div>
      <Container12 />
      <Container14 />
      <BackgroundShadow1 />
      <Background7 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-center rounded-[24px]" data-name="Background">
      <div className="pointer-events-none relative rounded-[24px] shadow-[0px_16px_32px_0px_rgba(15,23,36,0.08)] shrink-0 size-[76px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="col-1 gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__13px_13px] relative row-1 self-center shrink-0 size-[32px]" data-name="Container">
      <div className="bg-[#2563eb] col-1 rounded-[999px] row-1 shrink-0 size-[13px]" data-name="Background" />
      <div className="bg-[#0f172a] col-2 rounded-[999px] row-1 shrink-0 size-[13px]" data-name="Background" />
      <div className="bg-[#0f172a] col-1 rounded-[999px] row-2 shrink-0 size-[13px]" data-name="Background" />
      <div className="bg-[#0f172a] col-2 rounded-[999px] row-2 shrink-0 size-[13px]" data-name="Background" />
    </div>
  );
}

function Container19() {
  return (
    <div className="-translate-x-1/2 absolute grid grid-cols-[_76px] grid-rows-[_76px] left-1/2 rounded-[24px] size-[76px] top-0" data-name="Container">
      <div className="absolute inset-[-24px] rounded-[62px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 124 124\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.7681 0 0 8.7681 62 62)\\'><stop stop-color=\\'rgba(37,99,235,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(37,99,235,0)\\' offset=\\'0.6\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <Background8 />
      <Container20 />
    </div>
  );
}

function Blur() {
  return (
    <div className="absolute blur-[6px] content-stretch flex flex-col h-[81.88px] items-center left-0 opacity-40 top-[0.5px] w-[76.06px]" data-name="Blur">
      <div className="bg-clip-text flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[78px] text-[transparent] text-center tracking-[-3.12px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(134.966deg, rgb(37, 99, 235) 0%, rgb(139, 92, 246) 100%)" }}>
        <p className="leading-[81.9px]">AI</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <Blur />
      <div className="bg-clip-text flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[78px] text-[transparent] text-center tracking-[-3.12px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(134.962deg, rgb(37, 99, 235) 0%, rgb(139, 92, 246) 100%)" }}>
        <p className="leading-[81.9px]">AI</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[78px] text-center tracking-[-3.12px] whitespace-nowrap">
        <p className="leading-[81.9px]">{`and what's `}</p>
      </div>
      <Container22 />
    </div>
  );
}

function Heading() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[5.89px] items-center left-1/2 max-w-[900px] top-[104px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[78px] text-center tracking-[-3.12px] whitespace-nowrap">
        <p className="leading-[81.9px]">{`Detect what's human`}</p>
      </div>
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 max-w-[600px] pb-[0.69px] top-[300.68px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Analyze text, images, audio, and video with one intelligent verification</p>
        <p className="leading-[28.8px]">platform.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#3b82f6] items-center px-[32px] py-[16px] relative rounded-[999px] shrink-0 to-[#2563eb]" data-name="Link">
      <div className="absolute inset-0 pointer-events-none rounded-[999px] shadow-[0px_12px_24px_-4px_rgba(37,99,235,0.4)]" data-name="Link:shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Get started free</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Link />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[301px] pt-[8px] top-[387.38px]" data-name="Margin">
      <Container24 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[446.38px] max-w-[780px] relative shrink-0 w-[780px]" data-name="Container">
      <Container19 />
      <Heading />
      <Container23 />
      <Margin />
    </div>
  );
}

function Container1() {
  return (
    <div className="min-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] pb-[100px] pt-[140px] px-[40px] relative size-full">
          <div className="absolute flex h-[241.204px] items-center justify-center left-[-22.52px] top-[38.89px] w-[283.038px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "89" }}>
            <div className="-rotate-6 flex-none">
              <OverlayOverlayBlur />
            </div>
          </div>
          <div className="absolute bottom-[-48.16px] flex h-[260.325px] items-center justify-center left-[3.68px] w-[254.648px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "89" }}>
            <div className="flex-none rotate-3">
              <OverlayShadowOverlayBlur />
            </div>
          </div>
          <div className="absolute flex h-[235.549px] items-center justify-center right-[-24.04px] top-[45.72px] w-[304.081px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "67" }}>
            <div className="flex-none rotate-6">
              <OverlayOverlayBlur2 />
            </div>
          </div>
          <div className="absolute bottom-[-50.21px] flex h-[183.431px] items-center justify-center right-[3.69px] w-[250.618px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "133" }}>
            <div className="-rotate-3 flex-none">
              <OverlayOverlayBlur3 />
            </div>
          </div>
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[26px] place-items-center relative shrink-0 w-[26px]" data-name="Container">
      <div className="bg-[#2563eb] col-1 rounded-[999px] row-1 shrink-0 size-[11px]" data-name="Background" />
      <div className="bg-[#0f1724] col-2 rounded-[999px] row-1 shrink-0 size-[11px]" data-name="Background" />
      <div className="bg-[#0f1724] col-1 rounded-[999px] row-2 shrink-0 size-[11px]" data-name="Background" />
      <div className="bg-[#0f1724] col-2 rounded-[999px] row-2 shrink-0 size-[11px]" data-name="Background" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f1724] text-[17px] tracking-[-0.51px] whitespace-nowrap">
        <p className="leading-[normal]">AIAUTHY</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Link">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Features</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">How It Works</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Use Cases</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Contact</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="Container">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-col items-start px-[22px] py-[10px] relative rounded-[999px] shadow-[0px_4px_12px_0px_rgba(15,23,36,0.15)] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Support</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.75)] content-stretch flex items-center justify-between left-[14.29%] max-w-[1000px] pl-[24px] pr-[16.01px] py-[12px] right-[14.29%] rounded-[999px] top-[24px]" data-name="Nav">
      <div className="absolute inset-0 pointer-events-none rounded-[999px] shadow-[0px_8px_24px_-4px_rgba(15,23,36,0.06)]" data-name="Nav:shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
      </div>
      <Link1 />
      <Container27 />
      <Link6 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[772px] overflow-clip pb-[85.62px] relative rounded-[32px] shadow-[0px_8px_32px_0px_rgba(15,23,36,0.03)] shrink-0 w-full" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1400 772\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(98.995 0 0 109.18 700 0)\\'><stop stop-color=\\'rgba(37,99,235,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(37,99,235,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1400 772\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(189.74 0 0 104.63 -63467 -34997)\\'><stop stop-color=\\'rgba(15,23,36,0.04)\\' offset=\\'0.015372\\'/><stop stop-color=\\'rgba(15,23,36,0)\\' offset=\\'0.015372\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
      <Container1 />
      <Nav />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="min-h-[812px] relative shrink-0 w-full" data-name="Section">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] p-[20px] relative size-full">
          <BackgroundShadow />
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(37,99,235,0.08)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Overlay">
      <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(37,99,235,0.15)]" />
      </div>
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[13px] text-center tracking-[0.78px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">FEATURES</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[20px] relative shrink-0" data-name="Margin">
      <Overlay />
    </div>
  );
}

function MarginAlignCenter() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Margin:align-center">
      <Margin1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[44px] text-center tracking-[-1.76px] whitespace-nowrap">
        <p className="leading-[48.4px]">Multi-format AI Detection</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[30px] max-w-[580px] pb-[0.69px] right-[30px] top-[-1.1px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Analyze and verify content across all major formats with one</p>
        <p className="leading-[28.8px]">unified system.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[57.59px] relative shrink-0 w-full" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] relative shrink-0 w-[640px]" data-name="Container">
      <MarginAlignCenter />
      <Heading2Margin />
      <Margin2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
          <g id="Group">
            <path d={svgPaths.p86e9880} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3d410c00} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function IconifyIcon5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg5 />
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }} />
      <IconifyIcon5 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] w-full">
        <p className="leading-[26.4px]">Text Detection</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px]">Detect AI-written vs human-written text with probability scoring.</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-white col-1 justify-self-stretch min-h-[240px] relative rounded-[28px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-h-[inherit] pb-[68.1px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-[0_0_0.1px_0] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <BackgroundShadow2 />
        <Heading2 />
        <Container31 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path d={svgPaths.p3e1fa080} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pf748440} id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p359f8200} id="Vector_3" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function IconifyIcon6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg6 />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(245,158,11,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 251, 235) 0%, rgb(254, 243, 199) 100%)" }} />
      <IconifyIcon6 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] w-full">
        <p className="leading-[26.4px]">Image Analysis</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px]">Identify synthetic or AI-generated visuals using advanced forensics.</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[240px] relative rounded-[28px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-h-[inherit] pb-[68.1px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-[0_0_0.1px_0] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <BackgroundShadow3 />
        <Heading3 />
        <Container32 />
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p13434f80} id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg7 />
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(168,85,247,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(250, 245, 255) 0%, rgb(243, 232, 255) 100%)" }} />
      <IconifyIcon7 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] w-full">
        <p className="leading-[26.4px]">Audio Verification</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px]">Detect voice cloning and neural synthesis in audio files.</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-white col-1 justify-self-stretch min-h-[240px] relative rounded-[28px] row-2 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-h-[inherit] pb-[68.1px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-[0_0_0.1px_0] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <BackgroundShadow4 />
        <Heading4 />
        <Container33 />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Group">
      <div className="absolute inset-[-8.33%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 14">
          <g id="Group">
            <path d={svgPaths.p11555f80} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3a8af600} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group5 />
    </div>
  );
}

function IconifyIcon8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg8 />
    </div>
  );
}

function BackgroundShadow5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(16,185,129,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(236, 253, 245) 0%, rgb(209, 250, 229) 100%)" }} />
      <IconifyIcon8 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] w-full">
        <p className="leading-[26.4px]">Video Scanning</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px]">Analyze frames to detect deepfakes and manipulated video content.</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[240px] relative rounded-[28px] row-2 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-h-[inherit] pb-[68.1px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-[0_0_0.1px_0] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <BackgroundShadow5 />
        <Heading5 />
        <Container34 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__240px_240px] relative shrink-0 w-full" data-name="Container">
      <Background9 />
      <Background10 />
      <Background11 />
      <Background12 />
    </div>
  );
}

function Section1() {
  return (
    <div className="relative rounded-[36px] shadow-[0px_8px_32px_0px_rgba(15,23,36,0.03)] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[36px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1400 978.59\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(120.27 0 0 120.34 700 0)\\'><stop stop-color=\\'rgba(37,99,235,0.03)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(37,99,235,0)\\' offset=\\'0.6\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[80px] py-[120px] relative size-full">
          <Container28 />
          <Container30 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(37,99,235,0.08)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Overlay">
      <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(37,99,235,0.15)]" />
      </div>
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[13px] text-center tracking-[0.78px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">WORKFLOW</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[20px] relative shrink-0" data-name="Margin">
      <Overlay1 />
    </div>
  );
}

function MarginAlignCenter1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Margin:align-center">
      <Margin3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[44px] text-center tracking-[-1.76px] whitespace-nowrap">
        <p className="leading-[48.4px]">How it works</p>
      </div>
    </div>
  );
}

function Heading2Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading6 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[30px] max-w-[580px] pb-[0.695px] right-[30px] top-[-1.11px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Run a consistent verification process across every content type in</p>
        <p className="leading-[28.8px]">a few fast steps.</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[57.59px] relative shrink-0 w-full" data-name="Margin">
      <Container36 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] relative shrink-0 w-[640px]" data-name="Container">
      <MarginAlignCenter1 />
      <Heading2Margin1 />
      <Margin4 />
    </div>
  );
}

function BackgroundShadow6() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center relative rounded-[999px] shadow-[0px_8px_16px_0px_rgba(15,23,36,0.2)] shrink-0 size-[38px]" data-name="Background+Shadow">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p30f70400} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg9 />
    </div>
  );
}

function BackgroundShadow7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }} />
      <IconifyIcon9 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] w-full">
        <p className="leading-[26.4px]">Upload or Paste Content</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px]">Add text, image, audio, or video.</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-white col-1 justify-self-stretch min-h-[240px] relative rounded-[28px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-h-[inherit] p-[32px] relative size-full">
        <div className="absolute inset-[0_0_0.11px_0] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <BackgroundShadow6 />
        <BackgroundShadow7 />
        <Heading7 />
        <Container38 />
      </div>
    </div>
  );
}

function BackgroundShadow8() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center relative rounded-[999px] shadow-[0px_8px_16px_0px_rgba(15,23,36,0.2)] shrink-0 size-[38px]" data-name="Background+Shadow">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path d={svgPaths.p1a9c4380} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p38beae80} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M14 14L12.1 12.1" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group6 />
    </div>
  );
}

function IconifyIcon10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg10 />
    </div>
  );
}

function BackgroundShadow9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }} />
      <IconifyIcon10 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] w-full">
        <p className="leading-[26.4px]">Run AI Analysis</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px]">Our system evaluates patterns and signals.</p>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[240px] relative rounded-[28px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-h-[inherit] p-[32px] relative size-full">
        <div className="absolute inset-[0_0_0.11px_0] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <BackgroundShadow8 />
        <BackgroundShadow9 />
        <Heading8 />
        <Container39 />
      </div>
    </div>
  );
}

function BackgroundShadow10() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center relative rounded-[999px] shadow-[0px_8px_16px_0px_rgba(15,23,36,0.2)] shrink-0 size-[38px]" data-name="Background+Shadow">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[8.35%_8.35%_8.32%_8.29%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0061 21.9983">
          <g id="Group">
            <path d={svgPaths.pcc0c780} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p17af0980} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group7 />
    </div>
  );
}

function IconifyIcon11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg11 />
    </div>
  );
}

function BackgroundShadow11() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }} />
      <IconifyIcon11 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] w-full">
        <p className="leading-[26.4px]">Get Instant Results</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px]">Receive a confidence score and classification.</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-white col-3 justify-self-stretch min-h-[240px] relative rounded-[28px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-h-[inherit] p-[32px] relative size-full">
        <div className="absolute inset-[0_-0.01px_0.11px_0] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <BackgroundShadow10 />
        <BackgroundShadow11 />
        <Heading9 />
        <Container40 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_261.89px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-gradient-to-r from-[rgba(15,23,36,0)] h-[2px] left-[10%] right-[10%] to-[rgba(15,23,36,0)] top-[50px] via-1/2 via-[rgba(15,23,36,0.08)]" data-name="Horizontal Divider" />
      <Background13 />
      <Background14 />
      <Background15 />
    </div>
  );
}

function Section2() {
  return (
    <div className="relative rounded-[36px] shadow-[0px_8px_32px_0px_rgba(15,23,36,0.03)] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[36px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1400 736.49\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(101.56 0 0 101.65 700 0)\\'><stop stop-color=\\'rgba(37,99,235,0.03)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(37,99,235,0)\\' offset=\\'0.6\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64.01px] items-center px-[80px] py-[120px] relative size-full">
          <Container35 />
          <Container37 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(37,99,235,0.08)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Overlay">
      <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(37,99,235,0.15)]" />
      </div>
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[13px] text-center tracking-[0.78px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">PRODUCT</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[20px] relative shrink-0" data-name="Margin">
      <Overlay2 />
    </div>
  );
}

function MarginAlignCenter2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Margin:align-center">
      <Margin5 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[44px] text-center tracking-[-1.76px] whitespace-nowrap">
        <p className="leading-[48.4px]">Built for real-time verification</p>
      </div>
    </div>
  );
}

function Heading2Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading10 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[92.05px] max-w-[580px] pb-[0.8px] right-[92.06px] top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">Upload content and get instant AI vs human analysis.</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[28.8px] relative shrink-0 w-full" data-name="Margin">
      <Container42 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] relative shrink-0 w-[640px]" data-name="Container">
      <MarginAlignCenter2 />
      <Heading2Margin2 />
      <Margin6 />
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[8px] relative rounded-[999px] shrink-0" data-name="Background">
      <div className="absolute inset-0 pointer-events-none rounded-[999px] shadow-[0px_2px_8px_0px_rgba(15,23,36,0.05)]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Text</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] py-[8px] relative rounded-[999px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Image</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] py-[8px] relative rounded-[999px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Audio</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] py-[8px] relative rounded-[999px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Video</p>
      </div>
    </div>
  );
}

function BackgroundShadow12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[6px] relative rounded-[999px] shrink-0" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#f1f5f9] inset-0 pointer-events-none rounded-[999px]" />
      <Background17 />
      <Container44 />
      <Container45 />
      <Container46 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[68.08px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Verification</p>
        <p className="leading-[24px]">workspace</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Overlay">
      <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(37,99,235,0.15)]" />
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Live scan</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Overlay3 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px] mb-0">Paste content or upload a file to</p>
        <p className="leading-[25.5px] mb-0">compare human patterns with</p>
        <p className="leading-[25.5px]">generative signals.</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[24px] relative size-full">
        <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_12px_0px_rgba(15,23,36,0.02)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[20px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
        </div>
        <div className="bg-[#e2e8f0] h-[10px] rounded-[999px] shrink-0 w-[214.31px]" data-name="Background" />
        <div className="bg-[#e2e8f0] h-[10px] rounded-[999px] shrink-0 w-[200.63px]" data-name="Background" />
        <div className="bg-gradient-to-r from-[#fecaca] h-[10px] rounded-[999px] shrink-0 to-[#fca5a5] w-[164.16px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-[#fecaca] h-[10px] rounded-[999px] shrink-0 to-[#fca5a5] w-[186.95px]" data-name="Gradient" />
        <div className="bg-[#e2e8f0] h-[10px] rounded-[999px] shrink-0 w-[132.23px]" data-name="Background" />
        <div className="bg-[#e2e8f0] h-[10px] rounded-[999px] shrink-0 w-[168.72px]" data-name="Background" />
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col items-start left-0 px-[20px] py-[14px] rounded-[999px] top-1/2" data-name="Background">
      <div className="absolute inset-0 pointer-events-none rounded-[999px] shadow-[0px_2px_8px_0px_rgba(15,23,36,0.04)]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.08)]" />
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Paste sample text</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="-translate-y-1/2 absolute bg-gradient-to-b content-stretch flex flex-col from-[#3b82f6] items-start left-[177.03px] px-[24px] py-[14px] rounded-[999px] to-[#2563eb] top-1/2" data-name="Link">
      <div className="absolute inset-0 pointer-events-none rounded-[999px] shadow-[0px_12px_24px_-4px_rgba(37,99,235,0.4)]" data-name="Link:shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Run analysis</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="Container">
      <Background20 />
      <Link7 />
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-gradient-to-b col-1 from-[#f8fafc] justify-self-stretch min-h-[360px] relative rounded-[24px] row-1 self-start shrink-0 to-[#f1f5f9]" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[28px] relative size-full">
        <div className="absolute inset-[0_0_0.5px_0] pointer-events-none rounded-[24px]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_4px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
        </div>
        <Container48 />
        <Background19 />
        <Container51 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[16.8px]">AI Probability</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[22.79px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[42px] tracking-[-2.1px] whitespace-nowrap">
        <p className="leading-[42px]">92%</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[64.8px] relative shrink-0 w-[91.89px]" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1e458900} id="Vector" stroke="var(--stroke-0, #B91C1C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg12 />
    </div>
  );
}

function BackgroundShadow13() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(239,68,68,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(254, 242, 242) 0%, rgb(254, 226, 226) 100%)" }} />
      <IconifyIcon12 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <BackgroundShadow13 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1bd74e40} id="Vector" stroke="var(--stroke-0, #B91C1C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg13 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <IconifyIcon13 />
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#fef2f2] gap-[10px] items-center px-[14px] py-[10px] relative rounded-[999px] shrink-0 to-[#fee2e2]" data-name="Background">
      <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.8),inset_0px_0px_0px_1px_rgba(239,68,68,0.15)]" />
      </div>
      <Container56 />
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">AI Generated</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Confidence bar</p>
      </div>
    </div>
  );
}

function Strong1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Strong">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">High certainty</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Strong1 />
    </div>
  );
}

function BackgroundShadow14() {
  return (
    <div className="h-[12px] overflow-clip pointer-events-none relative rounded-[999px] shrink-0 w-full" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#e2e8f0] inset-0 rounded-[999px]" />
      <div className="absolute inset-[0_8%_0_0] rounded-[999px]" data-name="Gradient+Shadow">
        <div aria-hidden="true" className="absolute bg-gradient-to-r from-[#f43f5e] inset-0 rounded-[999px] to-[#3b82f6]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.4)]" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <BackgroundShadow14 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Pattern repetition</p>
      </div>
    </div>
  );
}

function Strong2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Strong">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">High</p>
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[14px] relative size-full">
          <div className="absolute inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,23,36,0.02)]" data-name="Overlay+Shadow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
          </div>
          <Container61 />
          <Strong2 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Stylistic consistency</p>
      </div>
    </div>
  );
}

function Strong3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Strong">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Elevated</p>
      </div>
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[14.61px] py-[14px] relative size-full">
          <div className="absolute inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,23,36,0.02)]" data-name="Overlay+Shadow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
          </div>
          <Container62 />
          <Strong3 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Human variation</p>
      </div>
    </div>
  );
}

function Strong4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Strong">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Low</p>
      </div>
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[14px] relative size-full">
          <div className="absolute inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,23,36,0.02)]" data-name="Overlay+Shadow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
          </div>
          <Container63 />
          <Strong4 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Background23 />
      <Background24 />
      <Background25 />
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-gradient-to-b col-2 from-white justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0 to-[#f8fafc]" data-name="Background">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[81.71px] pt-[28px] px-[28px] relative size-full">
        <div className="absolute bottom-[0.01px] left-0 pointer-events-none rounded-[24px] shadow-[0px_12px_24px_0px_rgba(15,23,36,0.04)] top-0 w-[300px]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
        </div>
        <Container52 />
        <Background22 />
        <Container57 />
        <Container60 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[__minmax(0,1fr)_300px] grid-rows-[_467.50px] relative shrink-0 w-full" data-name="Container">
      <Background18 />
      <Background21 />
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28px] items-start p-[32px] relative rounded-[32px] shrink-0 w-[720px]" data-name="Background">
      <div className="absolute inset-0 pointer-events-none rounded-[32px] shadow-[0px_32px_64px_-16px_rgba(15,23,36,0.12)]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.06)]" />
      </div>
      <BackgroundShadow12 />
      <Container47 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <g id="Group">
            <path d={svgPaths.p10539cc0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p2e7d9180} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group8 />
    </div>
  );
}

function IconifyIcon14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg14 />
    </div>
  );
}

function BackgroundShadow15() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }} />
      <IconifyIcon14 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] w-full">
        <p className="leading-[26.4px]">Results in seconds</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[40px] tracking-[-2px] w-full">
        <p className="leading-[40px]">1.8s</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[24px] mb-0">Fast enough for live classroom, newsroom, and hiring</p>
        <p className="leading-[24px]">workflows.</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start py-[15px] relative shrink-0 w-full" data-name="Margin">
      <Container67 />
    </div>
  );
}

function Background26() {
  return (
    <div className="bg-white relative rounded-[28px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <div className="absolute inset-[0_0_-0.39px_0] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <BackgroundShadow15 />
        <Container65 />
        <Margin7 />
        <Margin8 />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3361">
          <g id="Group">
            <path d={svgPaths.p23b4ae44} id="Vector" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p50f7f00} id="Vector_2" stroke="var(--stroke-0, #059669)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group9 />
    </div>
  );
}

function IconifyIcon15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg15 />
    </div>
  );
}

function BackgroundShadow16() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(16,185,129,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(236, 253, 245) 0%, rgb(209, 250, 229) 100%)" }} />
      <IconifyIcon15 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] w-full">
        <p className="leading-[26.4px]">Cross-format checks</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Text models</p>
      </div>
    </div>
  );
}

function Strong5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Strong">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">84%</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Strong5 />
    </div>
  );
}

function BackgroundShadow17() {
  return (
    <div className="h-[8px] overflow-clip pointer-events-none relative rounded-[999px] shrink-0 w-full" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#f1f5f9] inset-0 rounded-[999px]" />
      <div className="absolute inset-[0_16%_0_0] rounded-[999px]" data-name="Gradient+Shadow">
        <div aria-hidden="true" className="absolute bg-gradient-to-r from-[#60a5fa] inset-0 rounded-[999px] to-[#3b82f6]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.4)]" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Frame authenticity</p>
      </div>
    </div>
  );
}

function Strong6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Strong">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">100%</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container73 />
          <Strong6 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow18() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start justify-center overflow-clip pointer-events-none relative rounded-[999px] shrink-0 w-full" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#f1f5f9] inset-0 rounded-[999px]" />
      <div className="flex-[1_0_0] min-h-px relative rounded-[999px] w-full" data-name="Gradient+Shadow">
        <div aria-hidden="true" className="absolute bg-gradient-to-r from-[#34d399] inset-0 rounded-[999px] to-[#10b981]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.4)]" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <BackgroundShadow17 />
      <Container72 />
      <BackgroundShadow18 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container69 />
    </div>
  );
}

function Background27() {
  return (
    <div className="bg-white relative rounded-[28px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <div className="absolute inset-[0_0_-0.39px_0] pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <BackgroundShadow16 />
        <Container68 />
        <Margin9 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[480px]" data-name="Container">
      <Background26 />
      <Background27 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Background16 />
      <Container64 />
    </div>
  );
}

function Section3() {
  return (
    <div className="relative rounded-[36px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute bg-[#f8fafc] inset-0 pointer-events-none rounded-[36px]" />
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[80px] py-[120px] relative size-full">
          <Container41 />
          <Container43 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(37,99,235,0.08)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Overlay">
      <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(37,99,235,0.15)]" />
      </div>
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[13px] text-center tracking-[0.78px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">USE CASES</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[20px] relative shrink-0" data-name="Margin">
      <Overlay4 />
    </div>
  );
}

function MarginAlignCenter3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Margin:align-center">
      <Margin10 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[44px] text-center tracking-[-1.76px] whitespace-nowrap">
        <p className="leading-[48.4px]">Who is this for?</p>
      </div>
    </div>
  );
}

function Heading2Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading12 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[30px] max-w-[580px] pb-[0.69px] right-[30px] top-[-1.1px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Teams that need trustworthy verification without slowing down</p>
        <p className="leading-[28.8px]">their workflow.</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="h-[57.59px] relative shrink-0 w-full" data-name="Margin">
      <Container75 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] relative shrink-0 w-[640px]" data-name="Container">
      <MarginAlignCenter3 />
      <Heading2Margin3 />
      <Margin11 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[20.83%_8.27%_20.83%_8.34%]" data-name="Group">
      <div className="absolute inset-[-7.14%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0152 16.0004">
          <g id="Group">
            <path d={svgPaths.p322e5440} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3c2f6fc0} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group10 />
    </div>
  );
}

function IconifyIcon16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg16 />
    </div>
  );
}

function BackgroundShadow19() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%)" }} />
      <IconifyIcon16 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] whitespace-nowrap">
        <p className="leading-[26.4px]">Educators</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow19 />
      <Heading13 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px] mb-0">Detect AI-written assignments before grading and support fair academic</p>
        <p className="leading-[25.5px]">review.</p>
      </div>
    </div>
  );
}

function Background28() {
  return (
    <div className="bg-white col-1 justify-self-stretch min-h-[200px] relative rounded-[28px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[18px] items-start min-h-[inherit] pb-[51px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-0 pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[8.33%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0002 20">
          <g id="Group">
            <path d={svgPaths.p33ae0bdc} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p166f12c0} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group11 />
    </div>
  );
}

function IconifyIcon17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg17 />
    </div>
  );
}

function BackgroundShadow20() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%)" }} />
      <IconifyIcon17 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] whitespace-nowrap">
        <p className="leading-[26.4px]">Recruiters</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow20 />
      <Heading14 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px] mb-0">Verify candidate submissions and reduce synthetic content in hiring</p>
        <p className="leading-[25.5px]">pipelines.</p>
      </div>
    </div>
  );
}

function Background29() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[200px] relative rounded-[28px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[18px] items-start min-h-[inherit] pb-[51px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-0 pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Group">
            <path d={svgPaths.p1205d180} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1b5e75e0} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group12 />
    </div>
  );
}

function IconifyIcon18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg18 />
    </div>
  );
}

function BackgroundShadow21() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%)" }} />
      <IconifyIcon18 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] whitespace-nowrap">
        <p className="leading-[26.4px]">Media Teams</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow21 />
      <Heading15 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px] mb-0">Validate content authenticity before publishing visuals, scripts, and audio</p>
        <p className="leading-[25.5px]">assets.</p>
      </div>
    </div>
  );
}

function Background30() {
  return (
    <div className="bg-white col-1 justify-self-stretch min-h-[200px] relative rounded-[28px] row-2 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[18px] items-start min-h-[inherit] pb-[51px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-0 pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <Container81 />
        <Container82 />
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3ab4f440} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg19 />
    </div>
  );
}

function BackgroundShadow22() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%)" }} />
      <IconifyIcon19 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] whitespace-nowrap">
        <p className="leading-[26.4px]">Researchers</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow22 />
      <Heading16 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px] mb-0">Analyze generated data and separate human-authored signals from</p>
        <p className="leading-[25.5px]">synthetic patterns.</p>
      </div>
    </div>
  );
}

function Background31() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[200px] relative rounded-[28px] row-2 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[18px] items-start min-h-[inherit] pb-[51px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-0 pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <Container83 />
        <Container84 />
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p364c4880} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg20 />
    </div>
  );
}

function BackgroundShadow23() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%)" }} />
      <IconifyIcon20 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] whitespace-nowrap">
        <p className="leading-[26.4px]">Security Teams</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow23 />
      <Heading17 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px] mb-0">Detect synthetic media and suspicious manipulation in high-risk</p>
        <p className="leading-[25.5px]">communication channels.</p>
      </div>
    </div>
  );
}

function Background32() {
  return (
    <div className="bg-white col-1 justify-self-stretch min-h-[200px] relative rounded-[28px] row-3 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[18px] items-start min-h-[inherit] pb-[51px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-0 pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <Container85 />
        <Container86 />
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
          <g id="Group">
            <path d={svgPaths.p30c5e80} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p22a120c0} id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pd1b7c00} id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group13 />
    </div>
  );
}

function IconifyIcon21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg21 />
    </div>
  );
}

function BackgroundShadow24() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shadow-[0px_4px_8px_0px_rgba(37,99,235,0.08)] shrink-0 size-[48px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%)" }} />
      <IconifyIcon21 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white]" />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[22px] tracking-[-0.66px] whitespace-nowrap">
        <p className="leading-[26.4px]">Enterprise Ops</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow24 />
      <Heading18 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[25.5px] mb-0">Standardize verification workflows across internal teams handling public-</p>
        <p className="leading-[25.5px]">facing content.</p>
      </div>
    </div>
  );
}

function Background33() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[200px] relative rounded-[28px] row-3 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[18px] items-start min-h-[inherit] pb-[51px] pt-[32px] px-[32px] relative size-full">
        <div className="absolute inset-0 pointer-events-none rounded-[28px] shadow-[0px_12px_32px_0px_rgba(15,23,36,0.03)]" data-name="Overlay+Shadow">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[28px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_white,inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
        </div>
        <Container87 />
        <Container88 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[___200px_200px_200px] relative shrink-0 w-full" data-name="Container">
      <Background28 />
      <Background29 />
      <Background30 />
      <Background31 />
      <Background32 />
      <Background33 />
    </div>
  );
}

function Section4() {
  return (
    <div className="relative rounded-[36px] shadow-[0px_8px_32px_0px_rgba(15,23,36,0.03)] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[36px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1400 1122.6\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(132.24 0 0 132.32 700 0)\\'><stop stop-color=\\'rgba(37,99,235,0.03)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(37,99,235,0)\\' offset=\\'0.6\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[80px] py-[120px] relative size-full">
          <Container74 />
          <Container76 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(37,99,235,0.08)] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Overlay">
      <div className="absolute inset-0 pointer-events-none rounded-[999px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(37,99,235,0.15)]" />
      </div>
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[13px] text-center tracking-[0.78px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">START NOW</p>
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[20px] relative shrink-0" data-name="Margin">
      <Overlay5 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[44px] text-center tracking-[-1.76px] whitespace-nowrap">
        <p className="leading-[48.4px]">Start verifying content today</p>
      </div>
    </div>
  );
}

function Heading2Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Heading 2:margin">
      <Heading19 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="h-[89.59px] relative shrink-0 w-[820px]" data-name="Margin">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 not-italic text-[#475569] text-[18px] text-center top-[27.9px] whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Run instant AI authenticity checks across text, images, audio, and</p>
        <p className="leading-[28.8px]">video from one clean workspace.</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#3b82f6] items-center px-[32px] py-[16px] relative rounded-[999px] shrink-0 to-[#2563eb]" data-name="Link">
      <div className="absolute inset-0 pointer-events-none rounded-[999px] shadow-[0px_12px_24px_-4px_rgba(37,99,235,0.4)]" data-name="Link:shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Get started free</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Link8 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container90 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[820px] relative shrink-0 w-full" data-name="Container">
      <Margin12 />
      <Heading2Margin4 />
      <Margin13 />
      <Margin14 />
    </div>
  );
}

function Section5() {
  return (
    <div className="relative rounded-[36px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute bg-[#f8fafc] inset-0 pointer-events-none rounded-[36px]" />
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[120px] relative size-full">
          <Container89 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(15,23,36,0.05)]" />
    </div>
  );
}

function Container93() {
  return (
    <div className="gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__11px_11px] relative shrink-0 size-[26px]" data-name="Container">
      <div className="bg-[#2563eb] col-1 rounded-[999px] row-1 shrink-0 size-[11px]" data-name="Background" />
      <div className="bg-[#0f1724] col-2 rounded-[999px] row-1 shrink-0 size-[11px]" data-name="Background" />
      <div className="bg-[#0f1724] col-1 rounded-[999px] row-2 shrink-0 size-[11px]" data-name="Background" />
      <div className="bg-[#0f1724] col-2 rounded-[999px] row-2 shrink-0 size-[11px]" data-name="Background" />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[normal]">AIAUTHY</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] whitespace-nowrap">
        <p className="leading-[25.5px] mb-0">A unified verification platform for detecting</p>
        <p className="leading-[25.5px]">synthetic text, visuals, audio, and video.</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Privacy</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Terms</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container97 />
      <Container98 />
    </div>
  );
}

function Container91() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container92 />
        <Container95 />
        <Container96 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-full">
        <p className="leading-[normal]">Product</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[normal]">Features</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[normal]">Pricing</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[normal]">Contact</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link10 />
      <Link11 />
      <Link12 />
    </div>
  );
}

function Container99() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[9px] relative size-full">
        <Heading20 />
        <Container100 />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-full">
        <p className="leading-[normal]">Resources</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[normal]">How it works</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[normal]">Use cases</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[15px] w-full">
        <p className="leading-[normal]">Support</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link13 />
      <Link14 />
      <Link15 />
    </div>
  );
}

function Container101() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[9px] relative size-full">
        <Heading21 />
        <Container102 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(15,23,36,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[___minmax(0,1.50fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_142px] pb-[64px] pt-[65px] px-[40px] relative size-full">
        <Container91 />
        <Container99 />
        <Container101 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[40px] pt-[32px] px-[20px] relative size-full">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[812px] relative shrink-0 w-full" data-name="Container">
      <HeroSection />
      <Main />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f7f9fb] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <Container />
    </div>
  );
}
