const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')

const createRouter = require('./helpers/createRouter')

const app = express()

app.use(express.json({ extended: true }))
app.use(cors({
    origin: config.get('MAIN_URL'),
}))

createRouter(app)

const PORT = config.get('PORT') || 5000

const start = async () => {
    try {
        await mongoose.connect(config.get('MONGO_URI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        app.listen(PORT, () => console.log(`App has been started on port ${ PORT }...`))
    } catch(e) {
        process.exit(1)
    }
}

start()
