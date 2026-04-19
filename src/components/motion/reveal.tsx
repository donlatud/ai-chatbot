"use client"

import * as React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

const variants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={reducedMotion ? undefined : { delay }}
    >
      {children}
    </motion.div>
  )
}

