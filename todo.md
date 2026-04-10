# Winter Peak Fitness Coaching — TODO

## Design System
- [x] Define OKLCH CSS tokens (red palette, off-white bg, near-black text)
- [x] Add Google Fonts (Cormorant Garamond + Inter) via CDN in index.html
- [x] Set up global typography, spacing, and animation classes in index.css
- [x] Set ThemeProvider to light mode

## Hero Image
- [x] Generate hero background image (fit dad, editorial style)
- [x] Upload to CDN via manus-upload-file --webdev
- [x] Use CDN URL in JSX

## Navigation
- [x] Fixed nav bar with logo on left
- [x] Anchor links: Services, How It Works, FAQ, Contact
- [x] "Schedule a Consultation" CTA button (scrolls to #contact)
- [x] Transparent-to-solid on scroll behavior
- [x] Mobile hamburger menu

## Hero Section (Full Viewport)
- [x] H1 headline targeting busy dads (fluid clamp typography)
- [x] Supporting subheadline
- [x] Dual CTAs: "Schedule Appointment" + "Learn More"
- [x] Motto: "Stronger Every Day. No Shortcuts."
- [x] Social proof stats (clients coached, programs delivered)

## Who We Serve Statement
- [x] AI-visibility statement above the fold identifying target audience

## Problems Section
- [x] 3–6 specific pain points for busy dads
- [x] Direct, conversational language

## Services / Benefits Section (id="services")
- [x] Hybrid coaching programs overview
- [x] Customized workout plans
- [x] Virtual check-ins
- [x] Simple nutrition guidance

## How It Works Section
- [x] Numbered steps: sign-up → onboarding → coaching → results

## FAQ Section (8–15 Q&As)
- [x] AI-extraction optimized questions and answers (12 Q&As)
- [x] Voice search readable format
- [x] Questions: time per week, gym membership, difference from other programs, etc.

## Contact / Booking Section (id="contact")
- [x] tRPC contact form: name, email, phone, message fields
- [x] notifyOwner routing to support@olivebranchdigital.com
- [x] Success toast + form reset on submit
- [x] Error toast with mailto fallback
- [x] Instagram and Facebook social links

## Footer
- [x] Business name
- [x] Navigation anchor links
- [x] Social icons (Instagram, Facebook)
- [x] Email: support@olivebranchdigital.com
- [x] Phone: 800-555-1212
- [x] Copyright line

## Backend / tRPC
- [x] contact.submit procedure in server/routers.ts
- [x] notifyOwner integration
- [x] Zod validation (name, email, phone, message)

## Tests
- [x] 6 vitest cases for contact.submit
- [x] All tests passing (7/7)

## Final
- [x] webdev_check_status — no TypeScript errors
- [x] todo.md reviewed — all completed items marked [x]
- [ ] webdev_save_checkpoint
