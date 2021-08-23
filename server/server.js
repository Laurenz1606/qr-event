//set port to 7000 in this example
const PORT = 7000

//get dependencies
const { AuthRouter } = require("@authfunctions/express")
const express = require("express")
const cors = require("cors")

//import API Routes
const ApiRouter = require("./Routes/API")

//create express app with cors and bodyparser
const app = express()
app.use(cors())
app.use(express.json())

//setup routers
app.use("/auth", AuthRouter)
app.use("/api", ApiRouter)

//setup our auth event listeners in ./Auth
try {
  require("./Auth")
} catch (error) {
  console.log(error)
}

//listen on PORT and run callback
app.listen(PORT, () => console.log(`Example-Server online on port ${PORT}!`))