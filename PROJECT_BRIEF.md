# Nail Salon Website — Project Brief & Build Instructions

## PROJECT OVERVIEW

Build a modern, luxury-minimal nail salon website using Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. The site is a marketing website with lead capture for a nail salon soft opening. The project has already been scaffolded with `create-next-app` using TypeScript, Tailwind, and the App Router.

---

## DESIGN SYSTEM

### Color Palette (use as Tailwind CSS custom colors in tailwind.config.ts)

```
warm-cream:   #FAF7F2   ← Page background
almond:       #F5EDE3   ← Card backgrounds, subtle borders
blush:        #E8C4B8   ← Soft accents, hover states
rose:         #C9928A   ← Secondary buttons, highlights
deep-berry:   #6B3A3A   ← Primary buttons, headings
gold:         #C4A265   ← CTAs, accent text, badges
charcoal:     #2C2424   ← Primary text, nav background
white:        #FFFFFF   ← Cards, clean sections
muted:        #9A8C84   ← Secondary text, captions
```

### Typography

- **Display / Hero headings**: Google Font "Playfair Display" — weights 400, 600, 700. Serif, elegant, large sizes.
- **Body / UI text**: Google Font "DM Sans" — weights 400, 500, 600, 700. Clean sans-serif.
- **Accent labels**: DM Sans, uppercase, wide letter-spacing (0.1em–0.2em), small size, gold color.

Import both fonts via `next/font/google` in the root layout.

### Design Principles

1. **Luxury Minimal** — generous whitespace, clean layouts, every element breathes. Less clutter = more premium.
2. **Warm & Inviting** — soft cream backgrounds, blush accents, warm photography tones. Nothing cold or clinical.
3. **Gentle Motion** — subtle fade-ins on scroll (Framer Motion), smooth page transitions, soft hover states. Movement should feel like a deep breath.
4. **Mobile-First** — 70%+ of beauty clients browse on phones. Touch-friendly buttons, thumb-reachable nav, fast image loading.

### UI Patterns

- Buttons: pill-shaped (fully rounded), uppercase small text with letter-spacing
- Cards: white background, 16px border-radius, subtle border using almond color, light box-shadow
- Section labels: small uppercase gold text above section headings
- Headings: Playfair Display, charcoal color
- Dividers: use almond/cream colored thin lines, never harsh black

---

## SITE STRUCTURE & PAGES

Build these pages inside the `app/` directory:

### 1. Home Page (`app/page.tsx`)

**Hero Section:**
- Full-viewport height hero with dark gradient background (charcoal to deep-berry)
- Small uppercase gold label: "Now Open in [City]"
- Large Playfair Display heading: placeholder "Elegance at Your Fingertips"
- Subtitle in muted white text
- Two pill buttons: "Book Appointment" (gold bg, charcoal text) and "View Services" (transparent, white border)
- Sticky navigation bar at top: salon logo/name on left, nav links (Services, Gallery, About, Contact) on right, plus a "Book Now" gold pill button

**Services Preview Section:**
- Section label: "What We Offer" in gold uppercase
- Section heading: "Our Services" in Playfair Display
- Show 3-4 featured services in a grid of cards
- Each card: service name, short description, price, duration
- "View All Services" link at bottom

**About Preview Section:**
- Two-column layout: image placeholder on left, text on right
- Brief brand story paragraph
- "Learn More" link

**Gallery Preview Section:**
- Masonry or grid layout showing 4-6 image placeholders
- "View Gallery" link

**Testimonials Section (optional):**
- 2-3 client testimonial cards with quote, name, and star rating

**CTA Section:**
- Warm background (blush or cream gradient)
- "Ready for Your Next Appointment?" heading
- Book Now button

### 2. Services Page (`app/services/page.tsx`)

- Page header with section label and heading
- Category filter tabs: "Manicures", "Pedicures", "Nail Art", "Add-Ons" — pill-shaped, toggle active state (deep-berry bg when active)
- Service list displayed as rows inside a rounded card:
  - Each row: service name (bold), description (muted), price (large, Playfair Display, deep-berry), duration (small, muted)
  - Thin divider between rows (almond color)
- Use placeholder data for now:
  - Classic Manicure — $35 — 30 min
  - Gel Manicure — $50 — 45 min
  - Luxury Spa Manicure — $65 — 60 min
  - Dip Powder Manicure — $55 — 50 min
  - Classic Pedicure — $45 — 40 min
  - Gel Pedicure — $60 — 50 min
  - Luxury Spa Pedicure — $75 — 60 min
  - Nail Art (per nail) — $5+ — varies
  - Full Set Acrylic — $70 — 75 min
  - Gel-X Extensions — $80 — 60 min

### 3. Gallery Page (`app/gallery/page.tsx`)

- Page header
- Masonry grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Use placeholder colored rectangles with rounded corners for now (varying heights to simulate nail art photos)
- Optional: lightbox modal when clicking an image (can add later)

### 4. About Page (`app/about/page.tsx`)

