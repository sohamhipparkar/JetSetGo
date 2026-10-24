# JetSetGo

## 🤖 AI Chatbot ("Jet") — powered by Google Gemini

A floating chat button appears in the bottom-right corner of every page. Jet answers
questions about flights, bookings, baggage, check-in, destinations, deals and contact
details using the content of this website, and links users to the right page.

### Setup (local)

1. Get a free Gemini API key at https://aistudio.google.com/apikey
2. Open the `.env` file in the `frontend` folder and replace the placeholder:
   ```
   GEMINI_API_KEY=paste_your_key_here
   ```
3. Install and run:
   ```
   npm install
   npm run dev
   ```
4. Open the link Vite prints (usually http://localhost:5173) and click the chat button.

> If you change `.env` while the server is running, stop it (Ctrl + C) and run `npm run dev` again.

### Deploying on Vercel

In your Vercel project go to **Settings → Environment Variables**, add `GEMINI_API_KEY`
with your key, then redeploy. (`.env` is not uploaded — it's in `.gitignore` so your key
never ends up on GitHub.)

### How it works

| File | What it does |
|---|---|
| `src/components/ChatBot.jsx` | The chat window (React + Tailwind). Mounted once in `App.jsx`, so it shows on every page. |
| `server/knowledge.js` | Everything the bot knows about JetSetGo + its instructions. **Update this when you change site content.** |
| `server/chatHandler.js` | Sends the conversation to the Gemini API and returns the reply. |
| `vite.config.js` | Serves `/api/chat` during `npm run dev` / `npm run preview`. |
| `api/chat.js` | The same `/api/chat` endpoint as a Vercel serverless function for production. |

The API key is only read on the server, so it is never visible in the browser.
Optional: set `GEMINI_MODEL` in `.env` to use a different model (default `gemini-2.5-flash`).

### Troubleshooting

- **"The chatbot isn't set up yet"** → the key is missing in `.env`, or the server wasn't restarted.
- **"Your Gemini API key was rejected"** → copy the key again from AI Studio (no quotes or spaces).
- **"Too many requests"** → free-tier rate limit; wait a few seconds.
- **"Can't reach the assistant"** → the dev server isn't running.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
