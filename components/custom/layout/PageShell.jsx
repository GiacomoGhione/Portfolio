import LogosBanner from "@/components/custom/sections/LogosBanner";

export default function PageShell({ children, className = "", banner = true }) {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center my-2.5">
      <div
        className={`container px-4 relative mx-auto pt-28 pb-16 space-y-20 ${className}`}
      >
        {children}
      </div>
      {banner && <LogosBanner />}
    </main>
  );
}
