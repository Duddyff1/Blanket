# Blanket — GitHub Pages game demo

Blanket is an original quiz-and-collect browser game demo. It is inspired by the general quiz-game genre, but uses its own name, visuals, modes, packs, and collectible characters.

## Upload to GitHub Pages
1. Download and unzip `blanket-github-pages.zip`.
2. Open your GitHub repository.
3. Click **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `script.js`, and `README.md` from the unzipped folder (upload the files themselves, not just the ZIP).
5. Click **Commit changes**.
6. Open **Settings → Pages** and select your main branch and `/ (root)` if Pages is not already enabled.
7. Open the published Pages URL.

## Included
- Responsive home, discover, game modes, market, collection, stats, and settings pages
- Six modes: Classic Quiz, Gold Quest, Cozy Café, Blanket Rally, Blanket Factory, and Code Crack
- Original quiz packs and collectible Blankies
- Custom quiz pack creator
- Coins, levels, question stats, collection, and equipped buddy saved in local browser storage
- Local admin panel with code `StarsAreCool`: unlock all Blankies, infinite coins, auto-answer, highlight correct answers, add coins, and reset progress

## Notes
- This is a front-end demo. Player progress is saved in the current browser using `localStorage`; it is not a multiplayer service and does not have a server.
- Admin controls are for local testing only. Since the code is included in the front-end JavaScript, this is not secure authentication for a real public service.
- Internet access is only needed for the optional Google Fonts import. The game logic itself is local.
