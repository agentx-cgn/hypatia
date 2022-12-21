import express from 'express'
import cors from 'cors'
import router from './router.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('API resides at /api')
})

app.listen(port, () =>
  console.log('test-server listening on port 3000!')
)
