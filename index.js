const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello DevOps, This is a CI/CD Pipeline!'))
app.listen(3000, () => console.log('Server running on port 3000'))