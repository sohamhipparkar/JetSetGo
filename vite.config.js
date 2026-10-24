import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { handleChat, ChatError } from './server/chatHandler.js'

// Serves POST /api/chat while running `npm run dev` or `npm run preview`,
// so the chatbot works locally using the GEMINI_API_KEY from your .env file.
// (On Vercel the same job is done by api/chat.js.)
function chatApiPlugin(env) {
  const middleware = (req, res, next) => {
    if (!req.url || !req.url.startsWith('/api/chat')) return next()

    const send = (status, data) => {
      res.statusCode = status
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(data))
    }
    if (req.method !== 'POST') return send(405, { error: 'Method not allowed' })

    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
      if (raw.length > 100_000) req.destroy()
    })
    req.on('end', async () => {
      try {
        const result = await handleChat(JSON.parse(raw || '{}'), env)
        send(200, result)
      } catch (err) {
        const status = err instanceof ChatError ? err.status : 500
        if (status >= 500) console.error('[chat]', err.message)
        send(status, { error: err.message || 'Something went wrong.' })
      }
    })
  }

  return {
    name: 'jetsetgo-chat-api',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // '' = load every variable from .env (not only the ones starting with VITE_).
  // These stay on the server; nothing here is put into the browser bundle.
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }
  return {
    plugins: [react(), chatApiPlugin(env)],
  }
})
