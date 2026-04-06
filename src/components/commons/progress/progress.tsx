"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const commonsProgressIndicatorVariants = cva(
  "flex size-full flex-1 rounded-full transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary",
        muted: "bg-brand-secondary",
        danger: "bg-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type CommonsProgressProps = Omit<
  React.ComponentProps<typeof ProgressPrimitive.Root>,
  "value"
> &
  VariantProps<typeof commonsProgressIndicatorVariants> & {
    value?: number | null
  }

function CommonsProgress({
  className,
  value = 0,
  variant,
  ...props
}: CommonsProgressProps) {
  const clamped = Math.min(100, Math.max(0, Number(value ?? 0)))

  return (
    <ProgressPrimitive.Root
      data-slot="commons-progress"
      className={cn(
        "relative flex h-2 w-full items-center overflow-hidden rounded-full bg-muted/80",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="commons-progress-indicator"
        className={commonsProgressIndicatorVariants({ variant })}
        style={{ transform: `translateX(-${100 - clamped}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { CommonsProgress, commonsProgressIndicatorVariants }