- Page header
- Brand story section: paragraph about the salon's philosophy, what makes it special
- Use placeholder text for now — the owner will provide real copy later
- Team section: grid of team member cards with photo placeholder, name, role, short bio
- Values section: 3-4 cards with icons showing salon values (e.g., "Premium Products", "Relaxing Atmosphere", "Expert Technicians", "Clean & Safe")

### 5. Contact Page (`app/contact/page.tsx`)

- Page header
- Two-column layout:
  - Left: Contact info — address, phone, email, hours of operation, social media links
  - Right: Embedded Google Maps placeholder (gray rounded box with "Map" label for now)
- Contact form below: name, email, phone, message, submit button
- Form doesn't need to actually submit anywhere yet — just build the UI

### 6. Soft Opening Special Page (`app/special/page.tsx`)

- Dark background (charcoal gradient)
- "Limited Time" gold badge at top
- Large heading: "Soft Opening Special"
- Subtitle explaining the exclusive pricing / early access
- **Countdown timer component** — 4 boxes showing Days, Hours, Min, Sec (gold numbers, dark boxes). Use a static placeholder, doesn't need to tick yet.
- **Lead capture form:**
  - Full name input
  - Email address input
  - Phone number input (labeled optional)
  - "Reserve My Spot" gold button
  - Small text: "Only 50 spots available"
- Form doesn't need backend yet — just the UI

---

## COMPONENTS TO BUILD

Create these in a `components/` directory:

### `components/Navbar.tsx`
- Sticky top navigation
- Left: salon name in Playfair Display (gold color on dark, charcoal on light)
- Right: nav links + "Book Now" pill button
- Mobile: hamburger menu that opens a full-screen overlay with nav links
- Background transitions from transparent (on hero) to charcoal when scrolling

### `components/Footer.tsx`
- Dark charcoal background
- Three columns: Quick Links, Contact Info, Social Media
- Bottom bar: copyright text
- Minimal, clean

### `components/EmailPopup.tsx`
- Modal overlay with blurred/dimmed background
- White rounded card centered on screen
- Close button (X) in top right
- Emoji or icon at top (nail polish emoji)
- Heading: "Get 10% Off Your First Visit"
- Subtitle about joining the mailing list
- Email input field
- "Claim My Discount" deep-berry button
- "No spam, unsubscribe anytime" small text
- **Trigger**: show after 5 seconds on first visit. Use localStorage to track if already shown/dismissed.
- Animate in with Framer Motion (fade + scale)

### `components/SectionLabel.tsx`
- Reusable small uppercase gold label used above section headings
- Props: text string

### `components/ServiceCard.tsx`
- Reusable service row component
- Props: name, description, price, duration

### `components/CountdownTimer.tsx`
- Displays days, hours, minutes, seconds
- Props: target date
- Client component with useEffect interval

---

## ANIMATIONS (Framer Motion)

- **Page sections**: fade in + slide up slightly on scroll into view. Use Framer Motion's `useInView` or `whileInView`.
- **Navbar**: background color transitions smoothly on scroll.
- **Email popup**: fade in background overlay, scale up the modal card.
- **Hover states**: buttons slightly scale up (1.02), cards get a subtle shadow lift.
- **Page transitions**: optional, can add later.
- Keep all animations gentle and smooth — ease-out curves, 0.4-0.6s duration. Nothing bouncy or aggressive.

---

## FILE STRUCTURE SUMMARY

```
app/
  layout.tsx           ← Root layout with fonts, Navbar, Footer, EmailPopup
  page.tsx             ← Home page
  services/page.tsx    ← Service menu
  gallery/page.tsx     ← Photo gallery
  about/page.tsx       ← About us
  contact/page.tsx     ← Contact & location
  special/page.tsx     ← Soft opening landing page
  globals.css          ← Tailwind imports + any custom CSS
  api/
    signup/route.ts    ← Email signup endpoint (placeholder)

components/
  Navbar.tsx
  Footer.tsx
  EmailPopup.tsx
  SectionLabel.tsx
  ServiceCard.tsx
  CountdownTimer.tsx

lib/
  services-data.ts     ← Placeholder service data (array of objects)
```

---

## IMPORTANT NOTES

- Use placeholder content everywhere — the owner will provide real copy, photos, and details later. Use realistic-looking placeholder text, not lorem ipsum.
- All colors should be set up as custom Tailwind colors in `tailwind.config.ts` so they can be easily swapped later when the owner picks final branding.
- All images are placeholders for now — use colored rounded rectangles with appropriate aspect ratios.
- Make sure the site looks great on mobile first, then scales up to desktop.
- Use semantic HTML for accessibility.
- Add proper meta tags and page titles for each route.

---

## BUILD ORDER (suggested)

1. Set up Tailwind custom colors and fonts in config and layout
2. Build Navbar and Footer (shared layout)
3. Build Home page (hero + sections)
4. Build Services page
5. Build About page
6. Build Contact page
7. Build Gallery page
8. Build Soft Opening Special page
9. Add EmailPopup component
10. Add scroll animations with Framer Motion
11. Polish responsive design and test on mobile

---

Start by setting up the design system (colors, fonts, base layout) and then build the Home page hero section first. Let's go step by step.
