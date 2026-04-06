"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export type CommonsSearchInputProps = Omit<
  React.ComponentProps<typeof Input>,
  "size"
> & {
  containerClassName?: string
}

const CommonsSearchInput = React.forwardRef<
  HTMLInputElement,
  CommonsSearchInputProps
>(({ className, containerClassName, placeholder = "Search", id, ...props }, ref) => {
  return (
    <div className={cn("relative w-full", containerClassName)}>
      <Search
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden={true}
      />
      <Input
        ref={ref}
        id={id}
        placeholder={placeholder}
        className={cn(
          "h-10 rounded-lg border-border bg-card pl-9 font-sans text-sm placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
    </div>
  )
})
CommonsSearchInput.displayName = "CommonsSearchInput"

export { CommonsSearchInput }
