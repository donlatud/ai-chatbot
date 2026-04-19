"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const commonsButtonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border font-label text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,transform,filter,box-shadow]",
    "outline-none select-none",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "hover:not-disabled:brightness-[1.08]",
    "active:not-disabled:scale-[0.98] active:not-disabled:brightness-95",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-primary text-primary-foreground shadow-sm",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground shadow-sm",
        inverted:
          "border-transparent bg-[#e5e5e5] text-brand-neutral shadow-sm hover:not-disabled:bg-[#f5f5f5]",
        outlined:
          "border-border/80 bg-transparent text-primary hover:not-disabled:border-primary hover:not-disabled:bg-primary/10",
        iconDestructive:
          "size-9 rounded-md border-transparent bg-brand-tertiary p-0 text-brand-neutral shadow-sm hover:not-disabled:brightness-110",
        iconLabel:
          "border-transparent bg-primary px-3 py-2 text-primary-foreground shadow-sm",
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 px-5 text-base",
        icon: "size-9 p-0",
      },
    },
    compoundVariants: [
      {
        variant: "iconDestructive",
        size: "default",
        class: "size-9 min-h-0 px-0 py-0",
      },
      {
        variant: "iconLabel",
        size: "sm",
        class: "min-h-8",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export type CommonsButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof commonsButtonVariants> & {
    asChild?: boolean
    pressed?: boolean
  }

const CommonsButton = React.forwardRef<HTMLButtonElement, CommonsButtonProps>(
  (
    { className, variant, size, pressed, asChild, type = "button", ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        type={type}
        data-pressed={pressed ? "true" : undefined}
        className={cn(
          commonsButtonVariants({ variant, size, className }),
          pressed && "brightness-95 ring-2 ring-ring/60 ring-offset-2 ring-offset-background"
        )}
        {...props}
      />
    )
  }
)
CommonsButton.displayName = "CommonsButton"

export { CommonsButton, commonsButtonVariants }
