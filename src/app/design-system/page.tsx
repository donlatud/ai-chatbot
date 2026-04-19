"use client"

import * as React from "react"
import {
  CommonsButton,
  CommonsIconGroup,
  CommonsIconGroupButton,
  CommonsPillNavigation,
  CommonsProgress,
  CommonsSearchInput,
} from "@/components/commons"
import {
  Home as HomeIcon,
  Pencil,
  Search,
  Shapes,
  Tag,
  Trash2,
  User,
  Wand2,
} from "lucide-react"

const STEPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const

const NEXUS_PRIMARY_BG: Record<(typeof STEPS)[number], string> = {
  1: "bg-nexus-primary-1",
  2: "bg-nexus-primary-2",
  3: "bg-nexus-primary-3",
  4: "bg-nexus-primary-4",
  5: "bg-nexus-primary-5",
  6: "bg-nexus-primary-6",
  7: "bg-nexus-primary-7",
  8: "bg-nexus-primary-8",
  9: "bg-nexus-primary-9",
  10: "bg-nexus-primary-10",
  11: "bg-nexus-primary-11",
  12: "bg-nexus-primary-12",
}

const NEXUS_SECONDARY_BG: Record<(typeof STEPS)[number], string> = {
  1: "bg-nexus-secondary-1",
  2: "bg-nexus-secondary-2",
  3: "bg-nexus-secondary-3",
  4: "bg-nexus-secondary-4",
  5: "bg-nexus-secondary-5",
  6: "bg-nexus-secondary-6",
  7: "bg-nexus-secondary-7",
  8: "bg-nexus-secondary-8",
  9: "bg-nexus-secondary-9",
  10: "bg-nexus-secondary-10",
  11: "bg-nexus-secondary-11",
  12: "bg-nexus-secondary-12",
}

const NEXUS_TERTIARY_BG: Record<(typeof STEPS)[number], string> = {
  1: "bg-nexus-tertiary-1",
  2: "bg-nexus-tertiary-2",
  3: "bg-nexus-tertiary-3",
  4: "bg-nexus-tertiary-4",
  5: "bg-nexus-tertiary-5",
  6: "bg-nexus-tertiary-6",
  7: "bg-nexus-tertiary-7",
  8: "bg-nexus-tertiary-8",
  9: "bg-nexus-tertiary-9",
  10: "bg-nexus-tertiary-10",
  11: "bg-nexus-tertiary-11",
  12: "bg-nexus-tertiary-12",
}

const NEXUS_NEUTRAL_BG: Record<(typeof STEPS)[number], string> = {
  1: "bg-nexus-neutral-1",
  2: "bg-nexus-neutral-2",
  3: "bg-nexus-neutral-3",
  4: "bg-nexus-neutral-4",
  5: "bg-nexus-neutral-5",
  6: "bg-nexus-neutral-6",
  7: "bg-nexus-neutral-7",
  8: "bg-nexus-neutral-8",
  9: "bg-nexus-neutral-9",
  10: "bg-nexus-neutral-10",
  11: "bg-nexus-neutral-11",
  12: "bg-nexus-neutral-12",
}

const RAMP_CLASSES: Record<
  "primary" | "secondary" | "tertiary" | "neutral",
  Record<(typeof STEPS)[number], string>
> = {
  primary: NEXUS_PRIMARY_BG,
  secondary: NEXUS_SECONDARY_BG,
  tertiary: NEXUS_TERTIARY_BG,
  neutral: NEXUS_NEUTRAL_BG,
}

