# TODO for About Section Update

- [ ] Step 1: Update src/components/About.tsx
  - Remove carousel logic (useState, useEffect, images array, motion key/animate/exit).
  - Replace image section with single static Image using src="/wall coating_edited.avif" (fill, object-cover, rounded-lg shadow-2xl).
  - Restructure right column: Keep h2 "About Us", blockquote, intro p (keep existing text).
  - Add h3 "History" with paragraph: "We began our journey in the year 2020... [existing text adapted]".
  - Add h3 "Why Us" with ul bullets: 
    - Over 25 years of proven expertise in all flooring types (adapt to 2020 founding, but emphasize experience).
    - Premium materials sourced from trusted suppliers.
    - Certified installers with ongoing training.
    - Comprehensive warranty and maintenance.
    - Free consultations and detailed project planning.
    - Eco-friendly options and sustainable practices.
  - Update bottom flex div: Three motion divs - "Best Quality" with CheckCircle, "Free Consultation" with Calendar, "Certified Products" with Star. Style as rounded-full glass px-4 py-2, text-brown font-semibold.
  - Remove isFullPage prop and conditional content; always render full structure.
  - Keep animations, classes, ID="about".

- [ ] Step 2: Update src/app/about/page.tsx
  - Add import About from '@/components/About'.
  - Remove the entire custom <section id="about"> (including motion.div grid, image carousel with buttons/dots, text, bottom badges).
  - Remove Vision & Mission section and Why Choose Us section.
  - Insert <About /> after the Hero section.
  - Remove unused imports: motion (if not used elsewhere), Image (if only in removed), useState, ChevronLeft/Right, Award/Users/Shield/Wrench/Heart.
  - Keep Navbar, Hero, Footer.
  - Ensure page structure: Navbar > Hero > About > Footer.

- [ ] Step 3: No changes needed for src/app/page.tsx (already imports <About />).

- [ ] Step 4: Test the changes
  - Run `npm run dev` to start the development server.
  - Use browser to navigate to http://localhost:3000 (home page About section) and http://localhost:3000/about (full about page).
  - Verify layout matches image: left static image, right text with subsections, bottom three badges.
  - Check responsiveness (columns stack on mobile).
  - Update this TODO.md with [x] as steps complete.
