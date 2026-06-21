# Siddharthan.com

<p align="center">
  <img src="https://hackatime.hackclub.com/api/v1/badge/U092G90G5FS/siddharthan-pradeep07/personal-website-redesign" alt="Hackatime Badge"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/GitHub_Pages-181717?style=flat&logo=github&logoColor=white" alt="GitHub Pages"/>
</p>

---

### My personal portfolio site, built with React and Vite, hosted on GitHub Pages with a custom domain. 

Buttons & cards have a nice little pop down + sound effect. (while hover)

The homepage shows a video in an old CRT TV. (siddhathan.com/app)
Click it to head over to the projects page.

## The Main page

It feauters a intro card, showing a piece of text + social links and (my/a) pfp

And then comes the(my) latest blog post - click "all posts" to view the full list of posts, (directed to siddharthan.com/blog) click each post to view the images associated with it. 

followed by my (siddharthan-pradeep07) commit frequency data, and then the project cards.

The project cards contain information like:
  - image
  - name
  - date
  - description
  - Demo link (button)
  - code link (button) (GH Repo)

Clicking "play" on Femto's project card will direct the user to (siddharthan.com/femto) Where the user can play the game "Femto" which was developed using the sprig engine (hack.af/sprig) The game is entirely playable on the web, with button controls and WASD controls.

---

- Uses React 18
- vite
- react icons for social links
- site deploys to GitHub Pages via the `gh-pages` package.

---

## Clone it

Clone the repo and install dependencies:

```bash
git clone https://github.com/siddharthan-pradeep07/personal-website-redesign.git
cd personal-website-redesign
npm install
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:5173/` in your browser. The dev server hot-reloads on save.

---

## Quick files

- src/app.jsx     --- (siddharthan.com/app)
- src/project.jsx --- (siddharthan.com)
- src/Blog.jsx    --- (siddharthan.com/blog)
- src/Femto.jsx   --- (siddharthan.com/femto)
- src/cursor.jsx  --- (custom cursor)
- src/femto-game.js    --- (original code of the game "femto")
- src/assets/img  --- (project + background images)
- src/posts       --- (all blog posts, in markdown [.md] format)
- public/favicon.svg
- public/404.html

---

#### Made with love by siddharthan.

please give it a ⭐

**Siddharthan Pradeep** — [GitHub](https://github.com/siddharthan-pradeep07) · [siddharthansp07@gmail.com](mailto:siddharthansp07@gmail.com)

---