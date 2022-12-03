import express from "express"
import http from "http"
import { connect } from "mongoose"
import Middleware, { onNotFound, showError } from "./middleware"
import routes from "./routes"

if (!process.env.PORT) process.exit(1)

const PORT: number = parseInt(process.env.PORT)
const app = express()

connect(
  `mongodb://${process.env.HOSTNAME_APP}:${process.env.DB_PORT}/${process.env.DATABASE}`
)
  .then(() => console.log("\nConnected to MongoDB..."))
  .catch(err => {
    console.error("\nCould not connect to MongoDB..." + err)
    process.exit(1)
  })

app.use("/api/v1", [...Middleware, routes, onNotFound, showError])
app.use("/", [...Middleware, onNotFound, showError])

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.close())
}
