
# Dancing Light (Next.js + Tailwind)

A consciously designed site for Dancing Light Films.

## Quickstart
```bash
npm i
npm run dev
```
Visit http://localhost:3000

## Replace assets
- `public/video/showreel.mp4` and `public/video/showreel.webm` (local hero video)
- `public/video/showreel-poster.jpg` (poster)
- `public/images/founder/benji-saul.jpg` (founder image)
- Place logos in `public/logos/`:
  - team-love.png, medicine-festival.jpg, lovejam.png, primal.png, north-face.png,
    vivobarefoot.png, unmasked-man.png, arts-council-england.svg, and-soul.png,
    bath-house.png, conscious-buddy.png, cross-the-tracks.png, inea.png

## Calendly
Calendly CSS + script are loaded in `app/layout.tsx`. Popup buttons call `Calendly.initPopupWidget`, inline embeds use the `CalendlyInline` component (re-inits on navigation).

## Notes
- Instagram embeds are used via `embed` URLs on the Home and Portfolio pages. You can switch to the `InstagramEmbed` component if you prefer script-based processing.
