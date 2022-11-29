import express from 'express'
import db from './db'

// Create server in express
const app = express()

// app.get('/users/:username', async (req, res) => {
//   const { username } = req.params
//   const user = await db.getUserByUsername(username)
//   res.json(user)
// })

app.get('/users/:username', async (req, res) => {
  const { username } = req.params
  try {
    const user = await db.getUserByUsername(username)
    res.json(user)
  } catch (e) {
    res.status(500).json(e)
  }
})

export { app }