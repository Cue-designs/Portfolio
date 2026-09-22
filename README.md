# Emmanuel Cajetan Portfolio

I built this modern, responsive portfolio to introduce myself as Emmanuel Cajetan, a frontend-focused developer based in Lagos, Nigeria.

I use this site to share my selected work, technical skills, services, professional experience, and contact details. I designed it with a dark glassmorphic visual system, warm accent colors, responsive card layouts, and GSAP-powered motion.

## Features

- I built a responsive portfolio layout with the Next.js App Router.
- I added a sticky glassmorphic navigation with a responsive mobile menu.
- I created an animated opening loader with:
  - `Cue dev` branded wordmark.
  - Alex Brush wordmark typography.
  - Bricolage Grotesque loading label.
  - Horizontal GSAP progress indicator.
  - Body scroll locking during the intro sequence.
- My hero section introduces my role with a profile image, CTAs, and status chips.
- My about section shares my background, summary statistics, and technology matrix.
- I showcase my skills through technology cards and a logo loop.
- I explain the services I offer with animated service cards.
- I document my experience and journey in a timeline.
- I present my projects with previews, technology tags, hover states, and a GitHub link.
- My contact section includes:
  - Location, phone, WhatsApp, and email details.
  - OpenStreetMap embed.
  - Name, email, subject, phone, and message form.
- I included social links and a back-to-top action in the footer.
- I support reduced motion for CSS and JavaScript animations.
- I added visible keyboard focus states for links and buttons.

## Tech Stack

- Next.js 15 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP and `@gsap/react`
- Lucide React
- React Icons
- Next Font optimization

## Typography

- **Bricolage Grotesque:** I use this for headlines, display typography, and prominent statements.
- **Plus Jakarta Sans:** I use this for body copy, navigation, buttons, labels, and interface text.
- **Alex Brush:** I reserve this for my opening loader wordmark.

## Page Structure

I assemble my main page in [src/app/page.tsx](src/app/page.tsx) in this order:

1. Opening loader
2. Header and navigation
3. Hero
4. About and tech stack matrix
5. Skills and technology loop
6. Services
7. Experience and journey
8. Projects
9. Contact
10. Footer

## Project Structure

```text
.
|- components/
|  |- About.tsx                 About copy, stats, and tech matrix
|  |- ClientOpeningLoader.tsx   Client-only dynamic loader wrapper
|  |- Contact.tsx               Contact details, map, and form
|  |- Experience.tsx            Career and education timeline
|  |- Footer.tsx                Social links and back-to-top action
|  |- Header.tsx                Sticky responsive navigation
|  |- Hero.tsx                  Main introduction and profile image
|  |- LogoLoop.tsx              Reusable animated technology marquee
|  |- OpeningLoader.tsx         GSAP opening animation
|  |- Projects.tsx              Project showcase cards
|  |- Services.tsx              Services grid
|  |- Skills.tsx                Skills cards and technology logos
|  `- TextType.tsx              Reusable typing animation component
|- public/                      Portfolio images and media assets
|- src/app/
|  |- globals.css               Tokens, typography, glass surfaces, and base styles
|  |- layout.tsx                Root layout, metadata, and Google fonts
|  `- page.tsx                  Portfolio page composition
|- next.config.ts
|- package.json
|- postcss.config.mjs
|- tsconfig.json
`- eslint.config.js
```

## Getting Started

### Requirements

- Node.js 18.18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Run lint

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## Animation Architecture

I scope my GSAP animations to their owning components with `gsap.context`, `ScrollTrigger`, or `useGSAP`:

- `OpeningLoader.tsx` controls the intro timeline, scroll lock, loader exit, and hero reveal.
- `ClientOpeningLoader.tsx` loads the browser-only loader with `ssr: false` so GSAP DOM mutations do not participate in server hydration.
- `Hero.tsx` handles CTA hover scaling.
- `About.tsx`, `Skills.tsx`, `Services.tsx`, `Experience.tsx`, `Projects.tsx`, and `Contact.tsx` use section-scoped scroll reveals.
- `LogoLoop.tsx` provides the animated technology marquee.

I reduce or disable animations where appropriate when someone has enabled `prefers-reduced-motion`.

## Styling System

I define my visual language in [src/app/globals.css](src/app/globals.css):

- I expose my palette through CSS variables such as `--ink`, `--paper`, `--muted`, `--sand`, `--accent`, and `--border`.
- I use `.glass-surface` for translucent borders, blur, and soft depth.
- I use `.card-motion` for rounded card surfaces, hover lift, and accent border feedback.
- I use `.section-kicker` for consistent section labels.
- I use global `scroll-behavior: smooth` for internal anchor navigation.

## Assets

My portfolio imagery lives in [public](public):

- `profile.png`: hero profile image.
- `Blog.png`: blog project preview.
- `devbyte.png`: community project preview.
- `commerce.png`: ecommerce project preview.
- `imageweb.png`: about section visual.
- `walk1.png`, `walk3.png`, and `walk5.png`: additional available imagery.
- `portfolio.svg`: available portfolio artwork.

## Customization

I update common content directly in the component data arrays:

- Hero copy and status chips: [components/Hero.tsx](components/Hero.tsx)
- Skills and technology logos: [components/Skills.tsx](components/Skills.tsx)
- Services: [components/Services.tsx](components/Services.tsx)
- Experience entries: [components/Experience.tsx](components/Experience.tsx)
- Projects: [components/Projects.tsx](components/Projects.tsx)
- Contact details and form destination: [components/Contact.tsx](components/Contact.tsx)
- Social links: [components/Footer.tsx](components/Footer.tsx)

My contact form currently uses a `mailto:` action. For production submissions, I will replace it with a server action, API route, or form provider.

## Deployment

I deployed the project to Vercel that supports Next.js:

```bash
npm run build
npm run start
```

## Accessibility Notes

- I use semantic sections and headings throughout the page.
- I give interactive controls visible focus states.
- I provide alternative text for images.
- I expose `aria-expanded`, `aria-controls`, and labels in the mobile navigation.
- I give the opening loader `role="status"` and an accessible loading label.
- I respect motion-sensitive users with reduced animation behavior.
