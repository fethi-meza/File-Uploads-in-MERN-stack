const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

const port = 4000 ||process.env.Port

app.get('/', (req, res) => res.send('Hello '))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))