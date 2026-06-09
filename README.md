# 🎮 devanandk.github.io — Career Quest

An interactive, gamified portfolio for **Devanand K** — Banking Technologist, Enterprise
Integration Specialist, Cloud-native Architect, and AI Explorer.

**Live site:** https://devanandk.github.io

## The concept

Instead of a static résumé page, the portfolio plays like a lightweight RPG:

- 🧬 **Character Sheet** — a hero card with class, level (13 = years of experience), guild and current quest
- 🌳 **Skill Tree** — six expandable branches with skill levels
- 🗺️ **Quest Log** — career history as quests (current role = active quest)
- ⭐ **Side Quests** — projects as mission cards with rarity tiers (Legendary → Common)
- 🏆 **Achievements & XP** — visitors earn XP and unlock achievements as they explore; progress persists in `localStorage`
- 💻 **Easter eggs** — a hidden interactive terminal (press <kbd>`</kbd>), the Konami code, and more

Everything remains fully readable as a normal portfolio — the game layer is optional flavor,
not a gate.

## Tech

- Pure **HTML / CSS / vanilla JavaScript** — no frameworks, no build step
- Served directly by **GitHub Pages** (`.nojekyll` disables the Jekyll pipeline)
- Responsive, dark/light themes, `prefers-reduced-motion` respected, semantic markup + JSON-LD

## Structure

```
index.html              # single-page app
404.html                # themed "undiscovered area" page
assets/css/style.css    # all styles (design tokens at the top)
assets/js/data.js       # ✏️ ALL content lives here — edit this to update the site
assets/js/game.js       # game engine: XP, levels, achievements, toasts, persistence
assets/js/main.js       # rendering + interactions (skill tree, quest log, terminal…)
```

## Updating content

Edit `assets/js/data.js` — profile, skills, experience (quests), projects and achievements
are all plain data objects. No other file needs to change for content updates.

## Run locally

Any static server works:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```
