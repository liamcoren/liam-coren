import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-foreground">
      <h1 className="mb-2 text-4xl font-medium">404</h1>
      <p className="mb-8 text-muted-foreground">Page not found</p>
      <Link
        href="/"
        className="border border-foreground px-4 py-2 text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        Home
      </Link>
    </div>
  );
}
