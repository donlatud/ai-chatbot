"use client"

import { FileText, HelpCircle, LogOut, Plus, Settings } from "lucide-react"
import Link from "next/link"

import { CommonsButton, CommonsProgress } from "@/components/commons"
import { cn } from "@/lib/utils"
import { MOCK_CHATS } from "@/lib/chat-mock"

type WorkspaceSidebarProps = {
  onSelectItem?: () => void
  className?: string
}

export function WorkspaceSidebar({ onSelectItem, className }: WorkspaceSidebarProps) {
  return (
    <div
      className={cn(
        "flex h-full min-h-0 w-full max-w-80 flex-col border-border/60 bg-card/90 lg:border-r",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
        <Link
          href="/"
          className="font-label text-body-4 uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          NexusAI
        </Link>
      </div>

      <div className="flex flex-col gap-3 px-4 py-4">
        <div className="rounded-xl border border-border/60 bg-background/40 px-3 py-2">
          <p className="font-label text-body-4 uppercase tracking-wider text-muted-foreground">
            Workspace
          </p>
          <div className="mt-1 flex items-center gap-2">
            <p className="text-body-3 font-semibold text-foreground">Nexus Workspace</p>
            <span className="rounded-md border border-nexus-primary-8/30 bg-nexus-primary-4/20 px-2 py-0.5 text-body-4 text-nexus-primary-10">
              Pro
            </span>
          </div>
        </div>

        <CommonsButton
          type="button"
          variant="primary"
          className="w-full justify-center"
        >
          <Plus className="size-4" aria-hidden />
          New chat
        </CommonsButton>
      </div>

      <div className="px-4">
        <p className="font-label text-body-4 uppercase tracking-wider text-muted-foreground">
          Upload
        </p>
        <button
          type="button"
          className="mt-2 flex w-full flex-col items-center gap-2 rounded-xl border border-dashed border-border/80 bg-background/30 px-3 py-5 text-center text-body-4 text-muted-foreground transition-colors hover:border-nexus-primary-8/40 hover:text-foreground"
        >
          <FileText className="size-6 text-nexus-primary-9" aria-hidden />
          <span>Drop PDF or click to upload</span>
        </button>
      </div>

      <div className="mt-4 min-h-0 flex-1 overflow-y-auto px-2">
        <p className="px-2 font-label text-body-4 uppercase tracking-wider text-muted-foreground">
          Recent
        </p>
        <ul className="mt-2 space-y-0.5" role="list">
          {MOCK_CHATS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={onSelectItem}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg border border-transparent px-2 py-2.5 text-left text-body-3 transition-colors",
                  item.active
                    ? "border-l-2 border-l-nexus-primary-7 bg-nexus-primary-2/30 pl-1.5 text-nexus-primary-10"
                    : "text-muted-foreground hover:bg-nexus-neutral-3/50 hover:text-foreground"
                )}
              >
                <FileText className="size-4 shrink-0 opacity-80" aria-hidden />
                <span className="min-w-0 flex-1 truncate">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-border/60 p-4">
        <div className="rounded-xl border border-border/60 bg-background/40 p-3">
          <div className="flex items-center gap-2">
            <span
              className="grid size-9 place-items-center rounded-full bg-nexus-neutral-4 text-body-3 font-semibold text-foreground"
              aria-hidden
            >
              A
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-body-3 font-medium text-foreground">Alex Rivera</p>
              <p className="text-body-4 text-muted-foreground">3 / 5 files</p>
            </div>
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-nexus-neutral-3/60 hover:text-foreground"
                aria-label="Settings"
              >
                <Settings className="size-4" />
              </button>
              <button
                type="button"
                className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-nexus-neutral-3/60 hover:text-foreground"
                aria-label="Help"
              >
                <HelpCircle className="size-4" />
              </button>
              <button
                type="button"
                className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-nexus-neutral-3/60 hover:text-foreground"
                aria-label="Log out"
              >
                <LogOut className="size-4" />
              </button>
            </div>
          </div>
          <div className="mt-3">
            <CommonsProgress value={60} />
          </div>
        </div>
      </div>
    </div>
  )
}