function ColorRow({
  title,
  ramp,
}: {
  title: string
  ramp: keyof typeof RAMP_CLASSES
}) {
  const classes = RAMP_CLASSES[ramp]

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-headline-4">{title}</h3>
      <ul className="grid grid-cols-6 gap-2 sm:grid-cols-12" role="list">
        {STEPS.map((step) => (
          <li key={step} className="flex flex-col gap-1">
            <div
              className={`aspect-square w-full rounded-md ring-1 ring-border/50 ${classes[step]}`}
              title={`${ramp} ${step}`}
              aria-hidden
            />
            <span className="text-center text-body-4 text-muted-foreground">
              {step}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function DesignSystemPage() {
  const [navId, setNavId] = React.useState("home")

  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-12 pb-20">
        <header className="flex flex-col gap-3">
          <p className="font-label text-body-4 uppercase tracking-widest text-muted-foreground">
            Design system
          </p>
          <h1 className="text-headline-1">Nexus Terminal</h1>
          <p className="max-w-2xl text-body-2 text-muted-foreground">
            Overview of tokens, typography, and commons components used across
            the project.
          </p>
        </header>

        <section aria-labelledby="colors-title" className="flex flex-col gap-6">
          <h2 id="colors-title" className="text-headline-2">
            Color ramps
          </h2>
          <p className="max-w-2xl text-body-3 text-muted-foreground">
            Twelve steps per ramp (1 = darkest, 12 = lightest). Step 7 anchors
            brand primaries.
          </p>
          <div className="flex flex-col gap-8 rounded-2xl border border-border/80 bg-card p-6 md:p-8">
            <ColorRow title="Primary" ramp="primary" />
            <ColorRow title="Secondary" ramp="secondary" />
            <ColorRow title="Tertiary" ramp="tertiary" />
            <ColorRow title="Neutral" ramp="neutral" />
          </div>
        </section>

        <section aria-labelledby="type-title" className="flex flex-col gap-6">
          <h2 id="type-title" className="text-headline-2">
            Typography
          </h2>
          <div className="flex flex-col gap-8 rounded-2xl border border-border/80 bg-card p-6 md:p-8">
            <div className="flex flex-col gap-4">
              <p className="font-label text-body-4 text-muted-foreground">
                Headlines (Inter)
              </p>
              <p className="text-headline-1">Headline 1 — Hero title</p>
              <p className="text-headline-2">Headline 2 — Section title</p>
              <p className="text-headline-3">Headline 3 — Card title</p>
              <p className="text-headline-4">Headline 4 — UI heading</p>
            </div>
            <div className="flex flex-col gap-3 border-t border-border/60 pt-8">
              <p className="font-label text-body-4 text-muted-foreground">
                Body (Inter)
              </p>
              <p className="text-body-1">
                Body 1 — Lead paragraph for emphasis and short introductions.
              </p>
              <p className="text-body-2">
                Body 2 — Default reading size for dashboards and terminal-style
                UIs.
              </p>
              <p className="text-body-3">
                Body 3 — Compact supporting text, secondary descriptions, and
                dense layouts.
              </p>
              <p className="text-body-4">
                Body 4 — Captions, metadata, and table footnotes.
              </p>
            </div>
            <div className="flex flex-col gap-2 border-t border-border/60 pt-8">
              <p className="font-label text-body-4 text-muted-foreground">
                Label (Space Grotesk)
              </p>
              <p className="font-label text-body-2 text-foreground">
                LABEL · Input · Status · Data density
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="components-title"
          className="flex flex-col gap-6"
        >
          <h2 id="components-title" className="text-headline-2">
            Commons components
          </h2>
          <div className="flex flex-col gap-10 rounded-2xl border border-border/80 bg-card p-6 md:p-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-headline-4">Buttons</h3>
              <div className="flex flex-wrap items-center gap-3">
                <CommonsButton variant="primary">Primary</CommonsButton>
                <CommonsButton variant="secondary">Secondary</CommonsButton>
                <CommonsButton variant="inverted">Inverted</CommonsButton>
                <CommonsButton
                  variant="outlined"
                  className="border-nexus-neutral-7 text-nexus-neutral-11 hover:border-nexus-neutral-9 hover:bg-nexus-neutral-4/40 hover:text-nexus-neutral-12"
                >
                  Outlined
                </CommonsButton>
                <CommonsButton variant="primary" disabled>
                  Disabled
                </CommonsButton>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <CommonsButton
                  variant="iconDestructive"
                  size="icon"
                  aria-label="Edit compact"
                >
                  <Pencil aria-hidden />
                </CommonsButton>
                <CommonsButton variant="iconLabel" size="default">
                  <Pencil aria-hidden />
                  Label
                </CommonsButton>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-border/60 pt-8">
              <h3 className="text-headline-4">Search input</h3>
              <CommonsSearchInput className="max-w-md" name="demo-search" />
            </div>

            <div className="flex flex-col gap-4 border-t border-border/60 pt-8">
              <h3 className="text-headline-4">Progress</h3>
              <div className="flex max-w-md flex-col gap-4">
                <CommonsProgress value={72} />
                <CommonsProgress value={85} variant="muted" />
                <CommonsProgress value={48} variant="danger" />
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-border/60 pt-8">
              <h3 className="text-headline-4">Pill navigation</h3>
              <CommonsPillNavigation
                activeId={navId}
                onActiveChange={setNavId}
                items={[
                  { id: "home", label: "Home", icon: <HomeIcon aria-hidden /> },
                  {
                    id: "search",
                    label: "Search",
                    icon: <Search aria-hidden />,
                  },
                  {
                    id: "profile",
                    label: "Profile",
                    icon: <User aria-hidden />,
                  },
                ]}
                aria-label="Primary navigation demo"
              />
              <p className="text-body-4 text-muted-foreground">
                Active: <span className="font-mono">{navId}</span>
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-border/60 pt-8">
              <h3 className="text-headline-4">Icon group</h3>
              <CommonsIconGroup aria-label="Quick actions demo">
                <CommonsIconGroupButton
                  tone="mint"
                  label="Magic"
                  icon={<Wand2 aria-hidden />}
                />
                <CommonsIconGroupButton
                  tone="sage"
                  label="Shapes"
                  icon={<Shapes aria-hidden />}
                />
                <CommonsIconGroupButton
                  tone="coral"
                  label="Tag"
                  icon={<Tag aria-hidden />}
                />
                <CommonsIconGroupButton
                  tone="salmon"
                  label="Delete"
                  icon={<Trash2 aria-hidden />}
                />
              </CommonsIconGroup>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

