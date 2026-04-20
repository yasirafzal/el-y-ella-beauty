# Design Brief: El y Ella Beauty Salon

**Tone**: Refined luxury with approachable warmth. Upscale beauty editorial aesthetic—sophisticated yet inviting, modern yet organic.

**Differentiation**: Warm color grading specific to women-run salon context; elegant serif (Fraunces) paired with friendly sans-serif (Nunito); intentional surface treatment across all zones with warm undertones throughout.

## Palette

| Role | OKLCH Light | OKLCH Dark | Usage |
|------|-------------|-----------|-------|
| Primary | 0.55 0.12 345 (deep rose/mauve) | 0.72 0.1 350 | Buttons, accents, active states |
| Secondary | 0.96 0.02 78 (warm cream) | 0.28 0.02 75 | Card backgrounds, light elements |
| Accent | 0.75 0.08 65 (peachy-gold) | 0.78 0.09 65 | Highlights, decorative elements |
| Neutral | 0.92–0.98 L (warm greys) | 0.16–0.32 L | Backgrounds, borders, text hierarchy |
| Destructive | 0.55 0.22 25 (red-orange) | 0.65 0.19 22 | Alerts, deletions |

## Typography

| Tier | Font | Size/Weight | Usage |
|------|------|-------------|-------|
| Display | Fraunces | 32–48px, 600–700 | Headlines, hero, section titles |
| Body | Nunito | 14–16px, 400–600 | Body copy, descriptions, UI labels |
| Mono | JetBrainsMono | 12–13px, 400 | Code, pricing, technical text |

## Structural Zones

| Zone | Treatment | OKLCH Background |
|------|-----------|------------------|
| Header | Elevated, subtle shadow, warm cream base with rose text | 0.99 0.02 75 / 0.2 0.03 345 |
| Hero Section | Gradient from primary to accent, full-width carousel | Gradient primary-accent |
| Card Sections | Lifted cards with elegant shadow, cream/secondary backgrounds | 0.99 0.02 75 / 0.24 0.03 345 |
| Footer | Warm muted background, border-top, small text | 0.92 0.01 80 / 0.26 0.02 345 |

## Spacing & Rhythm

- **Base unit**: 0.75rem (12px); scale 0.5x, 1x, 2x, 3x, 4x
- **Density**: Generous padding (20–32px) for luxury feel, breathing room around cards
- **Vertical rhythm**: Consistent line-height 1.6–1.8, gutter 24–32px

## Component Patterns

- **Buttons**: Primary (rose bg, cream text), Secondary (cream bg, rose text), Ghost (rose text, no bg)
- **Cards**: Rounded 12px, cream bg with elegant shadow, warm border on hover
- **Input fields**: Rounded 8px, warm border, focus ring in primary rose
- **Navigation**: Sticky header, logo left, nav items right, menu toggle on mobile

## Motion

- **Transitions**: Smooth 300ms easing for all interactive elements
- **Hover states**: Subtle lift (shadow-lift), slight color shift
- **Entrance**: Fade-in + slight scale for sections on scroll
- **No excessive animations**: Focus on elegance, not distraction

## Shape Language

- **Border radius**: 0–4px (tight, functional), 8–12px (moderate, cards), 24px (large, decorative)
- **Corners**: Soft, rounded everywhere except icon buttons (12px)

## Signature Detail

Warm color grading throughout entire UI—no cold blues or default greys. Every neutral is warm-shifted toward rose/cream, reinforcing the feminine, welcoming aesthetic of a women-run salon. Gradients accent buttons and hero sections using primary-to-accent flow (rose → peachy-gold).
