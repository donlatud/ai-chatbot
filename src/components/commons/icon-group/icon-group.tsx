"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const commonsIconGroupButtonVariants = cva(
  [
    "inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-transparent",
    "font-label text-sm shadow-sm transition-[filter,transform,background-color,color]",
    "outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "hover:not-disabled:brightness-110 active:not-disabled:scale-95",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-[1.125rem] [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      tone: {
        mint: "bg-primary text-primary-foreground",
        sage: "bg-brand-secondary text-primary-foreground",
        coral: "bg-brand-tertiary text-brand-neutral",
        salmon:
          "bg-[color-mix(in_srgb,var(--brand-tertiary)_82%,white_18%)] text-brand-neutral",
      },
    },
    defaultVariants: {
      tone: "mint",
    },
  }
)

export type CommonsIconGroupButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof commonsIconGroupButtonVariants> & {
    icon: React.ReactNode
    label?: string
  }

const CommonsIconGroupButton = React.forwardRef<
  HTMLButtonElement,
  CommonsIconGroupButtonProps
>(
  (
    { className, tone, type = "button", icon, label, disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        aria-label={label}
        title={label}
        className={cn(commonsIconGroupButtonVariants({ tone }), className)}
        {...props}
      >
        {icon}
      </button>
    )
  }
)
CommonsIconGroupButton.displayName = "CommonsIconGroupButton"

export type CommonsIconGroupProps = React.ComponentProps<"div"> & {
  "aria-label"?: string
}

function CommonsIconGroup({
  className,
  "aria-label": ariaLabel = "Quick actions",
  ...props
}: CommonsIconGroupProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  )
}

export {
  CommonsIconGroup,
  CommonsIconGroupButton,
  commonsIconGroupButtonVariants,
}
