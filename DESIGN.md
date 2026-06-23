---
name: Pro Espía
description: Surveillance-grid landing for a security monitoring command center in the O'Higgins region
colors:
  primary: "#1e40af"
  primary-light: "#3b82f6"
  primary-dark: "#0e182e"
  accent: "#ef4444"
  success: "#22c55e"
  neutral-bg: "#080c18"
  neutral-surface: "#0e182e"
  neutral-surface-hover: "#121e36"
  neutral-text: "#f1f5f9"
  neutral-text-secondary: "#a8bcd0"
  neutral-text-muted: "#8596ab"
  neutral-border: "rgba(255,255,255,0.06)"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.3rem)"
    fontWeight: 800
    lineHeight: 1.15
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, Fira Code, monospace"
    fontSize: "0.7rem"
    fontWeight: 600
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
  xl: "28px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "#dc2626"
    textColor: "{colors.neutral-text}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary-light}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  card-default:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  input-default:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
---

# Design System: Pro Espía

## 1. Overview

**Creative North Star: "The Surveillance Grid"**

A command-center aesthetic crossed with corporate elegance. The interface reads as an active monitoring dashboard — precise, always-scanning, technically sophisticated — but never aggressive or alarming. This is the control room of a premium security operation: dark surfaces, crisp typography, measured use of red urgency signals, and ambient shadows that give each panel weight without noise.

The system explicitly rejects paramilitary grit, cartoon security clichés, and any aesthetic that prioritizes "cool tech" over professional credibility. Every visual choice serves the same message: *we see everything, we respond instantly, and we do it with quiet expertise.*

**Key Characteristics:**
- Radar-focus on legibility and contrast over decoration
- Ambient shadowing for depth; no glassmorphism, no gradients as decoration
- Monospace labels signal telemetry and technical precision
- Red is reserved for active alerts, not decoration
- The dark navy background is the command-center default, not a "dark mode toggle"

## 2. Colors

A restrained palette built around a deep navy anchor, with blue as the functional accent and red as a deliberate urgency signal. The palette says "control room" before it says "brand."

### Primary
- **Signal Blue** (`#1e40af` / oklch(47% 0.17 270)): The functional accent. Used for hover states, section indicators, and interactive elements. Never decorative.
- **Signal Blue Light** (`#3b82f6` / oklch(62% 0.16 250)): Ghost button text, secondary interactive states.
- **Radar Navy Deep** (`#0e182e` / oklch(14% 0.04 270)): Surface and card backgrounds. The default container for all content panels.

### Accent
- **Alert Red** (`#ef4444` / oklch(57% 0.23 25)): Reserved for urgency — form CTAs, live-status badges, danger indicators. No decorative use. Every red element should justify its presence.
- **Terminal Green** (`#22c55e` / oklch(62% 0.19 145)): Success states, "active" badges, disuasión exitosa tags. Functional only.

### Neutral
- **Radar Navy** (`#080c18` / oklch(6% 0.04 270)): Body background. The full-screen default — dark, deep, non-reflective.
- **Screen Text** (`#f1f5f9` / oklch(94% 0.01 260)): Primary body and heading text. High-contrast on Radar Navy (>12:1).
- **Data Text** (`#a8bcd0` / oklch(72% 0.04 250)): Secondary text, metadata, muted descriptions. Must maintain 4.5:1 against Radar Navy.
- **Dim Text** (`#8596ab` / oklch(63% 0.05 260)): Placeholder text, disabled states (meets 4.5:1 on dark surfaces).
- **Grid Line** (`rgba(255,255,255,0.06)`): Borders and dividers. Invisible until looked for; structure without noise.

### Named Rules
**The Alert Red Rule.** Red is never decorative. Every red element signals an active state, a CTA, or a live alert. If it's not one of those, use Signal Blue or neutral.

## 3. Typography

**Display Font:** Inter (system-ui, -apple-system, sans-serif)
**Body Font:** Inter (system-ui, -apple-system, sans-serif)
**Label/Mono Font:** JetBrains Mono (Fira Code, monospace)

**Character:** A single-family sans-serif strategy with one deliberate break: Inter for all display, headline, body, and title roles; JetBrains Mono reserved exclusively for labels, telemetry data, and uppercase form labels. The contrast is not between two display faces but between humanist proportional and technical monospaced — the shift signals "this is data" vs. "this is narrative."

### Hierarchy
- **Display** (900, `clamp(2rem, 4.2vw, 3.2rem)`, 1.1, -0.03em): Hero H1 only. Never used outside the top section.
- **Headline** (800, `clamp(1.7rem, 3vw, 2.3rem)`, 1.15): Section headings. Appears once per section.
- **Title** (700, 0.95rem, 1.3): Card headings, feature titles. No letter-spacing.
- **Body** (400, 1rem, 1.7): Prose, descriptions, supporting text. Max 65ch.
- **Label** (600, 0.7rem, 0.05em, uppercase): Form labels, section tags, telemetry readouts. JetBrains Mono only. Always uppercase. The shift to monospace is intentional: labels should read as instrumentation, not prose.
- **Small Label** (700, 0.62rem, 0.08em, uppercase): Badge text, metadata chips, timestamps. Also JetBrains Mono.

### Named Rules
**The Mono Label Rule.** JetBrains Mono is reserved for labels, telemetry, and uppercase metadata. Never use it for body copy or headings. The switch to monospace is a deliberate signal: "this is an instrument reading, not natural language."

