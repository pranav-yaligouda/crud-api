import express from 'express'
import { NODE_ENV, PORT} from './config/envconfig.js'
const app = express();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${NODE_ENV} environment.`)
})