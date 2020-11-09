const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const PORT = process.env.PORT

console.log(PORT)

app.listen(PORT || 5000, () => {
  console.log(`App listening on port ${PORT}!`)
})
