import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'

class Server {

	public express: express.Application

	constructor () {
		this.express = express()
		this.middleware()
		this.routes()
	}

	private middleware(): void {
		this.express.use(logger('dev'))
		this.express.use(bodyParser.json())
		this.express.use(bodyParser.urlencoded({ extended: false }))
	}

	private routes(): void {
		const router = express.Router()

		router.get('/test', (req, res) => {
			const { query } = req;
			res.send({ query });
		})

		this.express.use('/', router)
	}

}

const App = new Server().express

export { App }
