# Design System Strategy: Threat Monitor

## 1. Overview & Creative North Star: "Atmospheric Intelligence"
Most cybersecurity dashboards suffer from "Information Overload Syndrome"—cluttered grids, harsh borders, and a generic "hacker" aesthetic. This design system rejects those tropes. Our Creative North Star is **Atmospheric Intelligence**. 

We are moving away from a "boxed" interface toward an editorial layout that feels like a high-end command center. We achieve this through **Tonal Scaffolding**—using light and depth rather than lines to organize data. The experience should feel like looking through a lens: precise, deep, and authoritative. We break the standard SaaS template by using intentional asymmetry, where large-scale editorial typography balances dense technical data, creating a rhythm that guides the analyst's eye to what matters most.

---

## 2. Colors & Tonal Architecture
The palette is built on a foundation of "Deep Space" neutrals. We do not use pure black; we use `surface` (`#0b0e14`) to allow for depth perception in a dark environment.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. 
Structure must be defined through background color shifts. A `surface-container-low` section sitting on a `surface` background is our primary method of containment. This creates a sophisticated, "app-like" feel that avoids the visual noise of a wireframe-heavy UI.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use the tier system to "lift" or "sink" content:
*   **Background:** `surface` (`#0b0e14`) - The canvas.
*   **Secondary Content:** `surface-container-low` (`#0f131c`) - Sidebars or inactive areas.
*   **Primary Interaction:** `surface-container` (`#141a25`) - Main dashboard cards.
*   **High Focus/Modals:** `surface-container-highest` (`#1d2637`) - Active alerts or overlays.

### The Glass & Gradient Rule
To move beyond a flat "template" look, floating elements (like hover menus or global search) must use Glassmorphism. Apply a semi-transparent `surface-container` color with a `backdrop-blur` of 20px. 
For main CTAs or "Critical" status indicators, use subtle gradients transitioning from a base color (e.g., `primary` `#3B82F6`) to its container variant (`primary_container` `#004395`). This adds a "lithographic" soul to the interface.

---

## 3. Typography: The Editorial Voice
We use a dual-typeface system to balance technical precision with executive authority.

*   **The Authority (Manrope):** Used for `display` and `headline` roles. Manrope’s geometric but open structure provides an editorial feel. Use `display-lg` (3.5rem) sparingly to highlight massive "Threat Score" numbers or "Total Attacks" counts.
*   **The Engine (Inter):** Used for `title`, `body`, and `label`. Inter is optimized for screen readability. In a data-heavy cybersecurity context, `label-sm` (0.6875rem) in `on_surface_variant` (`#a2abc1`) is your workhorse for metadata and timestamps.

**Hierarchy as Identity:** 
High-contrast typography is key. A `headline-lg` title should sit confidently near `body-sm` metadata. This gap in scale creates an "Executive Summary" feel, allowing an analyst to scan the "big story" while keeping technical details accessible.

---

## 4. Elevation & Depth
In this design system, elevation is a property of light, not lines.

*   **The Layering Principle:** Stacking is our primary separator. Place a `surface-container-lowest` (`#000000`) card inside a `surface-container-low` (`#0f131c`) wrapper to create a "recessed" well for data tables.
*   **Ambient Shadows:** For floating elements, use extra-diffused shadows. 
    *   *Value:* `0px 24px 48px rgba(0, 0, 0, 0.4)`
    *   Shadows should never be "grey." They should feel like an absence of light, naturally bleeding into the `#0b0e14` background.
*   **The "Ghost Border" Fallback:** If a layout becomes too complex and requires a boundary, use a **Ghost Border**. This is a 1px stroke using the `outline_variant` (`#3f485a`) at 15-20% opacity. It should be barely perceptible—visible only when the eye searches for it.

---

## 5. Components

### Primary Buttons
*   **Style:** `primary` (`#3B82F6`) background with `on_primary` (`#FFFFFF`) text.
*   **Shape:** `DEFAULT` (0.5rem/8px) rounded corners.
*   **Treatment:** Use a very subtle top-down gradient (5% lighter at the top) to give the button a tactile, premium "pressable" feel.

### Threat Badges (Chips)
Badges must use the functional severity colors provided:
*   **Critical:** `error` (`#EE7D77`) text on `error_container` (`#7F2927`).
*   **High:** `tertiary` (`#F97316`) text on `tertiary_container` (`#F77113`).
*   **Medium:** `on_secondary_fixed` (`#324052`) text on `secondary_fixed` (`#D4E4FA`).
*   **Low:** `primary` (`#3B82F6`) text on `primary_container` (`#004395`).

### Data Lists & Cards
*   **Constraint:** Forbid the use of horizontal divider lines between rows.
*   **Alternative:** Use 12px or 16px of vertical white space from our spacing scale. For dense lists, use "Zebra Layering" where every second row uses a `surface-container-low` background with an 8px corner radius.

### Input Fields
*   **Style:** `surface-container-lowest` background with a `ghost border`.
*   **Focus State:** Shift the border to `primary` (`#3B82F6`) and add a 2px outer glow using `primary` at 10% opacity.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. A 3-column grid where the left column is significantly wider than the right creates a sophisticated, "Dashboard-as-Magazine" feel.
*   **Do** use `on_surface_variant` (`#a2abc1`) for all non-essential text to maintain the "Subtle Contrast" requested.
*   **Do** allow elements to overlap slightly (e.g., a floating tooltip overlapping a card edge) to emphasize the Z-axis depth.

### Don't:
*   **Don't** use 100% opaque white typography for body text. Use `on_surface` (`#dce5fd`) to prevent "halo" effects and eye strain in dark mode.
*   **Don't** use standard shadows on cards. If a card isn't floating, it doesn't need a shadow; it needs a tonal shift.
*   **Don't** use "Alert Red" for anything other than actual Critical threats. If a button is important, it is `primary` (Blue), not Red.

---

## 7. Signature Element: The "Pulse"
To reinforce the real-time nature of "Threat Monitor," integrate a signature "Pulse" component. This is a small (8px) dot using `primary` or `error` with two expanding concentric rings (20% and 10% opacity) that animate to simulate a heartbeat. This provides a "live" feel to the interface without requiring heavy motion or complex video.