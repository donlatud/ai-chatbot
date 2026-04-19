"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import { WorkspaceChatPanel } from "./workspace-chat-panel"
import { WorkspaceSidebar } from "./workspace-sidebar"

export function WorkspaceChatShell() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const closeSidebar = React.useCallback(() => setSidebarOpen(false), [])
  const openSidebar = React.useCallback(() => setSidebarOpen(true), [])

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)")
    const onChange = () => {
      if (mq.matches) setSidebarOpen(false)
    }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <div className="flex h-[100dvh] flex-col bg-background lg:flex-row lg:overflow-hidden">
      {sidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/55 lg:hidden"
          aria-label="Close navigation"
          onClick={closeSidebar}
        />
      ) : null}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex h-full w-[min(100%,20rem)] shrink-0 flex-col transition-transform duration-200 ease-out lg:static lg:z-auto lg:translate-x-0 lg:shadow-none",
          sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <WorkspaceSidebar onSelectItem={closeSidebar} />
      </aside>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <WorkspaceChatPanel onOpenSidebar={openSidebar} />
      </div>
    </div>
  )
}
