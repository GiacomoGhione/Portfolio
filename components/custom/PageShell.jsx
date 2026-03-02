export default function PageShell({ children, className = "" }) {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center my-2.5">
      <div
        className={`container px-4 relative mx-auto py-16 space-y-20 ${className}`}
      >
        {children}
      </div>
    </main>
  );
}
