import Link from "next/link"

import { Check } from "lucide-react"

import { CommonsButton } from "@/components/commons"

function PricingCard({
  name,
  price,
  subtitle,
  features,
  highlight = false,
  ctaLabel,
}: {
  name: string
  price: string
  subtitle: string
  features: string[]
  highlight?: boolean
  ctaLabel: string
}) {
  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl border bg-card/40 p-6",
        highlight
          ? "border-nexus-primary-8/40 ring-1 ring-nexus-primary-8/25"
          : "border-border/70",
      ].join(" ")}
    >
      {highlight ? (
        <span className="absolute right-5 top-5 rounded-full border border-nexus-primary-8/40 bg-nexus-primary-4/20 px-3 py-1 text-body-4 text-nexus-primary-11">
          Most Popular
        </span>
      ) : null}

      <header>
        <p className="font-label text-body-4 uppercase tracking-widest text-muted-foreground">
          {name}
        </p>
        <p className="mt-3 text-headline-2">
          {price}
          <span className="ml-2 text-body-3 text-muted-foreground">/mo</span>
        </p>
        <p className="mt-2 text-body-3 text-muted-foreground">{subtitle}</p>
      </header>

      <ul className="mt-5 space-y-2 text-body-3 text-muted-foreground" role="list">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 grid size-4 place-items-center rounded-full bg-nexus-primary-7/15 ring-1 ring-nexus-primary-8/25">
              <Check className="size-3 text-nexus-primary-9" aria-hidden />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <CommonsButton asChild variant={highlight ? "primary" : "secondary"} className="w-full">
          <Link href="/chat">{ctaLabel}</Link>
        </CommonsButton>
      </div>
    </article>
  )
}

export function LandingPricing() {
  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20"
      aria-labelledby="pricing-title"
    >
      <header className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center">
        <h2 id="pricing-title" className="text-headline-2">
          Simple, Transparent Pricing
        </h2>
        <p className="text-body-3 text-muted-foreground">
          Scale your intelligence as you grow.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <PricingCard
          name="Free"
          price="$0"
          subtitle="Perfect for learning the workflow."
          ctaLabel="Get Started"
          features={[
            "1 workspace",
            "10 PDF uploads",
            "Basic RAG answering",
            "Standard processing",
          ]}
        />
        <PricingCard
          name="Pro"
          price="$19"
          subtitle="For teams who live in documents."
          ctaLabel="Go Pro"
          highlight
          features={[
            "Unlimited workspaces",
            "Unlimited uploads",
            "Priority embeddings + RAG",
            "Advanced PDF parsing",
          ]}
        />
      </div>
    </section>
  )
}

