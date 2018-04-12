import * as http from 'http';
import * as socketIo from 'socket.io'

class SocketServer {
	public readonly io: SocketIO.Server

	public constructor(server: http.Server) {
		this.io = socketIo(server)
		this.listen()
	}

	public listen(): void {
		console.log('test')
		this.io.on('connect', (socket: SocketIO.Socket) => {
			console.log('socket is connected')
			socket.on('message', (msg: string | object) => {
				console.log('message: ', msg)
				this.io.emit('message', msg)
			})

			socket.on('disconnect', () => {
				console.log('client disconnected')
			})
		})
	}
}

export { SocketServer }
