import Link from "next/link"

import { CommonsButton } from "@/components/commons"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.035),transparent_52%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-12 pb-6 md:px-6 md:pt-16 md:pb-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-body-4 text-muted-foreground">
            <span className="text-nexus-primary-9">NexusAI</span>
            <span aria-hidden>•</span>
            <span>Built for RAG workspaces</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-balance text-headline-1 md:text-[52px] md:leading-[1.05]">
              Talk to your data,
              <br />
              <span className="text-nexus-primary-8">not through it.</span>
            </h1>
            <p className="mt-4 text-pretty text-body-2 text-muted-foreground md:mt-5 md:text-body-1">
              The minimal AI workspace to transform PDFs into instant knowledge.
              No manual searching, just intelligent conversation.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <CommonsButton asChild variant="primary" size="lg">
              <Link href="/chat">Get Started for Free</Link>
            </CommonsButton>
            <CommonsButton asChild variant="secondary" size="lg">
              <Link href="#demo">View Demo</Link>
            </CommonsButton>
          </div>

          <p className="text-body-4 text-muted-foreground">
            Secure, fast, and designed for terminal-grade workflows.
          </p>
        </div>
      </div>
    </section>
  )
}

