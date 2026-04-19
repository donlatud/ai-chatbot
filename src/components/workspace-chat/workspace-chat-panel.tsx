"use client"

import { ArrowRight, Menu, MoreHorizontal, Paperclip, Share2 } from "lucide-react"

import { CommonsButton } from "@/components/commons"
import { MOCK_CODE_SNIPPET } from "@/lib/chat-mock"

type WorkspaceChatPanelProps = {
  onOpenSidebar: () => void
}

export function WorkspaceChatPanel({ onOpenSidebar }: WorkspaceChatPanelProps) {
  return (
    <section className="flex min-h-0 flex-1 flex-col bg-background">
      <header className="flex shrink-0 items-center gap-3 border-b border-border/60 px-3 py-3 md:px-5">
        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-border/60 bg-card/40 text-foreground lg:hidden"
          onClick={onOpenSidebar}
          aria-label="Open sidebar"
        >
          <Menu className="size-5" aria-hidden />
        </button>

        <div className="min-w-0 flex-1">
          <h1 className="truncate text-body-2 font-semibold text-foreground md:text-headline-4 md:font-semibold">
            Quantum Architecture.pdf
          </h1>
          <p className="hidden text-body-4 text-muted-foreground md:block">
            Workspace Chat
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="rounded-lg border border-border/60 bg-card/40 px-3 py-2 text-body-4 text-muted-foreground transition-colors hover:text-foreground"
          >
            Source
          </button>
          <button
            type="button"
            className="hidden size-10 items-center justify-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground hover:text-foreground md:inline-flex"
            aria-label="Share context"
          >
            <Share2 className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            className="hidden size-10 items-center justify-center rounded-lg border border-border/60 bg-card/40 text-muted-foreground hover:text-foreground md:inline-flex"
            aria-label="More options"
          >
            <MoreHorizontal className="size-4" aria-hidden />
          </button>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4 md:px-6 md:py-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <article className="rounded-2xl border border-border/60 bg-card/70 p-4 md:p-5">
            <p className="text-body-4 text-muted-foreground">NexusAI</p>
            <p className="mt-2 text-body-3 text-foreground">
              Hi — I&apos;ve analyzed{" "}
              <span className="font-medium text-nexus-primary-10">
                Quantum Architecture.pdf
              </span>
              . Here&apos;s a compact pipeline sketch you can extend for your RAG stack.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl border border-border/60 bg-nexus-neutral-2/80 p-4 font-mono text-body-4 leading-relaxed text-nexus-neutral-11">
              <code>{MOCK_CODE_SNIPPET}</code>
            </pre>
            <p className="mt-4 inline-flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-nexus-primary-8/35 bg-nexus-primary-4/15 px-3 py-1 text-body-4 text-nexus-primary-11">
                Citations · Page 12, Para 3
              </span>
            </p>
          </article>

          <article className="ml-auto max-w-[92%] rounded-2xl border border-violet-500/25 bg-violet-950/35 px-4 py-3 md:max-w-[85%]">
            <p className="text-body-4 text-violet-200/80">You</p>
            <p className="mt-1 text-body-3 text-foreground">
              According to the PDF, how does lattice-based cryptography relate to the
              quantum architecture described in section 4?
            </p>
          </article>

          <div className="ml-auto flex max-w-[92%] flex-col gap-2 rounded-2xl border border-border/50 bg-card/40 px-4 py-3 md:max-w-[85%]">
            <div className="h-3 w-full animate-pulse rounded-md bg-nexus-neutral-5/80" />
            <div className="h-3 w-[92%] animate-pulse rounded-md bg-nexus-neutral-5/60" />
            <div className="h-3 w-4/5 animate-pulse rounded-md bg-nexus-neutral-5/50" />
          </div>
        </div>
      </div>

      <footer className="shrink-0 border-t border-border/60 bg-background/95 px-3 pb-4 pt-3 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-end gap-2 rounded-2xl border border-border/70 bg-card/60 p-2 ring-1 ring-border/40">
            <button
              type="button"
              className="grid size-10 shrink-0 place-items-center rounded-xl text-muted-foreground hover:bg-nexus-neutral-3/50 hover:text-foreground"
              aria-label="Attach file"
            >
              <Paperclip className="size-5" aria-hidden />
            </button>
            <label className="sr-only" htmlFor="chat-input">
              Ask anything about the document
            </label>
            <textarea
              id="chat-input"
              rows={1}
              placeholder="Ask anything about the document..."
              className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-body-3 text-foreground outline-none placeholder:text-muted-foreground"
            />
            <CommonsButton type="button" variant="primary" size="icon" aria-label="Send message">
              <ArrowRight className="size-5" aria-hidden />
            </CommonsButton>
          </div>
          <p className="mt-3 text-center text-body-4 text-muted-foreground">
            Nexus AI can make mistakes. Check important info.
          </p>
        </div>
      </footer>
    </section>
  )
}
