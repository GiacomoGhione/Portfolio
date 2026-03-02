export default function PageShell({ children, className = "" }) {
  return (
    <div
      className={`min-h-svh flex flex-col items-center justify-center my-2.5 ${className}`}
    >
      {children}
    </div>
  );
}
