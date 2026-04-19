import { ArrowRight, FileText, Sparkles } from "lucide-react"

export function LandingProductPreview() {
  return (
    <section id="demo" className="mx-auto w-full max-w-6xl px-4 md:mt-6 md:px-6">
      <div className="rounded-2xl border border-border/70 bg-card/40 p-4 md:p-6">
        <header className="flex flex-col gap-2 border-b border-border/60 pb-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl bg-nexus-neutral-3 ring-1 ring-border/60">
              <Sparkles className="size-4 text-nexus-primary-9" aria-hidden />
            </span>
            <div>
              <p className="font-label text-body-4 uppercase tracking-widest text-muted-foreground">
                Workspace preview
              </p>
              <p className="text-body-2 text-foreground">Chat with PDFs in seconds</p>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-2 text-body-4 text-muted-foreground">
            <span className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1">
              <FileText className="size-4 text-nexus-secondary-9" aria-hidden />
              <span className="min-w-0 truncate">quantum-architecture.pdf</span>
            </span>
          </div>
        </header>

        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.6fr]">
          <article className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/30">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
              <p className="font-label text-body-4 uppercase tracking-widest text-muted-foreground">
                Knowledge base
              </p>
              <span className="text-body-4 text-nexus-primary-9">Ready</span>
            </div>
            <div className="space-y-3 px-4 py-4">
              <div className="rounded-xl border border-border/60 bg-card/60 p-3">
                <p className="text-body-4 text-muted-foreground">Document</p>
                <p className="mt-1 text-body-3 text-foreground">
                  Quantum Architecture — Chapter 2
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/60 p-3">
                <p className="text-body-4 text-muted-foreground">Highlights</p>
                <ul className="mt-2 space-y-1 text-body-4 text-muted-foreground" role="list">
                  <li>• Extraction + chunking</li>
                  <li>• Atlas vector search</li>
                  <li>• Citation-aware answers</li>
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.05),transparent_55%)]" />
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/30">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
              <p className="font-label text-body-4 uppercase tracking-widest text-muted-foreground">
                Conversation
              </p>
              <span className="text-body-4 text-muted-foreground">Streaming</span>
            </div>

            <div className="flex flex-col gap-3 px-4 py-4">
              <div className="max-w-[92%] self-start rounded-2xl border border-border/60 bg-card/70 p-3">
                <p className="text-body-4 text-muted-foreground">User</p>
                <p className="mt-1 text-body-3 text-foreground">
                  What specific metrics would indicate the best opportunity to
                  innovate in this system?
                </p>
              </div>

              <div className="max-w-[92%] self-end rounded-2xl border border-nexus-primary-8/30 bg-nexus-primary-4/25 p-3 ring-1 ring-nexus-primary-8/25">
                <p className="text-body-4 text-nexus-primary-11">NexusAI</p>
                <p className="mt-1 text-body-3 text-foreground">
                  Look for bottlenecks in throughput, latency, and energy per
                  operation. Prioritize areas where improvements unlock multiple
                  downstream gains.
                </p>
                <p className="mt-2 inline-flex items-center gap-2 text-body-4 text-muted-foreground">
                  View citations <ArrowRight className="size-3" aria-hidden />
                </p>
              </div>

              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/40 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-nexus-primary-8" aria-hidden />
                <p className="text-body-4 text-muted-foreground">
                  Ask anything about your PDFs…
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_55%)]" />
          </article>
        </div>
      </div>
    </section>
  )
}

