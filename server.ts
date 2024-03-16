import express from 'express'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()
const PORT = process.env.PORT || 8000

const omiseUrl = 'https://api.omise.co'
const omiseVaultUrl = 'https://vault.omise.co'

app.use(cors())

app.use('/api', createProxyMiddleware({
  target: omiseUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}))

app.use('/vault', createProxyMiddleware({
  target: omiseVaultUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/vault': ''
  }
}))

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
