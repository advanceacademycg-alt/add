# Advance Academy site
Run: `npm install && npm run dev`  ·  Deploy: push to GitHub → vercel.com → Import → Deploy (no settings needed). Then set `site.url` in lib/site.ts.

## Replace images
- Logo: `public/images/logo.png` (your official logo, transparent PNG)
- Transformation (same person, same pose/framing/canvas size, 900x1200+ portrait, transparent or flat-colour background, WebP):
  `public/images/transformation/student-01.webp` → `student-02` → `student-03` → `student-04` → `doctor.webp`
  Make 01 = polo, 02 = confident posture, 03 = coat half over polo, 04 = coat + stethoscope, doctor = final. Scroll reveals each frame bottom-up with feathered mask, lighting and background shift. Add frames by editing `site.frames`.
- Results/faculty/testimonial photos: put in `public/images/{results,faculty,students}/` and set `photo: "/images/results/name.webp"` in lib/site.ts
- Campus: `public/images/campus/{classrooms,students-studying,teachers-teaching,test-sessions,doubt-solving,discussion,mentorship}.webp`
## Edit content: everything is in `lib/site.ts` (phone, WhatsApp number, address, courses, stats, results, faculty, testimonials, offer).
