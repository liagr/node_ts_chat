import * as dotenv from 'dotenv'
import * as path from 'path'

const dev = dotenv.config({ path: path.resolve(process.cwd(), '.development.env') }).parsed
const prod = dotenv.config({ path: path.resolve(process.cwd(), '.production.env') }).parsed
