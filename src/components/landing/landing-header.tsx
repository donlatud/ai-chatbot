import Link from "next/link"

import { CommonsButton } from "@/components/commons"

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
] as const

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/50 bg-background/70 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6"
        aria-label="Primary"
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 font-label text-body-3 tracking-wide text-foreground"
          >
            <span className="grid size-7 place-items-center rounded-md bg-nexus-primary-7 text-nexus-neutral-2 ring-1 ring-nexus-primary-8/30">
              N
            </span>
            <span className="text-body-3 font-semibold">NexusAI</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-body-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <CommonsButton asChild variant="primary" size="sm">
            <Link href="/chat">Get Started</Link>
          </CommonsButton>
        </div>
      </nav>
    </header>
  )
}

