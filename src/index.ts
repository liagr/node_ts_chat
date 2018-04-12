import * as http from 'http'
import * as debug from 'debug'

import { Api } from './http_server'

debug('ts-express:server')

const PORT = '5352'

const onError = (error: NodeJS.ErrnoException): void => {
	console.log(error)
}

const onListening = (): void => {
	console.log(`Application listening on localhost:${PORT}`)
}

const server = http.createServer(Api)

server.listen(PORT)
server.on('error', onError)
server.on('listening', onListening)

import * as dotenv from 'dotenv'
import * as path from 'path'

const dev = dotenv.config({ path: path.resolve(process.cwd(), '.development.env') }).parsed
const prod = dotenv.config({ path: path.resolve(process.cwd(), '.production.env') }).parsed
