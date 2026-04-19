import type { Metadata } from "next"

import { WorkspaceChatShell } from "@/components/workspace-chat"

export const metadata: Metadata = {
  title: "NexusAI — Workspace",
  description: "RAG chat over your PDFs",
}

export default function ChatPage() {
  return <WorkspaceChatShell />
}
