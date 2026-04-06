"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export type CommonsPillNavItem = {
  id: string
  icon: React.ReactNode
  label?: string
}

export type CommonsPillNavigationProps = {
  items: CommonsPillNavItem[]
  activeId: string
  onActiveChange?: (id: string) => void
  className?: string
  "aria-label"?: string
}

function CommonsPillNavigation({
  items,
  activeId,
  onActiveChange,
  className,
  "aria-label": ariaLabel = "Main",
}: CommonsPillNavigationProps) {
  return (
    <nav aria-label={ariaLabel} className={cn(className)}>
      <ul className="flex items-center gap-1 rounded-full bg-card p-1 shadow-sm ring-1 ring-border/70">
        {items.map((item) => {
          const active = item.id === activeId

          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onActiveChange?.(item.id)}
                className={cn(
                  "relative inline-flex size-10 items-center justify-center rounded-full transition-[color,background-color,transform,filter] outline-none select-none",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  "hover:not-disabled:brightness-110 active:not-disabled:scale-95",
                  "disabled:pointer-events-none disabled:opacity-50",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                aria-current={active ? "page" : undefined}
                aria-label={item.label ?? item.id}
              >
                {item.icon}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { CommonsPillNavigation }
