import { Bolt, Lock, Sparkles } from "lucide-react"

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <article className="rounded-2xl border border-border/70 bg-card/40 p-5">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-nexus-neutral-3 ring-1 ring-border/60">
          {icon}
        </span>
        <h3 className="text-headline-4">{title}</h3>
      </div>
      <p className="mt-3 text-body-3 text-muted-foreground">{description}</p>
    </article>
  )
}

export function LandingFeatures() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20"
      aria-labelledby="features-title"
    >
      <header className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center">
        <h2 id="features-title" className="text-headline-2">
          Engineered for Intelligence
        </h2>
        <p className="text-body-3 text-muted-foreground">
          Powerful tools to make data discovery effortless.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <FeatureCard
          title="Instant RAG Engine"
          description="Upload PDFs and get grounded answers with citations in seconds."
          icon={<Sparkles className="size-4 text-nexus-primary-9" aria-hidden />}
        />
        <FeatureCard
          title="Bank‑grade Privacy"
          description="Private workspaces, secure storage, and role-based access control."
          icon={<Lock className="size-4 text-nexus-secondary-9" aria-hidden />}
        />
        <FeatureCard
          title="Lightning‑fast responses"
          description="Streaming chat and optimized retrieval for terminal-grade speed."
          icon={<Bolt className="size-4 text-nexus-tertiary-9" aria-hidden />}
        />
      </div>
    </section>
  )
}

