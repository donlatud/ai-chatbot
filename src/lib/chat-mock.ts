export const MOCK_CHATS = [
  { id: "1", label: "Quantum Architecture.pdf", active: true },
  { id: "2", label: "Q3 Roadmap.pdf", active: false },
  { id: "3", label: "API Design Specs.pdf", active: false },
] as const

export const MOCK_CODE_SNIPPET = `// Ingestion pipeline
const chunks = await splitByPage(pdf, { maxTokens: 512 });
await indexEmbeddings(chunks, { workspace: "demo" });
`
