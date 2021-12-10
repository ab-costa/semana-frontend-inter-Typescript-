import 'express-async-errors'
import express from 'express'
import { createConnection } from 'typeorm'
import { globalErrors } from './middlewares/globalErrors'
import routes from './routes'

createConnection().then(connection => {
    const PORT = 3333
    const app = express()

    app.use(express.json())    
    app.use(routes)    
    app.use(globalErrors)
    
    app.listen(PORT, () => {
        console.log(`🚀 [SERVER]: Server is running at http://localhost:${PORT}`)
    })

}).catch((error) => {
    console.log('Unable to connect to the database', error)
})

