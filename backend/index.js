import express from "express"
import clientRoutes from "./routes/clientRoute.js"

const app = express()
const port = 3000

app.use(express.json())
app.get("/", (req, res) => res.send("Server running"))

app.use("/api", clientRoutes)
app.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
})