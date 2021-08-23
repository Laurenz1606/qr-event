const { authenticateToken } = require("@authfunctions/express")

const Router = require("express").Router()

Router.get("/foo", authenticateToken, (req, res) => {
  res.json({code: 0, text: "bar", randomBytesRepresentingActualData: require("crypto").randomBytes(32).toString("hex")})
})

module.exports = Router