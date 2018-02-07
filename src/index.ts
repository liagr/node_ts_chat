import * as http from 'http'
import * as debug from 'debug'

import { App } from './Server'

debug('ts-express:server')

const PORT = '5352'

const onError = (error: NodeJS.ErrnoException): void => {
	console.log(error)
}

const onListening = (): void => {
	console.log(`Application listening on localhost:${PORT}`)
}

const server = http.createServer(App)

server.listen(PORT)
server.on('error', onError)
server.on('listening', onListening)
