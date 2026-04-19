import Link from "next/link"

export function LandingFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-md bg-nexus-primary-7 text-nexus-neutral-2 ring-1 ring-nexus-primary-8/30">
            N
          </span>
          <div>
            <p className="text-body-3 font-semibold text-foreground">NexusAI</p>
            <p className="text-body-4 text-muted-foreground">
              Terminal-grade RAG workspaces.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-body-4 text-muted-foreground">
          <Link href="#features" className="rounded-md px-3 py-2 hover:text-foreground">
            Features
          </Link>
          <Link href="#pricing" className="rounded-md px-3 py-2 hover:text-foreground">
            Pricing
          </Link>
          <Link href="/chat" className="rounded-md px-3 py-2 hover:text-foreground">
            Chat
          </Link>
          <Link href="/design-system" className="rounded-md px-3 py-2 hover:text-foreground">
            Design system
          </Link>
        </div>
      </div>
    </footer>
  )
}

