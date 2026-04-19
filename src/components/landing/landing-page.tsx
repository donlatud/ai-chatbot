"use client"

import { motion, useReducedMotion } from "framer-motion"

import { LandingFeatures } from "@/components/landing/features"
import { LandingFooter } from "@/components/landing/landing-footer"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingHero } from "@/components/landing/hero"
import { LandingPricing } from "@/components/landing/pricing"
import { LandingProductPreview } from "@/components/landing/product-preview"
import { Reveal } from "@/components/motion/reveal"

export default function LandingPage() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="relative min-h-full w-full bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[16px_16px]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_62%)]"
          animate={reducedMotion ? undefined : { opacity: [0.45, 0.6, 0.45] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 7, ease: "easeInOut", repeat: Infinity }
          }
        />
      </div>

      <LandingHeader />

      <main>
        <Reveal>
          <LandingHero />
        </Reveal>

        <Reveal delay={0.05}>
          <motion.div
            whileHover={reducedMotion ? undefined : { y: -5 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <LandingProductPreview />
          </motion.div>
        </Reveal>

        <Reveal delay={0.08}>
          <LandingFeatures />
        </Reveal>

        <Reveal delay={0.1}>
          <LandingPricing />
        </Reveal>
      </main>

      <Reveal delay={0.08}>
        <LandingFooter />
      </Reveal>
    </div>
  )
}

