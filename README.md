# CHAZZ THE BOI WONDER — Official Website

A premium, fully responsive 5-page website for **Chazz The Boi Wonder** (Boi Wonder Entertainment) — Southern Soul, North Augusta, SC.

Built with plain **HTML, CSS, and JavaScript** — no build step, no frameworks, no dependencies. Just open it or upload it to any host.

---

## How to view it

Double-click **`index.html`** to open it in your browser. That's it.

To put it online, upload the whole folder to any web host (Netlify, Vercel, GitHub Pages, Hostinger, Namecheap, etc.). Keep the folder structure intact.

---

## Folder structure

```
chazz/
├── index.html        ← Home
├── music.html        ← The Music
├── bookings.html     ← Booking Chazz
├── about.html        ← The Story
├── contact.html      ← Contact
├── css/style.css     ← All styling
├── js/script.js      ← All interactivity
└── assets/
    ├── logo.svg      ← Boi Wonder emblem (vector recreation)
    └── images/       ← Photos & artwork (see below)
```

---

## ⭐ Swapping in your real photos

The site currently ships with **branded placeholder artwork** (vinyl / gold / rain styled) so it looks finished out of the box. To use your real photos, just **drop your image in `assets/images/` using the exact same filename** — no code editing needed.

| Filename to replace | Where it shows | Best photo to use |
|---|---|---|
| `assets/logo.svg` | Nav + footer logo | Your `Logo.jpg` — see note below |
| `images/hero-bg.jpg` | Home hero background | An atmospheric studio / rain / stage shot (wide) |
| `images/make-it-rain.jpg` | "Make It Rain" feature (Home + Music) | The **Make It Rain poster** |
| `images/trail-ride.jpg` | "Trail Ride — Coming Soon" (Music) | Trail Ride artwork (or a teaser image) |
| `images/about-chazz.jpg` | About page portrait | The **red-hoodie studio photo** of Chazz |
| `images/nelson.jpg` | About — team card | Photo of Nelson "The Sugaa Shack Man" |
| `images/jeff.jpg` | About — team card | Photo of Jeff "The Wizard" |
| `images/hit-squad.jpg` | About — The Hit Squad block | The studio-spotlight group photo |
| `images/cta-bg.jpg` | Call-to-action band background | Any dark, moody wide shot |

**Tips for clean swaps**
- Match the shape: backgrounds (`hero-bg`, `cta-bg`) work best **wide** (e.g. 1600×900). Portraits/cards work best **square or vertical**.
- Keep filenames **lowercase** and spelled exactly as above.
- JPG or PNG both work — if you use PNG, rename it to end in `.jpg` anyway, or update the filename in the HTML.

**About the logo:** the nav/footer logo is a clean **vector (`logo.svg`)** recreation of the Boi Wonder emblem, so it stays sharp at any size. If you'd rather use your original `Logo.jpg`, save it as `assets/images/logo.jpg` and change `assets/logo.svg` to `assets/images/logo.jpg` everywhere it appears in the `.html` files (find & replace).

---

## Editing common text

Everything is plain text inside the `.html` files — open them in any editor (even Notepad) and type over the words.

| To change… | Edit this |
|---|---|
| Phone number | Search for `803-624-7031` and `+18036247031` |
| Email | Search for `boiwonderent@gmail.com` |
| TikTok / Instagram links | Search for `chazztheboiwonder` |
| Booking package details | `bookings.html` |
| Bio / story | `about.html` |
| Song info | `music.html` |

> **Note:** The booking tiers say **"Inquire"** instead of fixed prices, since no pricing was provided. When you set prices, open `bookings.html`, find the word `Inquire`, and replace it with your rate (e.g. `$500`).

---

## Contact form

The contact form uses a **mailto** fallback — when a visitor hits *Send Message*, it opens their email app with the message pre-filled to **boiwonderent@gmail.com**. No server or signup required.

If you later want submissions to arrive automatically (without the visitor's email app), free services like **Formspree** or **Web3Forms** drop in with a couple of lines — happy to wire that up.

---

## What's included

- **5 pages**, fully linked, sticky glass navigation, mobile hamburger menu
- **Animated hero** — spinning vinyl record with the Boi Wonder emblem + gold/blue rain effect ("Make It Rain")
- Scroll-reveal animations, animated stat counters, FAQ accordion, back-to-top + quick-contact buttons
- **SEO-ready**: meta titles/descriptions, Open Graph tags, and music-artist structured data on every page
- **Accessible**: keyboard focus styles, reduced-motion support for visitors who prefer less animation
- Google Maps embed for North Augusta, SC on the Contact page

---

*Boi Wonder Entertainment · The Hit Squad · Southern Soul · From Augusta to the World*
