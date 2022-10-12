
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const routes = require("./routes/users");

app.use(express.json())


app.use("/users", routes)


/* app.get('/', (req, res) => {
  res.send('Server is open')
}) */

app.listen(port, () => {
  console.log(`Server is running ${port}`)
})