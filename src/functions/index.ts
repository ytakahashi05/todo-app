import * as functions from 'firebase-functions'
import next from 'next'

const dir = __dirname;
const app = next({ dir, conf: { distDir: 'next' } })
const handle = app.getRequestHandler()

export const nextApp = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl)
  return app.prepare().then(() => handle(req, res))
})