## 4. Elevation

The system uses ambient shadowing as its primary depth cue. Every card and container has a soft, wide shadow at rest — this is not a "shadow on hover" system but a "shadow as material property" system. The effect is subtle: panels feel like they sit above the Radar Navy background by a consistent, small margin.

Do not use additional shadow layers for hover states; elevation is expressed through border highlight (lighter border on hover) or background shift, never through stacking shadows.

### Shadow Vocabulary
- **Panel** (`0 8px 32px rgba(0,0,0,0.25)`): The default shadow for all cards, form containers, and info panels.
- **Modal** (`0 20px 60px rgba(0,0,0,0.35)`): Reserved for overlay containers and elevated dialogs.

### Named Rules
**The Single-Shadow Rule.** A surface gets exactly one shadow at rest. Hover states use border or background changes, not added shadow depth. Two shadows on one element is the tell of an over-engineered card.

## 5. Components

### Buttons
- **Shape:** Gently rounded corners (8px). Full-pill radii are prohibited outside tag/badge components.
- **Primary:** Alert Red (`#ef4444`) background, white text. The single high-contrast CTA. Red-orange gradient (`from-red-600 to-orange-600`) on hero CTAs for premium emphasis. Hover: darkens to `#dc2626`. No shadow on the button itself; shadow belongs on the container.
- **Ghost:** Transparent background, Signal Blue Light (`#3b82f6`) text, white text on hover with subtle background tint (`rgba(255,255,255,0.04)`).
- **Typography:** All buttons use Inter, not JetBrains Mono. Uppercase + wide tracking for primary CTAs only.

### Cards / Containers
- **Corner Style:** Generously rounded (28px) for standalone panels; 14px for nested or inline cards.
- **Background:** Radar Navy Deep (`#0e182e`), 1px Grid Line border.
- **Shadow:** Panel shadow at rest.
- **Hover:** Border transitions to Signal Blue tint (`rgba(30,64,175,0.15)`) or Alert Red for disuasión cards. No shadow change.
- **Internal Padding:** 20–24px.

### Inputs / Fields
- **Shape:** 8px radius, 1px Grid Line border, Radar Navy (`#080c18`) background.
- **Focus:** Border shifts to Alert Red or Signal Blue with a subtle ring (`0 0 0 3px rgba(var), 0.3 opacity`).
- **Typography:** User input in white, JetBrains Mono (reads as data entry). Placeholder in Dim Text (`#8596ab`).
- **Error:** Red border with red ring. No icon by default.
- **Labels:** JetBrains Mono, 0.7rem, uppercase, Data Text color. Sit above the field, not inside it.

### Navigation
- **Style:** Thin, glass-backed bar (`rgba(8,12,24,0.88)` with backdrop-blur). Single bottom border.
- **Typography:** Inter, 0.88rem, weight 600, white at 75% opacity. Active page uses Signal Blue underline via pseudo-element.
- **Mobile:** Full-width expandable panel with stacked links.
- **CTA button:** Embedded in the nav bar, Alert Red background, "Cotizar Gratis."

### Chips / Tags
- **Shape:** Full pill (999px radius).
- **Style:** High-transparency background with subtle border. Success: green bg at 10% + green border at 20%, Terminal Green text. Info: Signal Blue bg at 10% + Signal Blue border at 15%, Signal Blue text.
- **Typography:** JetBrains Mono, 0.62rem, weight 700, uppercase.

## 6. Do's and Don'ts

### Do:
- **Do** use the Radar Navy (`#080c18`) as the full-screen default. It's the command-center anchor; every other color sits on it.
- **Do** use Signal Blue for all interactive and accent needs. It's the functional workhorse — hover states, section indicators, icon tints.
- **Do** save Alert Red for CTAs, live-status badges, and real urgency signals. Its rarity is what gives it power.
- **Do** switch to JetBrains Mono for any text that represents data, telemetry, or labels. The shift signals "instrumentation."
- **Do** use ambient shadows on cards and panels at rest. This is a shadow-as-material system, not a shadow-on-hover system.
- **Do** cap body text at 65ch for comfortable reading.

### Don't:
- **Don't** use gradient text (background-clip + gradient). Use a single solid color for all typography. Emphasis comes from weight and size.
- **Don't** use side-stripe borders (border-left ≥ 2px as decorative accent). Use full borders, background tints, or nothing.
- **Don't** use glassmorphism as default. Blur and transparency are reserved for the nav bar and modal overlays only.
- **Don't** use the hero-metric template (big number + small label + supporting stats) as a reflexive pattern. Numbers earn their place.
- **Don't** use tiny uppercase tracked eyebrows above every section. One named kicker is voice; an eyebrow on every section is AI grammar.
- **Don't** use numbered section markers (01, 02, 03) as default scaffolding. Only if the section order carries information.
- **Don't** use repeating-linear-gradient stripe backgrounds. They are codex decoration.
- **Don't** use radii ≥ 32px on cards, sections, or inputs. Cards top out at 28px; tags and pills can be full-rounded.
- **Don't** pair `border: 1px` with `box-shadow` blur ≥ 16px on the same element. Pick one.
- **Don't** use paramilitary imagery, camouflage aesthetics, or "war on crime" visual rhetoric. The brand is technical, not bellicose.
